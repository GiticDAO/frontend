 let slideIndex = 0;
const cards = document.getElementsByClassName('slide-card');

function showNextCard() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > cards.length) {
    slideIndex = 1;
  }
  cards[slideIndex - 1].style.display = 'block';
  setTimeout(showNextCard, 3000); // Change slide every 3 seconds (adjust as desired)
}

showNextCard();
