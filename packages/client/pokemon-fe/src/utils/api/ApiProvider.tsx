import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./utils"

interface ApiProviderProps {
  children: JSX.Element
}

const ApiProvider = (props: ApiProviderProps) => {
  const { children } = props;

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  )
}

export default ApiProvider