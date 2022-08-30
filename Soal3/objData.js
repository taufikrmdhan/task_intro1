let data = {
  id: 1,
  name: "budi pratama",
  gender: "female",
  height: "165 cm",
  educational: [
    {
      priode: "2013-2016",
      school: "Kalam kudu High School",
      major: "-",
    },
  ],
  phone: {
    primari: "0812312323",
    secondary: "0082342343",
  },
};
const updateData = {...data, name: "Taufik Ramadhan", phone: {...data.phone, primari: "082184293411", secondary: "08218129291"}};
console.log(updateData)

// non destructuring
const phone = data.phone;
console.log(`primary phone: ${phone.primari}, secondary phone: ${phone.secondary}`);
// destructuring
const {phone: {primari,secondary}} = updateData;
console.log(`primary : ${primari}, secondary: ${secondary}`)

let newEducation = {
  priode: "2016-2020",
  school: "State University of Jakarta",
  major: "Accountancy",
};

console.log("menggabungkan data dengan new educational")
let combineObject = {
    ...data,
    educational: [...data.educational, newEducation],
};
console.log(combineObject)
