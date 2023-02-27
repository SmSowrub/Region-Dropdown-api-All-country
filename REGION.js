
const restRegion =(SearchText) => {
    const URL =`https://restcountries.com/v3.1/region/${SearchText}`
    fetch(URL)
    .then(res => res.json())
    .then(data =>displayRegion(data))
}


const displayRegion = (loadData) =>{
  console.log(loadData);
    const allCart = document.getElementById('cardAll');
    allCart.textContent=' ';  
    const regionDropdown=document.getElementById('dropdown');

   const errorMessage= document.getElementById('error-message');
  
  if ( Array.isArray(loadData)) {
    errorMessage.classList.add("d-none")
    
  }
 else{
  errorMessage.classList.remove('d-none')
 }
   

    loadData.slice(0,10).forEach(area=>{
      console.log(area);
      const card=document.createElement('div');
      card.innerHTML=`
      <div class="card mb-3" style="max-width: 540px; height: 200px;">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="${area.flags.png}" class="img-fluid rounded-start h-100 w-100" alt="...">
        </div>
        <div class="col-md-6 ">
          <div class="card-body">
            <h5 class="card-title text-center">${'Region : '+ area.region}</h5>
            <p class="card-text">${'Country : '+ area.name.common}</p>
            <p class="card-text">${'capital : ' + area.capital[0]}</p>
            <p class="card-text">${Object.values(area.languages)[0]}</p>
          </div>
        </div>
      </div>
    </div>
      `
      allCart.appendChild(card)
     
    })
}



document.getElementById('SearchBtn').addEventListener('click', function(){
 const SearchInput=document.getElementById('inputSearch').value;
 restRegion(SearchInput);
})

// restRegion()