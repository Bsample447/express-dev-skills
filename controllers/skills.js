const skill = require('../models/skill.js');


function update(req, res) {
  req.body.done = !!req.body.done;
  skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const entry = skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit skill',
    entry
  });
}

function deleteSkill(req, res) {
  skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  // Models are responible for CRUD'ing the data
  skill.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new',  { title: 'New skills' });  
}

function show(req, res) {
  res.render('skills/show', {
    skill: skill.getOne(req.params.id),
    title: 'skill Details'
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: skill.getAll(),
    title: 'All skills'
  });
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};