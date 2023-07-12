// const skills = [
//     { id: 1111, skill: "Time Management", has: true },
//     { id: 2222, skill: "AWS cloud architecture ", has: true },
//     { id: 3333, skill: "Some Python and SQL", has: true },
//     { id: 4444, skill: "Good jokes", has: false },
//   ];
  
//   function getAll() {
//     return skills;
//   }
  
//   function getOne(id) {
//     id = parseInt(id);
//     return skills.find((skill) => skill.id === id);
//   }
  
//   module.exports = {
//     getAll,
//     getOne,
//   };

const skills = [
  {id: 1111, skill: 'stuff', done: true},
  {id: 2222, skill: 'things', done: false},
  {id: 3333, skill: 'bad jokes', done: true}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  // Find the index for the skill
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}