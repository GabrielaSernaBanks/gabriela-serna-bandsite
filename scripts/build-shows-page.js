const baseURL = 'https://project-1-api.herokuapp.com';

const APIKey = 'e91fbd20-51eb-4b90-a65e-32a687a7e98d';

const showsList = document.getElementById('shows__list');

axios 
  .get(baseURL + '/showdates/?api_key=e91fbd20-51eb-4b90-a65e-32a687a7e98d')
  .then((response) => {
    const shows = response.data;
    displayShowInfo(shows);
  })

  .catch((error) => {
    console.log(error);
  })

axios 
  .post('/comments/?api_key=e91fbd20-51eb-4b90-a65e-32a687a7e98d')
  .then((newComment) => {
    displayComments(newComment.data);
    form.reset();
  })
    .catch((error) => {
      console.error('error: ',error);
    });

    )


// const shows=[
//   {
//   date: "Mon Sept 06 2021",
//   venue: "Ronald Lane1",  
//   location: "San Francisco, CA"
// },
// {
//   date: "Tue Sept 21 2021",
//   venue: "Pier 3 East", 
//   location: "San Francisco, CA"
// },
// {
//   date: "Fri Oct 15 2021",
//   venue: "View Lounge", 
//   location: "San Francisco, CA"
// },
// {
//   date: "Sat Nov 06 2021 ",
//   venue: "Hyatt Agency", 
//   location: "San Francisco, CA"
// },
// {
//   date: "Fri Nov 26 2021",
//   venue: "Moscow Center", 
//   location: "San Francisco, CA"
// },
// {
//   date: "Wed Dec 15 2021  ",
//   venue: "Press Club", 
//   location: "San Francisco, CA"
// }
// ];  

//display for shows in correct elements
//append the 'children' to the correct elements

function displayShowInfo(shows) {
  for (i=0; i<shows.length; i++) {

    const showInfo = document.createElement ('div');
    showInfo.classList.add('shows__container');
  
    const datesContainer = document.createElement ('div');
    datesContainer.classList.add('shows__date');
  
    const dateHeader = document.createElement ('p');
    dateHeader.classList.add('shows__subheading');
    dateHeader.innerText = 'DATE'
  
    const dateInfo = document.createElement ('p');
    dateInfo.classList.add('shows__date-info');
    dateInfo.innerText = shows[i].date;
    datesContainer.appendChild(dateHeader);
    datesContainer.appendChild(dateInfo);
  
    const venueContainer = document.createElement ('div');
    venueContainer.classList.add('shows__venue');
  
    const venueHeader = document.createElement ('p');
    venueHeader.classList.add('shows__subheading');
    venueHeader.innerText = 'VENUE'
  
    const venueInfo = document.createElement ('p');
    venueInfo.classList.add('shows__venue-info')
    venueInfo.innerText = shows[i].place;
    venueContainer.appendChild(venueHeader);
    venueContainer.appendChild(venueInfo);
  
    const locationContainer = document.createElement ('div');
    locationContainer.classList.add('shows__location');
  
    const locationHeader = document.createElement ('p');
    locationHeader.classList.add('shows__subheading');
    locationHeader.innerText = 'LOCATION'
  
    const locationInfo = document.createElement ('p');
    locationInfo.classList.add('shows__location-info')
    locationInfo.innerText = shows[i].location;
    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(locationInfo);
  
    const ticketButton = document.createElement ('button');
    ticketButton.classList.add('shows__button');
    ticketButton.innerText = 'BUY TICKETS'
  
  
    showInfo.appendChild(datesContainer);
    showInfo.appendChild(venueContainer);
    showInfo.appendChild(locationContainer);
    showInfo.appendChild(ticketButton);

    showsList.appendChild(showInfo);
  
    }
}

// displayShowInfo(shows)


//gets all six shows and stores it in variable called 'showContainer'
let showContainer = document.querySelectorAll(".shows__container")

//use the Array.from() method to convert the showContainer variable into an Array
//apply a forEach() method to each item in the Array
Array.from(showContainer).forEach(function(el) {
  //add an eventListener and listens for a 'click'
  el.addEventListener("click", (e) => {
    //the target clicked is stored as a variable called 'showBackground'
    //item clicked is one of the six showContainers 
    let showBackground = e.currentTarget;
    //once one of the showContainers is 'clicked' then the class "selected" is toggled 'on/off'
    showBackground.classList.toggle("selected")
  })});


