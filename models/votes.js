const votesData = require('./voteData');

const getVotes = () => votesData;

const findVotesByStoreId = (id) =>
  votesData.filter((vote) => vote.storeId === id);

const findVotesByEmail = (email) =>
  votesData.filter((vote) => vote.email === email);

module.exports = {
  getVotes,
  findVotesByStoreId,
  findVotesByEmail,
};
