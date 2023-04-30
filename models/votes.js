let votesData = require('./voteData');

const getAllVotes = () => votesData;

const countAllVotes = () => votesData.length;

const getVotesByStoreId = (storeId) =>
  votesData.filter((vote) => vote.storeId === storeId);

const getVotesByEmail = (email) =>
  votesData.filter((vote) => vote.email === email);

const countStars = ({ totalVotes, archivesCount, votesCount }) => {
  const score = archivesCount * 0.001 + votesCount;

  const starsCount =
    score >= totalVotes * 0.03
      ? 3
      : score >= totalVotes * 0.02
      ? 2
      : score >= totalVotes * 0.01
      ? 1
      : 0;

  return starsCount;
};

const createVote = (newVote) => {
  votesData = [...votesData, newVote];

  return newVote;
};

const updateVote = ({ email, categoryCode, storeId, votedAt }) => {
  votesData = votesData.map((vote) =>
    vote.email === email && vote.categoryCode === categoryCode
      ? { ...vote, storeId, votedAt }
      : vote,
  );

  return votesData.find(
    (vote) => vote.email === email && vote.categoryCode === categoryCode,
  );
};

const deleteVote = ({ email, categoryCode }) => {
  const deletedVote = votesData.find(
    (vote) => vote.email === email && vote.categoryCode === categoryCode,
  );

  votesData = votesData.filter(
    (vote) => vote.email !== email || vote.categoryCode !== categoryCode,
  );

  return deletedVote;
};

module.exports = {
  getAllVotes,
  countAllVotes,
  getVotesByStoreId,
  getVotesByEmail,
  countStars,
  createVote,
  updateVote,
  deleteVote,
};
