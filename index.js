// // const radius = [3, 1, 2, 4];

// // const aria = function (radius) {
// //   return Math.PI * radius * radius;
// // };

// // const cicumference = function (radius) {
// //   return 2 * Math.PI * radius;
// // };

// // const diameter = function (radius) {
// //   return 2 * radius;
// // };

// // const calculate = function (arr, logic) {
// //   const output = [];
// //   for (let i = 0; i < radius.length; i++) {
// //     output.push(logic(arr[i]));
// //   }
// //   return output;
// // };
// // // console.log(calculate(radius, aria));

// // Array.prototype.calculate = function (logic) {
// //   const output = [];
// //   for (let i = 0; i < this.length; i++) {
// //     output.push(logic(this[i]));
// //   }
// //   return output;
// // };

// // console.log(radius.calculate(aria));
// // console.log(radius.calculate(cicumference));
// // console.log(radius.calculate(diameter));

// // console.log(calculate(radius, cicumference));
// // console.log(calculate(radius, diameter));

// // const calculateCercumfrance = function (radius) {
// //     const output = [];
// //     for(let i = 0; i < radius.length; i++ ) {
// //        output.push(2* Math.PI * radius[i]);
// //     }
// //     return output;
// // };

// // console.log(calculateCercumfrance(radius));

// // const calculateDiameter = function (radius) {
// //     const output = [];
// //     for(let i = 0; i < radius.length; i++ ) {
// //        output.push(2*radius[i]);
// //     }
// //     return output;
// // };

// // console.log(calculateDiameter(radius));

// const list = [
//   {
//     id: 1,
//     title: "Product 1",
//     description: "Awesome product",
//   },
//   {
//     id: 2,
//     title: "Product 2",
//     description: "Awesome product",
//   },
//   {
//     id: 3,
//     title: "Product 3",
//     description: "Awesome product",
//   },
//   {
//     id: 4,
//     title: "Product 4",
//     description: "Awesome product",
//   },
//   {
//     id: 5,
//     title: "Product 5",
//     description: "Awesome product",
//   },
//   {
//     id: 6,
//     title: "Product 6",
//     description: "Awesome product",
//   },
// ];

// const data = {
//   "todos" : [
//     {
//       id: 1,
//       title: "Product 1",
//       description: "Awesome product",
//     },
//     {
//       id: 2,
//       title: "Product 2",
//       description: "Awesome product",
//     },
//     {
//       id: 3,
//       title: "Product 3",
//       description: "Awesome product",
//     },
//     {
//       id: 4,
//       title: "Product 4",
//       description: "Awesome product",
//     },
//     {
//       id: 5,
//       title: "Product 5",
//       description: "Awesome product",
//     },
//     {
//       id: 6,
//       title: "Product 6",
//       description: "Awesome product",
//     },
//   ]
// };

// const fetchAllTodo = function(){
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () { 
//       resolve(list);
//     }, 5000);
//   });
// } 


// fetchAllTodo()
// .then ((data) => {
//   console.log(data);
// })
// .catch(err =>  console.log(err));

// const fetchtodoByID = function (id) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {

//       // const result1 = list.find(function(list){
//       //   return list.id === id;
//       // })
//       const result = data.todos.find( list => list.id === id );

//       if (result) {       
//         resolve(result);
       
//       } else {
//         reject("ID not found in todo list");
//       }
//     }, 5000);
//   });
// }


// fetchtodoByID(4)
// .then ((data) => {
//   console.log(data);
// })
// .catch(err =>  console.log(err));

// // const myFatch = function (delay, limit) {
// //   return new Promise(function (resolve, reject) {
// //     setTimeout(function () {
// //       if (limit > list.length) {
// //         reject("Out of limit-1");
// //       } else {
// //         const data = list.slice(0, limit);
// //         resolve(data);
// //       }
// //     }, delay);
// //   });
// // };


// // const myFatch1 = function (delay, limit) {
// //   return new Promise(function (resolve, reject) {
// //     setTimeout(function () {
// //       if (limit > list.length) {
// //         reject("Out of limit-2");
// //       } else {
// //         const data = list.slice(0, limit);
// //         resolve(data);
// //       }
// //     }, delay);
// //   });
// // };
// // const myFatch3 = function (delay, limit) {
// //   return new Promise(function (resolve, reject) {
// //     setTimeout(function () {
// //       if (limit > list.length) {
// //         reject("Out of limit-3");
// //       } else {
// //         const data = list.slice(0, limit);
// //         resolve(data);
// //       }
// //     }, delay);
// //   });
// // };
// // myFatch(3000, 5)
// //     .then(function(data){
// //         console.log(data);
// //     })
// //     .catch(function(err){
// //         console.log(err);
// //     });

// // async function fatchData() {
// //   try {
// //     const data1 = await myFatch(3000, 3);
// //     console.log(data1);
// //   } catch (e) {
// //     console.log(e);
// //   }
// // }
// // fatchData();

// // async function fatchData() {
// //   try {
// //     const data1 = await myFatch(4000, 3);
// //     console.log(data1);

// //     const data2 = await myFatch(2000, 2);
// //     console.log(data2);

// //     const data3 = await myFatch(3000, 1);
// //     console.log(data3);
// //   } catch (e) {
// //     console.log(e);
// //   }
// // }
// // fatchData();

// // myFatch(3000, 3)
// //   .then((data) => {
// //     console.log(data);
// //     return myFatch(2000, 1);
// //   })
// //   .then((data) => {
// //     console.log(data);
// //     return myFatch(4000, 5);
// //   })
// //   .then((data) => {
// //     console.log(data);
// //     console.log("Done");
// //   })
// //   .catch( err => console.log(err));

// // Promise.all([myFatch(8000, 3), myFatch(2000, 2), myFatch(1000, 1)])
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => console.log(err));

// // Promise.race([myFatch(3000, 3), myFatch(2000, 5), myFatch(1000, 5)])
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => console.log(err));

//   // Promise.any([myFatch(3000, 2), myFatch1(2000, 5), myFatch3(1000, 5)])
//   // .then((data) => {
//   //   console.log(data);
//   // })
//   // .catch((err) => console.log(err));

//   // Promise.allSettled([myFatch(3000, 2), myFatch1(2000, 5), myFatch3(1000, 5)])
//   // .then((data) => {
//   //   console.log(data);
//   // })
//   // .catch((err) => console.log(err));
 
// // const p = new Promise((resolve, reject) => {
// //   resolve("Promise call done!");
// // });

// // function getData() {
// //   p.then((res) => console.log(res));
// // }


// // getData();