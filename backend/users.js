const users = [];

function addUser({ id, name, room }) {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // If user already exists
  // if (users.find((user) => user.name === name && user.room === room)) {
  //   return { error: `Username already exists!` };
  // }

  const newUser = { id, name, room };
  users.push(newUser);
  return { newUser };
}

function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getUser(id) {
  users.find((user) => user.id === id);
}

function getUsersInRoom(room) {
  users.filter((user) => user.room === room);
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
