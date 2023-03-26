//comments array being displayed on page
let comments=[
  {
  name: "Connor Walton",
  date: "02/17/2021", 
  comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
},
{
  name: "Emilie Beach",
  date: "01/09/2021", 
  comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
},
{
  name: "Miles Acosta",
  date: "12/20/2020", 
  comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
}
]; 


//create the comments on the bio page//
const commentContainer = document.getElementById('comment__container')
function displayComments(array){
  commentContainer.innerHTML = ""
  for(i=0; i<array.length; i++){

    const userInfo = document.createElement ('div');
    userInfo.classList.add('userComments__info');

    const image = document.createElement ('div');
    image.classList.add('userComments__image');

    const details = document.createElement ('div');
    details.classList.add('userComments__details');

    const name = document.createElement ('p');
    name.classList.add('userComments__name');
    name.innerText = array[i].name;

    const date = document.createElement ('p');
    date.classList.add('userComments__date');
    date.innerText = array[i].date;
    details.appendChild(date);
    details.appendChild(name);

    const comment = document.createElement ('p');
    comment.classList.add('userComments__detail');
    comment.innerText = array[i].comment;

    userInfo.appendChild(image);
    userInfo.appendChild(details);
    userInfo.appendChild(comment);

    commentContainer.appendChild(userInfo);
  }
}

displayComments(comments)

//creates new comments in the bio page//
const form = document.querySelector('.comments__form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let time = new Date().toLocaleDateString();
  let newUserComment = {
    name: event.target.fullName.value,
    date: time,
    comment: event.target.comment.value,
  };
  
  event.target.fullName.value = ""
  event.target.comment.value = ""

  comments.unshift(newUserComment)

  displayComments(comments)
})