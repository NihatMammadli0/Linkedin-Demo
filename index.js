window.addEventListener('scroll', (event) => {
  // Get the number of pixels scrolled vertically
  const scrollPosition = document.documentElement.scrollTop;
  const doYouKnowPart = document.querySelector(".do-you-know-part");
  // console.log(doYouKnowPart);  

  // Adjust styles based on the scroll position
  if (scrollPosition < 400) {
    doYouKnowPart.style.visibility = 'hidden';
  } else if(scrollPosition > 400) {
    doYouKnowPart.style.visibility = 'visible';
    // doYouKnowPart.style.transition = 'visibility ease 1s';
  }
});

