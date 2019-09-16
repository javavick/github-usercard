/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

/*========== CARD CREATOR FUNCTION ==========*/
function cardCreator(object) {
  // New Elements
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const address = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // Attributes and Text
  card.classList.add("card");
  img.setAttribute("src", object.avatar_url);
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  name.textContent = object.name;
  username.classList.add("username");
  username.textContent = object.login;
  location.textContent = `Location: ${object.location}`;
  profile.textContent = "Profile: ";
  address.setAttribute("href", object.html_url);
  address.textContent = object.html_url;
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;

  // Component Structure
  profile.appendChild(address);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  card.appendChild(img);
  card.appendChild(cardInfo);

  return card;
}

/*========== AXIOS GET REQUEST (JAVAVICK) ==========*/

// Element to append cards to
const cards = document.querySelector(".cards");

// Array of Github Handles
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

// Axios GET Request (Javavick)
axios
  .get("https://api.github.com/users/javavick")
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    cards.appendChild(cardCreator(response.data));
    return response;
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

// Axio GET Request (Github Handles Array)
followersArray.forEach((item) => {
  axios
    .get(`https://api.github.com/users/${item}`)
    .then((response) => {
      cards.appendChild(cardCreator(response.data));
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
});
