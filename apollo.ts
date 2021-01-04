import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOCAL_STORAGE_TOKEN } from "./constants";

const token = "token-fr";

export const isLoggedInVar = makeVar(!!token);
export const authTokenVar = makeVar(token);

const httpLink = createHttpLink({
  uri: "http://192.168.1.98:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-jwt": authTokenVar() || "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar;
            },
          },
          token: {
            read() {
              return authTokenVar;
            },
          },
        },
      },
    },
  }),
  connectToDevTools: true,
});
