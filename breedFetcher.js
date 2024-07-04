const needle = require('needle');

const breedName = process.argv[2];

if (!breedName) {
  console.error('Breed name required');
  process.exit(1);
}

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

needle.get(url, (error, response) => {
  if (error) {
    console.log('Breed information not found: ', error); // Print the error if one occurred
    return;
  }

  const data = response.body;
  // console.log(data);
  // console.log(typeof response.body);

  if (data.length > 0) {
    console.log('Breed description: ', data[0].description);
  } else {
    console.log('Breed not found');
  }
});
