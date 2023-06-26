import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'

export const register = async (req, res) => {
    const {email, password, rut} = req.body;
    try{

        const  passwordHash = await bcrypt.hash(password, 10);  
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
        });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    try{

        const userFound = await User.findOne({email});
        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado"});


        const  isMatch = await bcrypt.compare(password, userFound.password);
        //validacion contrasenna usuario

        if (!isMatch) return res.status(400).json({ message: "contrasenna mala"});
        
        const token = await createAccessToken({id : userFound._id});

        res.cookie('token', token);
        
        res.json({
            id: userFound._id,
            rut: userFound.rut,
            email: userFound.email,
        })


    }catch(error){
        res.status(500).json({ message: error.message });
    }

    


};

export const logout = async (req, res) => {
    res.cookie('token', "",{ 
        expires: new Date(0)
    })

    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userfound = await User.findById(req.user.id)
    if (!userfound) return res.status(400).json({ message: "usuario no encontrado"});
    return res.json({
        id: userfound._id,
        rut : userfound.rut,
        email: userfound.email,
    })
}