import { v4 } from 'uuid';

import * as yup from 'yup';

import User from '../models/user';

class UserController{
    async store (request, response){

        const schema = yup.object({
            name: yup.string().strict(true).required,
            email: yup.string().email().required,
            password_hash: yup.string().min(6).required,
            admin: yup.boolean(),
        });

        try{
            schema.validateSync(request.body, { abortEarly: false});
            } catch (err) {
                return response.status(400).json({ error: err.errors });
                
            }




        const { name, email, password_hash, admin } = request.body;



        const user = await User.create({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        });

        return response.status(201).json({
            id: user.id,
            name,
            email,
            admin,
        });
            
    }

}


export default new UserController();