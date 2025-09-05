

// Type your code below this line!
function FriendList(){
    this.names = [];
}

const insert = new FriendList();
const numFriends = parseInt(process.argv[2]);
for (let i = 0; i < numFriends; i++){
    insert.names.push(process.argv[3 + i]);
}
// Type your code above this line!
console.log(insert.names);
//añadi este comment solo para cambiar mi commit en git, sorry 