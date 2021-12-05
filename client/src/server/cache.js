import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        mapInfoVar: {
          read() {
            return mapInfoVar();
          },
        },
      },
    },
  },
});

export const mapInfoVar = makeVar("");
