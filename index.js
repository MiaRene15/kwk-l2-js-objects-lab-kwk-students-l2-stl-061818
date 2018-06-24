// Write your solution in this file!

const driver = {

  
}

function updateDriverWithKeyAndValue(key, value) {
 for (const key in driver) {
  delete driver[key];
}
    driver.name = 'Sam';
   
}

