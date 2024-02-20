const Skill = require('../models/skill');

module.exports = {
    index, 
    show
};

function show(request, respond) {
    respond.render('skills/show', {
        skill: Skill.getOne(request.params.id)
    })
};

function index(request, respond) {
    respond.render('skills/index', {
        skills: Skill.getAll()
    })
};