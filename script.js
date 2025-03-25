// script.js

// Function to animate the numbers
function animateCounter(targetElement, startValue, endValue, duration) {
    let startTime;
    const element = document.getElementById(targetElement);
    
    function updateNumber(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (endValue - startValue) + startValue);
      element.textContent = value;
  
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }
  
    requestAnimationFrame(updateNumber);
  }
  
  // Call the function to animate the numbers
  animateCounter('experienceCounter', 0, 35, 2000);  // 35 years of experience
  animateCounter('projectsCounter', 0, 100, 2000);    // 100 projects executed
  animateCounter('clientsCounter', 0, 20, 2000);      // 20+ clients served
  