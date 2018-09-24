import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLServer } from "graphql-yoga"

const typeDefs = importSchema('schema.graphql')