import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/prueba", {
    useNewUrlParser : true,
    useUnifiedTopology : true
   // useCreateIndex: true
    //useFindAndModifly : true
})
    .then(
        db =>console.log('DB conectada')
    ).catch(
        error => console.log(error)
    )