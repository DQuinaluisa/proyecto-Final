import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema =  new Schema({
    username : {
        type: String,
        unique : true
    },
    email : {
        type: String,
        unique: true
    },
    password : {
        type: String,
        required: true
    },

    /** Aqui realizamos una referencia a la tabla role esto se puede hacer gracias a la propiedad ref **/
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps : true,
    versionKey: false
})

   /* Aqui vamos a encriptar la clave del usuario que vamos a registrar* */

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}
   /* Aqui vamos a desencriptar la clave del usuario que va a loguear* */
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


export default model('User', userSchema);