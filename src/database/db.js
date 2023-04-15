import mongoose from "mongoose"

const connectDatabase = () => {
    console.log('Concetando com o banco de dados')

    mongoose.connect('mongodb+srv://vih:vih1357900@cluster0.bzaa46e.mongodb.net/test',
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log('MongoDB Atlas Conectado')).catch((erro) => console.log(erro))
}

export default connectDatabase;