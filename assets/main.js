async function getUser() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  const result = data
    .map(function (user) {
      return `
      <div class="user-card">
        <input type="checkbox" id="user-${user.id}" class="user-toggle" hidden />
        <label for="user-${user.id}" class="card-label">
          <p class="name">${user.name}</p>
        </label>
        <div class="user-info">
          <p><span class="label">ID:</span> ${user.id}</p>
          <p><span class="label">Username:</span> ${user.username}</p>
          <p><span class="label">Email:</span> ${user.email}</p>
          <p><span class="label">Phone:</span> ${user.phone}</p>
          <p><span class="label">Website:</span> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
          <p><span class="label">Company:</span> ${user.company.name}</p>
          <p><span class="label">Address:</span> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
          <p><span class="label">Geo Location:</span> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</p>
        </div>
      </div>
    `;
    })
    .join("");

  document.querySelector(".users").innerHTML = result;
}

getUser();
