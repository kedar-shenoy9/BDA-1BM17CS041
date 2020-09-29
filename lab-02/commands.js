db.employee.update({name: "Krishna T"}, {$set : {expertise: "ML"}});
db.employee.find({name: "Krishna T"})
db.employee.update({name: "Krishna T"}, {$unset: {expertise: 1}});
db.employee.find({name: "Krishna T"});
db.employee.find();
db.department.find();
db.employee.find(
    { $and: [ {department_id: {$gt: 1001}}, {department_id: {$lt: 1005}} ]},
    {_id: 1, name: 1, department_id: 1}
);
db.employee.find({name: /^A/});
db.employee.find({age: {$gt: 30}});
