import {ApolloServer, gql} from 'apollo-server-micro';
import typeDefs from '../../db/schema';
import resolvers from '../../db/resolvers';
import dbConnect from '../../db/config';

dbConnect()

export const schema = new ApolloServer({
    typeDefs, 
    resolvers
})

// export const config = { 
//     api: {
//         bodyParser: false,
//     }
// }

// export default new ApolloServer({schema}).createHandler({
//     path: '/api/graphql'
// })

module.exports = schema.start().then(
    ()=>{
        return schema.createHandler({
            path: '/api/graphql'
        })
    }
)