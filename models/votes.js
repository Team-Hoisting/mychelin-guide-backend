const votesData = require('./voteData');

const getVotes = () => votesData;

const findVotesByStoreId = (id) =>
  votesData.filter((vote) => vote.storeId === id);

module.exports = {
  getVotes,
  findVotesByStoreId,
};
