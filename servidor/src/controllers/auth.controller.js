 import User from '../models/User'
 import jwt from 'jsonwebtoken'
 import config from '../config'
import Role from '../models/Role'


 export const signUp = async (req, res) => {
  
  try {
    const { username, email, password, roles } = req.body

    const newUser = new User ({
         username, 
         email,
         password: await User.encryptPassword(password)
     })
 
     if(roles){
         const foundRoles = await Role.find({name : {$in: roles}})
         newUser.roles = foundRoles.map(role => role._id)
     } else {
         const role = await Role.findOne({name: "user"})
         newUser.roles = [role._id]
     }
 
    const savedUser =  await newUser.save();
 
     console.log(savedUser)
 
   const token =  jwt.sign({id: savedUser._id}, config.SECRET, {
         expiresIn: 86400 // 24 horas
     })
 
    res.status(200).json({token})
  } catch (error) {
    console.log(error)
  }

 }
        /* Verificamos si el usuario que va ingresar este registrado en la aplicacion* */
 export const signIn = async (req, res) => {
   const userFound = await User.findOne({email: req.body.email}).populate("roles");
   if(!userFound) return res.status(400).json({message: "Usuario no Encontrado"})
   
    const matchPassword =  await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: "Contraseña Invalida" })
   /* Creamos el token el cual contendra el id del usuario* */
  const token =  jwt.sign({id: userFound._id}, config.SECRET, {
      expiresIn: 86400
    })

   console.log(userFound)

   res.json({token, userFound})
 }