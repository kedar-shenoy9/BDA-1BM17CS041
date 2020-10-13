db.books.save({_id: 1, category: "Machine Learning", bookname: "Machine Learning for Hackers", author: "Drew Conway", qty: 25, price: 400, rol: 30, pages: 350});
db.books.save({_id: 2, category: "Business Intelligence", bookname: "Fundamentals of Business Analytics", author: "Seema Acharya", qty: 55, price: 500, rol: 30, pages: 250});
db.books.save({_id: 3, category: "Analytics", bookname: "Competing on Analytics", author: "Thomas Davenport", qty: 8, price: 150, rol: 20, pages: 150});
db.books.save({_id: 4, category: "Visualization", bookname: "Visualizing Data", author: "Ben Fry", qty: 12, price: 325, rol: 6, pages: 450});
db.books.save({_id: 5, category: "Web Mining", bookname: "Learning R", author: "Richard", price: 850, rol: 10, pages: 120});

// step 2: verify the presence of these data
// step 3: Write a map reduce.
db.books.mapReduce(
    function() {
        let key = null, value = null;
        if(this.pages >= 300){
            key = "Big books";
            value = this.pages;
        }
        else{
            key = "Small books";
            value = this.pages;
        }
        emit(key, value);
    },
    function(key, values){
        return values.length;
    },
    {
        out: "Book_Records"
    }
);

