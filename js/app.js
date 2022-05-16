//RENDER DATA FROM API
//PAGINATION
let countData,
    pagesText = document.getElementById('pages-label'),
    currentPage = 1,
    limitPerPage = 10
    beforeElement = document.getElementById('before'),
    afterElement = document.getElementById('after');

const getData = async () => {
    await fetch('http://localhost:3000/address')
    .then((resp) => resp.json())
    .then( data => renderData(data))
    .catch((e) => `There was a problem with the request: ${e.message}`);                   
}

const renderData = function (data) {
  let content = "";
  countData = data.length;
  pagesText.innerText = `${currentPage} - ${limitPerPage} de ${countData}`;

  let addressContainer = document.getElementById('addresses');
  data.forEach(element => {
      content += `
        <tr>
          <td class="text-center" data-bs-toggle="modal" data-bs-target="#location-detail"><img src='assets/Location.svg'></td>
          <td>${element.number_person}</td>
          <td>${element.domicile_type}</td>
          <td>${element.street}</td>
          <td>${element.number}</td>
          <td>${element.sector}</td>
          <td>${element.province}</td>
          <td>${element.status}</td>
        </tr>
      `;
  });
  addressContainer.innerHTML = content;
}

getData();

//SEARCH FUNCTION

let inputSearch = document.getElementById('search');

inputSearch.addEventListener('input', function() {
    let container = document.getElementById('addresses');
    let rows = container.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
      let rowContent = rows[i].textContent.replace(/[\s]+/g, ' ').toLowerCase(); 
      rows[i].style.display = rowContent.includes(inputSearch.value.toLowerCase()) ? "" : "none";
    }  
});

