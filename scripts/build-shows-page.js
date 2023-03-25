const shows=[
  {
  date: "Mon Sept 06 2021",
  venue: "Ronald Lane1", 
  location: "San Francisco, CA"
},
{
  date: "Tue Sept 21 2021",
  venue: "Pier 3 East", 
  location: "San Francisco, CA"
},
{
  date: "Fri Oct 15 2021",
  venue: "View Lounge", 
  location: "San Francisco, CA"
},
{
  date: "Sat Nov 06 2021 ",
  venue: "Hyatt Agency", 
  location: "San Francisco, CA"
},
{
  date: "Fri Nov 26 2021",
  venue: "Moscow Center", 
  location: "San Francisco, CA"
},
{
  date: "Wed Dec 15 2021  ",
  venue: "Press Club", 
  location: "San Francisco, CA"
},
];  

const showsList = document.getElementById('shows__list');

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
    venueInfo.innerText = shows[i].venue;
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

displayShowInfo(shows)




  

