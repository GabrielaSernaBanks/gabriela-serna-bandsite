const baseURL = 'https://project-1-api.herokuapp.com';

const APIKey = 'e91fbd20-51eb-4b90-a65e-32a687a7e98d';

const commentsArray = [];
  //get request to API for comments
  axios 
  .get(baseURL + `/comments/?api_key=${APIKey}`)
  .then((response) => {
    commentsArray.push(...response.data);
    const reversedArray = [...commentsArray].reverse();
    displayComments(reversedArray);
    })

  .catch((error) => {
    console.log(error);
  })

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
    const epoch = array[i].timestamp;
    const fullDate = new Date(epoch).toLocaleDateString()
    date.innerText = fullDate;
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

//creates new comments in the bio page//
const form = document.querySelector('.comments__form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let newUserComment = {
    "name": event.target.fullName.value,
    "comment": event.target.comment.value,
  };

  axios 
  .post(baseURL + `/comments/?api_key=${APIKey}`, newUserComment)
  .then((response) => {
    commentsArray.push(response.data);
    const reversedArray = [...commentsArray].reverse();
    displayComments(reversedArray);
    form.reset();
  })
    .catch((error) => {
      console.error('error: ',error);
    });
  });


// const commentsForm = document.querySelector(".comments__form");
// const firstName = document.querySelector(".comments__fullName");
// const lastName = document.querySelector(".comments__newComment");

// commentsForm.addEventListener("submit", submitComment);

// function submitComment(e) {
//   e.preventDefault();

//   const firstNameInput = firstName.value;
//   const lastNameInput = lastName.value;
//   const commentInput = comment.value;

//   if (firstNameInput ==="") {
//     firstName.style.border = "2px solid #D22D2D";
//     return false;
//   }

//   if (lastNameInput ==="") {
//     lastName.style.border = "2px solid #D22D2D";
//     return false;
//   }

//   if (commentInput ==="") {
//     comment.style.border = "2px solid #D22D2D";
//     return false;
//   }
// }
