import { findMovieByTitle, findRanking, findMovieById } from './api';

const resolvers = {
  Query: {
    ranking: () => findRanking(),
    search: (_, { title }) => findMovieByTitle(title),
    searchById: (_, { id }) => findMovieById(id),
  }
}

export default resolvers;