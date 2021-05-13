// code with problem
// const cleanse = (data) => {
//     if (Array.isArray(data)) {
//       return data.map(cleanse);
//     }
//     return Object.keys(data).reduce((result, key) => {
//       const value = data[key];
//       // ignore invalid values
//       if (typeof value === "undefined" || value === null) {
//         return result;
//       }
//       // recursive call
//       if (Array.isArray(value) || typeof value === "object") {
//         result[key] = cleanse(value);
//         return result;
//       }
//       // add valid values result[key] = value;
//       return result;
//     }, {});
//   };
// The problem was with the comment add valid values
// beacause result[key] = value; is not a comment.


// solution working

const data = {
  nickname: "spiderman",
  firstName: "Peter",
  lastName: "Parker",
  age: undefined,
  address: null,
  friends: [
    {
      nickname: "hulk",
      firstName: undefined,
      lastName: "Banner",
      age: 0,
      address: null,
      friends: null,
    },
    {
      nickname: "iron man",
      firstName: "Tony",
      lastName: "Stark",
      age: false,
      address: undefined,
      friends: [
        {
          nickname: "war machine",
          firstName: null,
          lastName: null,
          age: undefined,
          address: undefined,
          friends: [],
        },
      ],
    },
  ],
};

const cleanse = (data) => {
  if (Array.isArray(data)) {
    return data.map(cleanse);
  }
  return Object.keys(data).reduce((result, key) => {
    const value = data[key];
    // ignore invalid values
    if (typeof value === "undefined" || value === null) {
      return result;
    }
    // recursive call
    if (Array.isArray(value) || typeof value === "object") {
      result[key] = cleanse(value);
      return result;
    }
    // add valid values
    result[key] = value;
    return result;
  }, {});
};

const cleaned = cleanse(data);
console.log(cleaned);
