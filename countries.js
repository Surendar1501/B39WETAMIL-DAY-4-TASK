// task1
// object comparison
var a = { name: 'person1', age: 5 };
var b = { age: 5, name: 'person1'};

let object = true;

for (var key in a) {
  if(a[key] !== b[key])
   object = false;
}

console.log(object)


// task2 rest countries api
const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');

request.send(null);


request.onload = function () {
  const countries = JSON.parse(request.responseText);
  console.log(countries);


  for (var i = 0; i < countries.length; i++) {
    const { flag, name: {common}, region, subregion, population} = countries[i];
    console.log(flag, common, region, subregion, population);
  }
}

