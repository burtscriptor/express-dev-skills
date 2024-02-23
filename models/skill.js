const skills = [
    {id: 1, name: 'Wireframing', description: 'Planning'},
    {id: 2, name: 'DRY', description: 'Efficient and readable code'}, 
    {id: 3, name: 'Styling', description: 'Likable layouts'}
];

module.exports = {
    getAll,
    getOne,
    create
};

function create(skill) {
    console.log(skill);
    skill.id = 5; //skills.length + 1;
    skills.push(skill);
    console.log(skill);
}
function getOne(id) {
    id = parseInt(id);
    console.log(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}


