const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  needle.get(url, (error, response, body) => {
    if (error) {
      // console.log('Breed information not found: ', error); // Print the error if one occurred
      return callback(error, null);
    }
  
    const data = body[0];
    // console.log(data);
    // console.log(typeof response.body);
  
    if (data) {
      callback(null, data.description);
    } else {
      callback('Breed not found', null);
    }
  });
};


module.exports = { fetchBreedDescription };