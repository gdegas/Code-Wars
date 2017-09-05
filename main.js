
let friendsArray = ['boob', 'mange', 'lets', 'googgber']

function friend(friends) {
  return friends.filter(function(friend) {
    return friend.length === 4
  })
}

console.log(friend(friendsArray))
