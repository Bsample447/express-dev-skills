const skills = [
    { id: 1253, skill: "Time Management", has: true },
    { id: 1274, skill: "AWS cloud architecture ", has: true },
    { id: 1398, skill: "Some Python and SQL", has: true },
    { id: 1398, skill: "Good jokes", has: false },
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