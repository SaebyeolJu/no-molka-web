import React from "react";
import App from "../App";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";

export const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache,
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
