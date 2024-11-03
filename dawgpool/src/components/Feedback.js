document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.fa-star');
    let selectedRating = 0;
  
    stars.forEach(star => {
      star.addEventListener('mouseover', () => {
        resetStars();
        highlightStars(star.getAttribute('data-value'));
      });
  
      star.addEventListener('mouseleave', () => {
        resetStars();
        if (selectedRating) {
          highlightStars(selectedRating);
        }
      });
  
      star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        highlightStars(selectedRating);
      });
    });
  
    function highlightStars(rating) {
      stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
          star.classList.add('selected');
        }
      });
    }
  
    function resetStars() {
      stars.forEach(star => {
        star.classList.remove('selected');
      });
    }
  });
  