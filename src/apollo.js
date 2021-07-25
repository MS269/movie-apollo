import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = "http://localhost:4000/";
const cache = new InMemoryCache();
const resolvers = {
  Movie: {
    isLiked: () => false,
  },
  Mutation: {
    toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
      // DOES NOT WORK!
      cache.modify({
        id: `Movie:${id}`,
        fields: {
          isLiked: !isLiked,
        },
      });
    },
  },
};

const client = new ApolloClient({ uri, cache, resolvers });
export default client;
