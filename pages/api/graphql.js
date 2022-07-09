import {ApolloServer, gql} from 'apollo-server-micro';
import typeDefs from '../../db/schema';
import resolvers from '../../db/resolvers';
import dbConnect from '../../db/config';

dbConnect()

const apolloServer = new ApolloServer({
    csrfPrevention: true,
    typeDefs, 
    resolvers,
    cors: {
        origin: ["https://localhost:3000", "https://studio.apollographql.com"]
      },
})


const startServer = apolloServer.start();

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://studio.apollographql.com"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
    );
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};




