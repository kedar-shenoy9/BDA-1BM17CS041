db.bank_data.aggregate([
    {
        $group: {
            _id: "$region",
            total_income: {$sum: "$income"},
            average_children: {$avg: "$children"}
        }
    }
])
