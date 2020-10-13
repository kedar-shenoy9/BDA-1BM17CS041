db.countries.insert({
    country_id: 1234,
    name: "India",
    capital_city: "New Delhi",
    cities: ["Mumbai", "Kolkata", "Chennai", "Hyderabad", "Mangalore", "Indore", "Patna"],
    population: 1350000000
});
db.countries.find();
// demo of usage of various array operations
// push
db.countries.update({}, {$push: {cities: "Bangalore"}})
// pop
db.countries.update({}, {$pop: {cities: 1}})
// pull
db.countries.update({}, {$pull: {cities: "Chennai"}})
// addToSet
db.countries.update({}, {$addToSet: {cities: "Gurugram"}})
// set
db.countries.update({}, {$set: {"cities.0": "Bombay"}})
