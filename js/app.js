const getData = async () => {
    await fetch('http://localhost:3000/address')
    .then((resp) => resp.json())
    .then( data => renderData(data))
    .catch((e) => `There was a problem with the request: ${e.message}`);                   
}

const renderData = function (data) {
  let content = "";
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