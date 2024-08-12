const cities = [
    {
      "id": 301,
      "name": "New York",
      "population": 8398748,
      "country": "United States"
    },
    {
      "id": 302,
      "name": "Paris",
      "population": 2140526,
      "country": "France"
    },
    {
      "id": 303,
      "name": "Tokyo",
      "population": 13960000,
      "country": "Japan"
    },
    {
      "id": 304,
      "name": "Sydney",
      "population": 5230330,
      "country": "Australia"
    },
    {
      "id": 305,
      "name": "Cairo",
      "population": 9121515,
      "country": "Egypt"
    }
  ];
  function getCityPopulation(city) {
    return city.population
  }
  console.log(getCityPopulation(cities[0]));
  function isPopulationAboveThreshold(city, threshold) {
    if(threshold<=city.population){
        return true
    }else{
        return false
    }
  }
  console.log(isPopulationAboveThreshold(cities[1], 2000000));
  const newCity = {
    "id": 306,
    "population": 1200000,
    "country": "Canada"
  };
  
  function addCity(cities, city) {
    cities.push(city)
    return cities
  }
  
console.log(addCity(cities, newCity));
  
let numCities=0
function countCitiesInCountry(cities, country) {
    for (let index = 0; index < cities.length; index++) {
        if(cities[index].country==[country]){
            numCities=numCities+1
        }
        
    }
    return numCities
    
  }
   console.log(countCitiesInCountry(cities, "France"));
   
   