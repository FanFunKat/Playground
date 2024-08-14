const order = false;

const breakfastPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (order) {
      resolve('Pancakes');
    } else {
      reject(Error('No pancakes :('));
    }
  }, 3000);
});

breakfastPromise
  .then(breakfast => console.log(`Yay! I have ${breakfast} for breakfast!`))
  .catch(error => console.log(`Oh no! ${error}`))