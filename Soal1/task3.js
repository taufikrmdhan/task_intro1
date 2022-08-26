printSegitiga = (num) => {
  for (let i = 1; i <= num; i++) {
    let a = "";
    for (let j = 1; j <= i; j++) {
      a += i;
    }
    console.log(a);
  }
  return;
};
printSegitiga(5);
