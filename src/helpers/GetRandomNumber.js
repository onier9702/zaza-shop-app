
export const GetRandomNumbers = ( min, max ) => {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  
//   console.log(getRandomInt(3));
//   // expected output: 0, 1 or 2