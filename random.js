// A random number generator that can be seeded.
//
// The value returned is an integer between 0 and 0.999...
// 
// This implementation can be used to provide repeated sequences for development
// and testing purposes when seeded with a constant.
//
// Using our own method also means it can be temporarily replaced with 
// something that returns fixed values
//
// In production use, seed it with something variable, in the same order of
// magnitude that the value used for 'm' below. For example
//
// const seed = Date.now() % (2 ** 35); // Seed in range [0, 2^35-1]
//

function random(seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  }
  
  let rng = random(12345);

  // Will always produce the same number sequence for the same seed
  console.log(rng()); 
  console.log(rng()); 
  console.log(rng()); 
  console.log(rng()); 
  console.log(rng()); 
  