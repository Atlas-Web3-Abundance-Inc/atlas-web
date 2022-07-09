import '../styles/globals.css'
import {gql, useQuery, useMutation,ApolloProvider,ApolloClient,
  InMemoryCache,} from "@apollo/client"
  
  const client = new ApolloClient({
    uri: 'https://atlas-web-six.vercel.app/api/graphql',
    cache: new InMemoryCache()
  });
function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
<Component {...pageProps} />
</ApolloProvider>

}

export default MyApp
