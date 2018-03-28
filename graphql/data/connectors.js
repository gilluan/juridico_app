import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost/pet', {
  useMongoClient: true
});

//TODO: verificar conexoes para performance

const UserSchema = Mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = Mongoose.model('User', UserSchema);


const ClienteSchema = Mongoose.Schema({
    nome: String,
    sexo: String,
    nascimento: Number,
    observacoes: String
});

const Cliente = Mongoose.model('Cliente', ClienteSchema);

export { User, Cliente };