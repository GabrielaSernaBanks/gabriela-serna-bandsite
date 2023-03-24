//create a function that will render 
//new comments on the page

// const showsList = document.querySelector('#shows-list');
// const showsEl = document.createElement('div');
// showsEl.classList.add('shows__container');
// showsList.appendChild(showsEl);
// console.log(showsEl);

function displayShowInfo (shows) {
  const showsEl = document.createElement('div');
  showsEl.classList.add('shows__container');
}

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

renderShows();

// function displayShows(shows){
//   for (i=0; i<shows.length; i++){
//     showsEl.innerText = `${shows[i].date}: ${shows[i].venue}: ${shows[i].location}`
//     showsEl.classList.add('shows__details');


    }
  }
}
