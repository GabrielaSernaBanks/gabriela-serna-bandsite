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

  // event.target.fullName.value = ""
  // event.target.comment.value = ""

  // const formEl = document.getElementById('postComment');
  // formEl.addEventListener('submit', newPostHandler);

  axios 
  .post(baseURL + `/comments/?api_key=${APIKey}`, newUserComment)
  .then((response) => {
    commentsArray.unshift(response.data);
    displayComments(commentsArray);
    form.reset();
  })
    .catch((error) => {
      console.error('error: ',error);
    });
  });



  // displayComments(comments)