// Loop through all elements with class "drum"
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // Add click event listener to each drum element
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      // Get the innerHTML of the clicked drum button
      var buttonInnerHTML = this.innerHTML;
      // Call makeSound function with the buttonInnerHTML
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
  
    // Add keypress event listener to the entire document
    document.addEventListener("keypress", function(event) {
        // Check if the pressed key is not the spacebar
        if (event.key !== " ") {
          makeSound(event.key);
          buttonAnimation(event.key);
        }
    });
  
    // Function to play the corresponding sound based on the key/button
    function makeSound(key) {
      switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
  
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
  
        case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
  
        case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
  
        case "l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
  
        default:
          break;
      }
    }

    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
        setTimeout(() => {
            activeButton.classList.remove("pressed")
        }, 100);
    }
  }
    