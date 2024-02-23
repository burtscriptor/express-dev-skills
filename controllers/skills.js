const Skill = require('../models/skill');

module.exports = {
    index, 
    show,
    new: newSkill,
    create,
    deleteSkill,
};

function newSkill(request, respond) {
    respond.render('skills/new')
    console.log('add skill pressed');
};

function create(request, respond) {
        Skill.create(request.body)
        console.log("request",request.body)
    respond.redirect('/skills');
};

function show(request, respond) {
    const skill = Skill.getOne(request.params.id);
    console.log(skill); 
    respond.render('skills/show', { skill });
};


function index(request, respond) {
    respond.render('skills/index', {
        skills: Skill.getAll()
    })
};

function deleteSkill (request, respond) {
    Skill.deleteOne(request.params.id);
    respond.redirect('/skills');
}

