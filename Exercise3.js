function capitalizeNames(arr) {
    return arr.map(name => 
      name.toLowerCase().replace(/^\w/, char => char.toUpperCase())
    );
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  