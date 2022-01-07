import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import store from "../../redux";
import { notification } from "../../methods";

const httpLink = new HttpLink({ uri: "https://api.pishroopardakht.com/graphql" });

const handleRequest = new ApolloLink((operation, forward) => {
  store.dispatch({ type: "PUSH_LOADING" });

  const token = localStorage.getItem("token");
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      token,
    },
  }));
  return forward(operation);
});
const handleResponse = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    store.dispatch({ type: "POP_LOADING" });
    return response;
  });
});

const handleError = onError(({ graphQLErrors, networkError }) => {
  store.dispatch({ type: "POP_LOADING" });
  if (graphQLErrors) {
    for (const i in graphQLErrors) {
      graphQLErrors[i].data.forEach((item) => {
        notification({ text: item.message });
      });
    }
  }
  if (networkError) {
    notification({ text: "Network error !" });
  }
});

// const defaultOptions = {
//   watchQuery: {
//     fetchPolicy: "network-only",
//   },
//   query: {
//     fetchPolicy: "network-only",
//     errorPolicy: "none",
//   },
//   mutate: {
//     fetchPolicy: "network-only",
//     errorPolicy: "none",
//   },
// };

const clientGraphQL = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([handleError, handleRequest, handleResponse, httpLink]),
  // defaultOptions,
});
export default clientGraphQL;
