import Role from "../models/Role"

export const createRoles = async () => {

    try {
        /* Aqui creamos los roles automaticamente * */
    const count = await Role.estimatedDocumentCount()
        /* Aqui preguntamos si los roles existen si es mayor a cero no crea 
            caso contrario creara los roles 
        * */
    if (count > 0) return; 

   const values = await Promise.all([
        new Role({name: "user"}).save(),
        new Role({name: "moderator"}).save(),
        new Role({name: "admin"}).save(),
    ])

    console.log(values)
    } catch (error) {
        console.error(error)
    }

}