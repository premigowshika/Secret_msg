function revealMessage() {
    var message = document.getElementById("secret-message");
    var button = document.getElementById("reveal-button");
  
    // Toggle the display property to show/hide the secret message
    if (message.style.display === "none") {
      message.style.display = "block";
      button.innerText = "Hide Secret Message";
  
      // Generate floating hearts and crackers when revealing the message
      for (let i = 0; i < 5; i++) {
        createFloatingHeart();
        createBurstingCracker();
      }
    } else {
      message.style.display = "none";
      button.innerText = "Reveal Secret Message";
    }
  }
  
  // Function to create a floating heart
  function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
  
    // Set random position
    const xPos = getRandomNumber(0, window.innerWidth);
    const yPos = getRandomNumber(0, window.innerHeight);
  
    heart.style.left = xPos + "px";
    heart.style.top = yPos + "px";
  
    // Append heart to the animations-container
    document.querySelector(".animations-container").appendChild(heart);
  
    // Animate the heart
    animateFloatingHeart(heart);
  }
  
  // Function to animate a floating heart
  function animateFloatingHeart(heart) {
    const duration = getRandomNumber(2, 5);
    const delay = getRandomNumber(0, 3);
  
    heart.style.animation = `floatHeart ${duration}s ease-in-out ${delay}s infinite`;
  }
  
  // Function to create a bursting cracker
  function createBurstingCracker() {
    const cracker = document.createElement("div");
    cracker.className = "cracker";
  
    // Set random position
    const xPos = getRandomNumber(0, window.innerWidth);
    const yPos = getRandomNumber(0, window.innerHeight);
  
    cracker.style.left = xPos + "px";
    cracker.style.top = yPos + "px";
  
    // Append cracker to the animations-container
    document.querySelector(".animations-container").appendChild(cracker);
  }
  
  // Function to generate a random number within a specified range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  