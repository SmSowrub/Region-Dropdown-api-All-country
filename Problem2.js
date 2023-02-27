const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
  ];
console.log(data[0].imageURL);
const carIMG=document.getElementById('img');
const createImg=document.createElement("div")
createImg.innerHTML=` <img src="${data[0].imageURL}" style="width: 90%; height:50%; margin: auto;" alt="...">`
carIMG.appendChild(createImg)

const carIMG2=document.getElementById('img2');
const createImg2=document.createElement("div")
createImg2.innerHTML=` <img src="${data[1].imageURL}" style="width: 90%; height:50%; margin: auto;" alt="...">`
carIMG2.appendChild(createImg2)

 document.getElementById('Honda-Sedan').innerText='Car Name : ' + data[0].name;
 document.getElementById('Honda-Sedan2').innerText='Car Name : ' + data[1].name;

 document.getElementById('details').innerText='Details : ' + data[0].description;
 document.getElementById('details2').innerText='Details : ' + data[1].description;

 document.getElementById('price').innerText='Details : ' + data[0].price;
 document.getElementById('price2').innerText='Details : ' + data[1].price;
 