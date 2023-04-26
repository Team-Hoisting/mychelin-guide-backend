const votesData = require('./voteData');

const getVotes = () => votesData;

const getTotalCount = () => votesData.length;

const getStarCount = (totalVotes, archiveCount, voteCount) => {
  const score = archiveCount * 0.001 + voteCount;

  const starCount =
    score >= totalVotes * 0.03
      ? 3
      : score >= totalVotes * 0.02
      ? 2
      : score >= totalVotes * 0.01
      ? 1
      : 0;

  return starCount;
};

const findVotesByStoreId = (id) =>
  votesData.filter((vote) => vote.storeId === id);

const findVotesByEmail = (email) =>
  votesData.filter((vote) => vote.email === email);

module.exports = {
  getVotes,
  getTotalCount,
  findVotesByStoreId,
  findVotesByEmail,
  getStarCount,
};
