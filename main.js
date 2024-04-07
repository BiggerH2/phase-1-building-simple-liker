// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function () {
  const errorModal = document.getElementById('modal');
  const emptyHeart = document.querySelector('.like-glyph');
  const fullHeart = document.querySelector('.activated-heart');

  // Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
  errorModal.classList.add('hidden');

  // Add event listener for clicking on empty heart
  emptyHeart.addEventListener('click', function () {
      mimicServerCall()
          .then(function () {
              // On success
              emptyHeart.classList.remove('like-glyph');
              emptyHeart.classList.add('activated-heart');
          })
          .catch(function (error) {
              // On failure
              const modalMessage = document.getElementById('modal-message');
              modalMessage.innerText = error;
              errorModal.classList.remove('hidden');
              setTimeout(function () {
                  errorModal.classList.add('hidden');
              }, 3000);
          });
  });

  // Add event listener for clicking on full heart
  fullHeart.addEventListener('click', function () {
      fullHeart.classList.add('like-glyph');
      fullHeart.classList.remove('activated-heart');
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
