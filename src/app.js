import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { URL } from "url";
import { resolvers } from "./resolvers/resolvers.js";

const port = 4000;

const typeDefs = loadSchemaSync(
  new URL("./schema/schema.gql", import.meta.url).pathname,
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port },
});

console.log(`The qraphQl server is running at : ${url}`);
