const skills = [
    {id: 1, name: 'Wireframing', description: 'Planning'},
    {id: 2, name: 'DRY', description: 'Efficient and readable code'}, 
    {id: 3, name: 'Styling', description: 'Likable layouts'}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
