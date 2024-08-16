function maxPopulation(cityArray) {
    if (!Array.isArray(cityArray) || cityArray.length === 0) {
      return null; 
    }
  
    let maxPopulationCity = cityArray[0]; 
  
    for (const city of cityArray) {
      if (city.population > maxPopulationCity.population) {
        maxPopulationCity = city; 
      }
    }
  
    return maxPopulationCity;
  }

  const cities = [
    { name: 'New York', population: 100000 },
    { name: 'Los Angeles', population: 20000 },
    { name: 'Chicago', population: 3000 },

  ];
  
  const cityWithMaxPopulation = maxPopulation(cities);
  console.log('City with max population:', cityWithMaxPopulation.name);
  