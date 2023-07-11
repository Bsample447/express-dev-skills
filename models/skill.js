const skills = [
    { id: 1111, skill: "Time Management", has: true },
    { id: 2222, skill: "AWS cloud architecture ", has: true },
    { id: 3333, skill: "Some Python and SQL", has: true },
    { id: 4444, skill: "Good jokes", has: false },
  ];
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  
  module.exports = {
    getAll,
    getOne,
  };