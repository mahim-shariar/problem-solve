
var friends = ["rahim", "karim", "abdul", "sadsd", "heroalom"];


const biglength = (array) => {
  let biglen = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.length > biglen.length) {
      biglen = array[i];
    }
  }
  return biglen;
};

const bigfriends = biglength(friends);
console.log(bigfriends);
