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


const PetSchema = Mongoose.Schema({
    nome: String,
    especie: String,
    cor: String,
    raca: String,
    sexo: String,
    peso: Number,
    nascimento: Number,
    criado: Number,
    ativo: Boolean,
    comportamento: [String], //TODO VERIFICAR
    observacoes: String
});

const Pet = Mongoose.model('Pet', PetSchema);

export { User, Pet };