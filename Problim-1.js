const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

  
const AllData =person.result;

console.log(AllData[0].address.house);
document.getElementById('Name1').innerText='NAME : ' + person.result[0].name.fullName[0];
document.getElementById('Name2').innerText='NAME : ' + person.result[1].name.fullName[0];
document.getElementById('age1').innerText='Age : ' +AllData[0].age;
document.getElementById('age2').innerText= 'Age : ' + AllData[1].age;

document.getElementById('street1').innerText='STREET : ' + AllData[0].address.street + " " + 'HOUSE : ' + AllData[0].address.house;
document.getElementById('street2').innerText='STREET : ' + AllData[1].address.street + ' ' +'HOUSE : ' + AllData[1].address.house;


// AllData.forEach(data => {
//     const details= document.getElementById('showCard')
//     console.log(data.result.name.fullName);
//     const createCart=document.createElement('div')
//     createCart.innerHTML=`
//     <div class="card m-2">
//     <div class="card-header">
//       Quote
//     </div>
//     <div class="card-body">
//       <blockquote class="blockquote mb-0">
//         <p>${data.result.name.fullName[0]}</p>
//         <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
//       </blockquote>
//     </div>
//   </div>
    
//     `
//     details.appendChild(createCart)
// });



  