
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Van:Football1989@cluster0.fiunf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  const pipeline = [
    {
      '$match': {
        'accommodates': {
          '$gt': 4
        }, 
        'price': {
          '$lt': 500
        }, 
        'amenities': 'Hair dryer'
      }
    }, {
      '$sort': {
        'price': 1
      }
    }, {
      '$project': {
        'name': 1, 
        'amenities': 1, 
        'price': 1, 
        'images': 1, 
        'description': 1
      }
    }, {
      '$limit': 20
    }
  ]
  const agg = await collection.aggregate(pipeline).toArray();
  console.log(agg)
  client.close();
});
