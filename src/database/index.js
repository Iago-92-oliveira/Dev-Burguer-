import Sequelize from 'sequelize';

import configDatabase from '../config/database';

import User from '../ap/models/user';

const models = [User];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(configDatabase);
        models.forEach((model) => model.init(this.connection));
    }
}

export default new Database();