const breakfastPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pancakes');
  }, 3000);
});

breakfastPromise.then(breakfast => {
  console.log(`Yay! I have ${breakfast} for breakfast!`);
});