import { GraphQLClient } from 'graphql-request';

const requestHeaders = {
  authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MzcyMTc1LCJleHAiOjE2MzA5NjQxNzV9.sADAS6H4lTQf1jh9VVuKT8HKrr-RyRZRDTZT_Arp9ME'
}

const graphqlRequestClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string);

export default graphqlRequestClient;