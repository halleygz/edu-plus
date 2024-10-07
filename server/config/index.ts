import dotenv from 'dotenv'

dotenv.config()

const MONGO_URI: string = process.env['MONGO_URI'] || ''

const SERVER_PORT: number = parseInt(process.env['SERVER_PORT'] || '3000')

const ROUNDS: number = parseInt(process.env['ROUNDS'] || '10')

const JWT_SECRET: string = process.env['JWT_SECRET'] || ''

const JWT_EXPIRATION: string = process.env['JWT_EXPIRATION'] || '1d'

const ENV = process.env['NODE_ENV'] || 'development'

//other api keys

export const config = {
    mongodb: {
        url: MONGO_URI,
    },
    server: {
        port: SERVER_PORT,
    },
    jwt: {
        secret: JWT_SECRET,
        expiration: JWT_EXPIRATION,
    },
    bcrypt: {
        rounds: ROUNDS,
    },

    env: ENV,

    //other api keys

}
