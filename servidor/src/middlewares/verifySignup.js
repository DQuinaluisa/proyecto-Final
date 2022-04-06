import { ROLES } from "../models/Role"
import User from "../models/User"

/** Verificacion si el correo o usuario no esten duplicados  **/
export const checkDuplicateUserOrEmail = async (req, res, next) => {
    const user = await  User.findOne({username: req.body.username})
    if(user) return res.status(400).json({message: "Este usuario ya existe"})
    const email = await  User.findOne({email: req.body.email})
    if(email) return res.status(400).json({message: "Este correo ya existe"})
    next()
}
/** Verificacion que el rol que se ingrese exista en la base  **/
export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles)
    {
        for (let i=0; i< req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: `Rol ${req.body.roles[i]} no existe en la base`
                })
            }
        }
    }
    next()
}