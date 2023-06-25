import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'

export const register = async (req, res) => {
    const {email, password, rut} = req.body
    try{

        const  passwordHash = await bcrypt.hash(password, 10)  
        //encriptacion de contraseña 1 metodo de seguiridad

        const newUser = new User({
            rut,
            email,
            password : passwordHash,
        });

        const userSaved = await newUser.save();


        const token = await createAccessToken({id : userSaved._id});

        res.cookie('token', token);
        
        res.json({
            id: userSaved._id,
            rut: userSaved.rut,
            email: userSaved.email,
        })


    }catch(error){
        res.status(500).json({ message: error.message });
    }

    


};
export const login = (req, res) => res.send("login");