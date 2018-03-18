import { User} from './connectors'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const resolvers = {
    Query: {
        async getUser(parent, {id}, context, info) {
            return await User.findById(id);
        },
        async getUsers(parent, args, context, info) {
            return await User.find();
        }
    },
    Mutation: {
        // async addUser(parent, args, context, info) {
        //     let user = await new User(args).save();
        //     console.log('saved', user)
        //     return user;

        // },
        async signup(parent, args, context, info) {
            const password = await bcrypt.hash(args.password, 10)
            let newUser = Object.assign({}, args, {password})
            const user = await new User(newUser).save()
            const token = jwt.sign({userId: user.id}, 'segredo')
            return {
                user,
                token
            }
        },

        async login(parent, args, context, info) {
            const user = await User.findOne({email: args.email})
            console.log('args', args);
            console.log('user', user);
            if(!user) {
                throw new Error(`Could not find user with email: ${args.email}`)
            }
            const valid = await bcrypt.compare(args.password, user.password)
            if(!valid) {
                throw new Error('Invalid password')
            }
            const token = jwt.sign({userId: user.id}, 'segredo')
            return {
                token,
                user
            }
        }
    }
}

export default resolvers;