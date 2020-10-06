db.students.update({roll: 10}, {$set: {email_id: "johnwick@yahoo.com"}});
db.students.update({roll: 11}, {$set: {name: "FEM"}});
mongoexport --collection=students --db=lab-03 --fields="name,roll,age,contact_no,email_id" --type=csv --out=students-1.csv  // export command
db.students.drop(); // drop the collection
mongoimport --collection=students --db=lab-03 --fields="name,roll,age,contact_no,email_id" --type=csv --file=students-1.csv // import from csv
