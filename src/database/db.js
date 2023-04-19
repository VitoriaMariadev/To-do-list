import mongoose from "mongoose"

const connectDatabase = () => {
    console.log('Concetando com o banco de dados')

    mongoose.connect(process.env.MONGO_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log('MongoDB Atlas Conectado')).catch((erro) => console.log(erro))
}

export default connectDatabase;