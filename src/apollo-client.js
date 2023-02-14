import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://la-ruee-multivendor.myshopify.com/admin/api/2023-01/graphql.json',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.ADMIN_ACCES_TOKEN,
      'Access-Control-Allow-Origin' : 'http://localhost:3000',
    }
  })
});

export default client;