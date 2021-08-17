import { GraphQLClient } from 'graphql-request';

const GraphQLRequestClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string);

export default GraphQLRequestClient;