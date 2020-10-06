db.customers.find({ $and: [{acc_type: "Z"},{acc_bal: {$gt: 1200}}]});
db.customers.aggregate([
    {
        $group: {
            _id: "$cust_id",
            min_bal: {$min: "$acc_bal"},
            max_bal: {$max: "$acc_bal"}
        }
    }
]);
mongoexport --collection=customers --db=lab-03 --fields="cust_id,acc_bal,acc_type" --type=csv --out=customers.csv // export
db.customers.drop(); //drop
mongoimport --collection=customers --db=lab-03 --type=csv --file=customers.csv --fields="cust_id,acc_bal,acc_type" // import
