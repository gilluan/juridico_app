import { User, Cliente} from './connectors'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { isAuthenticatedResolver } from './authenticatedResolver';


const resolvers = {
    Query: {        
        getUser:  isAuthenticatedResolver.createResolver(async (parent, {id}, context, info) => {
            return await User.findById(id);
        }),
        async getUsers(parent, args, context, info) {
            return await User.find();
        },
        async getPerson(parent, args, context, info) {
            return [{name: "gilluan"}, {name: "rayanne"}]
        },
         async getClientes(parent, args, context, info) {
            return await Cliente.find()
        }
    },
    Mutation: {
        saveCliente: async (parent, args, context, info) => {
            let cliente = await new Cliente(args.cliente).save();
            return cliente;
        },
        async signup(parent, args, { SECRET_KEY }, info) {
            const password = await bcrypt.hash(args.password, 10)
            
            let newUser = Object.assign({}, args, {password})
            
            const user = await new User(newUser).save()
            
            const token = jwt.sign({userId: user.id}, SECRET_KEY)

            return { user, token }
        },

        async login(parent, { email, password }, { SECRET_KEY }, info) {
            const user = await User.findOne({ email })
            
            if(!user) { throw new Error(`Could not find user with email: ${email}`) }
            
            const valid = await bcrypt.compare(password, user.password)
            
            if(!valid) { throw new Error('Invalid password') }
            
            const token = jwt.sign({userId: user.id}, SECRET_KEY)
            
            return { token, user }
        }
    }
}

export default resolvers;