function countVotes(votes) {
  var tally = {};
  for (var i = 0; i < votes.length; i++) {
    if (tally[votes[i]]) {
      tally[[i]]++;
    } else {
      tally[votes[i]] = 1;
    }
  }
  console.log("Tally", tally);
  return tally;
}

//countVotes(['KunMan', 'Jun', 'Sam', 'Jack','Paul']);
var votes = {};
function addVotes(candidate) {
  if (votes[candidate]) {
    votes[candidate]++;
  } else {
    votes[candidate] = 1;
  }
}
function countVotes1() {
  return votes;
}

addVotes("Tim");
addVotes("Tim");
addVotes("Tim");
addVotes("Jack");
addVotes("Jack");
countVotes1();
