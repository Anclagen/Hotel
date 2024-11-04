// request headers
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// delete hotel
async function deleteHotel(el) {
  try {
    const raw = JSON.stringify({
      id: parseInt(el.getAttribute("data-id")),
    });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch("http://localhost:3000/hotels", requestOptions);

    if (response.ok) {
      el.parentNode.remove();
    } else {
      alert(`Delete Failed With Status: ${response.status}`);
    }
  } catch (e) {
    alert(`Delete Failed With Error: ${e}`);
  }
}

//add hotel
async function addHotel() {
  const name = window.prompt("Hotel Name", "");
  if (!name) return;

  const location = window.prompt("Hotel Location", "");
  if (!location) return;

  const raw = JSON.stringify({
    Name: name,
    Location: location,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch("http://localhost:3000/hotels", requestOptions);
  const data = await response.json();
  if (response.ok) {
    window.alert("Hotel Successfully Added");
    const hotelsDiv = document.getElementById("hotelList");
    const newHotelDiv = document.createElement("div");
    newHotelDiv.className = "row px-3 py-2 w-100";
    newHotelDiv.innerHTML = `
      <span class="col py-1 bg-info">${data.Name}<span class="right">${data.Location}</span></span>
      <a href="/rooms/${data.id}" class="col btn btn-secondary"> Rent a room</a>
      <a href="/hotels/${data.id}" class="col btn btn-secondary"> Details</a>
      <button class="col btn btn-danger" data-id="${data.id}" onclick="deleteHotel(this)">Delete</button>
    `;
    hotelsDiv.appendChild(newHotelDiv);
  } else {
    alert(`Delete Failed With Status: ${response}`);
  }
}
