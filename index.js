import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

server.start({port: 80} ,() => console.log('Graphql Server Running'));