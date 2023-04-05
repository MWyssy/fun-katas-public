
function getTweetData (tweet) {
  if (tweet === undefined) return {};

  const result = {tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0};
  //function to get the tags
  function getTag(tweet) {
    const tweetArr = tweet.split(' ');
    const result = [];
    for (let i = 0; i < tweetArr.length; i ++) {
      console.log(tweetArr[i][0])
      if (tweetArr[i][0] === '#') {
        result.push(tweetArr[i]);
      };
    };
    const returnArray = [...new Set(result)];
    return returnArray
  }
  //function to get the mentions
  function getMention(tweet) {
    const tweetArr = tweet.split(' ');
    const result = [];
    for (let i = 0; i < tweetArr.length; i ++) {
      console.log(tweetArr[i][0])
      if (tweetArr[i][0] === '@') {
        result.push(tweetArr[i]);
      };
    };
    const returnArray = [...new Set(result)];
    return returnArray
  }
  //function that updates the tweet data
  function updateTweetData(tweet) {
    //update length
    result.length = tweet.length;
    //update tags
    const tags = getTag(tweet);
    for (let i = 0; i < tags.length; i ++) {
      result.tags.push(tags[i]);
      result.tagCount ++;
    };
    //update mentions
    const mentions = getMention(tweet);
    for (let i = 0; i < mentions.length; i ++) {
      result.mentions.push(mentions[i]);
      result.mentionCount ++;
    } ;
  };

  updateTweetData(tweet);

  return result;
};

module.exports = getTweetData;
