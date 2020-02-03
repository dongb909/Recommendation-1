const db = require('./index.js');
const faker = require('faker');


const homeGenerator = () => {
  var homeByCity = (city, state, country) => {
    for (var i = 0; i < 10; i++) {
      let listing = [faker.lorem.word(), faker.lorem.words(5), faker.commerce.price(), faker.random.number(), faker.finance.amount(0,5,2), city, state, country, faker.image.imageUrl()]; 
      db.query(`insert into listings (homeType, title, price, reviewCount, rating, cityName, stateName, country, picture) values(?,?,?,?,?,?,?,?,?);`, listing, (err, results) => { 
      if (err) {
          console.log(err, "could not add to homes table")
        } else {
          console.log('home added')
        }
      });
    }
  }
  homeByCity("Boston", "MA", "US");
  homeByCity("Cupertino", "CA", "US");
  homeByCity("Miami", "FL", "US");
  homeByCity("Denver", "CO", "US");
  homeByCity("San Francisco", "CA", "US");
  homeByCity("Honolulu", "HI", "US");
  homeByCity("Seattle", "WA", "US");
  homeByCity("San Jose", "CA", "US");
  homeByCity("New York", "NY", "US");
  homeByCity("Los Angeles", "CA", "US")


};

homeGenerator()