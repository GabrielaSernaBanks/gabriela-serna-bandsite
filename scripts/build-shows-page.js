

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


function displayShowInfo (shows) {
  const showInfo = document.createElement ('div');
  showInfo.classList.add('shows__container');

  const datesContainer = document.createElement ('div');
  datesContainer.classList.add('shows__date');

  const dateHeader = document.createElement ('p');
  dateHeader.classList.add('date__subheading');
  dateHeader.innerText('DATE');

  const dateInfo = document.createElement ('p');
  dateInfo.classList.add(shows__date-info);
  datesContainer.appendChild(dateHeader);
  datesContainer.appendChild(dateInfo);

  const venueContainer = document.createElement ('div');
  venueContainer.classList.add(shows__venue);

  const venueHeader = document.createElement ('p');
  venueHeader.classList.add(venue__subheading);

  const venueInfo = document.createElement ('p');
  venueInfo.classList.add('shows__venue-info')
  venueContainer.appendChild(venueHeader);
  venueContainer.appendChild(venueInfo);

  const locationContainer = document.createElement ('div');
  locationContainer.classList.add(shows__location);

  const locationHeader = document.createElement ('p');
  locationHeader.classList.add(location__subheading);

  const locationInfo = document.createElement ('p');
  locationInfo.classList.add('shows__location-info')
  locationContainer.appendChild(locationHeader);
  locationContainer.appendChild(locationInfo);

  const ticketButton = document.createElement ('button');
  ticketButton.classList.add('shows__button');

  showInfo.appendChild(datesContainer);
  showInfo.appendChild(venueContainer);
  showInfo.appendChild(locationContainer);


  return showInfo;
}



// function displayShows(shows){
//   for (i=0; i<shows.length; i++){
//     showsEl.innerText = `${shows[i].date}: ${shows[i].venue}: ${shows[i].location}`
//     showsEl.classList.add('shows__details');


//     }
//   }
// }
