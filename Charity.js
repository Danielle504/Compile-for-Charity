count = 0;
count ++;
console.log(count);

module.exports = {counter: count}

function incrementCount(current_count)
{
  str_counter = 0;
  while (str_counter >= 0)
  {
        str_counter_1++;
  }

  db.collection.aggregate( [
   { $group: { _id: null, myCount: { $sum: 0.01 } } },
   { $project: { _id: 0 } }
] )
