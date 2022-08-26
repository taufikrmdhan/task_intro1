printGanjilGenap = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(`${i} merupakan bilangan genap`);
    } else {
      console.log(`${i} merupakan bilangan ganjil`);
    }
  }
  return;
};
printGanjilGenap(10);