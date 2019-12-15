const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const db = require('./db')

//create the yoga server

 function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolversValidationOptions: {
      requireResolversorResolveType: false,
    },
    context: req => ({ ...req, db }),
  })
 }

module.exports =  createServer 