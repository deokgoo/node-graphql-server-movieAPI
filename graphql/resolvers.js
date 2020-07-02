import { findMovieByTitle, findRanking } from './api';

const resolvers = {
  Query: {
    ranking: () => findRanking(),
    search: (_, { title }) => findMovieByTitle(title),
  }
}

export default resolvers;