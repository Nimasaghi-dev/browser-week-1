'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
function catWalk() {
   const img = document.querySelector('img');
   let left = 0;
   const screenWidth = window.innerWidth;
   const middleScreenWidth = screenWidth / 2;

   function moveCat () {
      left += 10;
      img.style.left = `${left}px`;

      if (left >= middleScreenWidth - img.width / 2 && left <= middleScreenWidth + img.width / 2) {
         img.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
         setTimeout(() => {
            img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
         }, 5000);
      }
      if(left >= screenWidth){
         left = 0;
      }
   }
   setInterval(moveCat, 50);
}
window.addEventListener('load', catWalk);



//! Do not forget to remove the comments //
//Sure! Let's go through the code line by line to understand what each part does.

// ### 1. `'use strict';`

// - **What it does:** This line enables "strict mode" in JavaScript. In strict mode, JavaScript will catch common coding mistakes and "unsafe" actions like assigning values to undeclared variables.

// ### 2. `function catWalk() {`

// - **What it does:** This line declares a function named `catWalk`. The function contains all the code that will control the movement of the cat image on the webpage.

// ### 3. `const img = document.querySelector('img');`

// - **What it does:** This line selects the first `<img>` element found in the HTML document and assigns it to the variable `img`. This variable now holds a reference to the cat image, allowing you to manipulate it with JavaScript.

// ### 4. `let left = 0;`

// - **What it does:** This line initializes a variable named `left` with a value of `0`. This variable will be used to track the position of the cat image as it moves horizontally across the screen.

// ### 5. `const screenWidth = window.innerWidth;`

// - **What it does:** This line retrieves the width of the browser window (the visible area of the webpage) and stores it in the variable `screenWidth`. This value is needed to know when the cat image has reached the right edge of the screen.

// ### 6. `const middleScreenWidth = screenWidth / 2;`

// - **What it does:** This line calculates the middle point of the screen's width by dividing the screen width by 2. The result is stored in the variable `middleScreenWidth`. This value will be used to determine when the cat reaches the middle of the screen.

// ### 7. `function moveCat () {`

// - **What it does:** This line defines a nested function named `moveCat` inside the `catWalk` function. This function will be responsible for moving the cat image across the screen.

// ### 8. `left += 10;`

// - **What it does:** This line increments the `left` variable by `10` pixels. This means that the cat image will move 10 pixels to the right every time `moveCat` is called.

// ### 9. `img.style.left = `${left}px`;`

// - **What it does:** This line updates the CSS `left` property of the cat image, setting it to the current value of `left` (in pixels). This moves the cat image horizontally across the screen by 10 pixels each time.

// ### 10. `if (left >= middleScreenWidth - img.width / 2 && left <= middleScreenWidth + img.width / 2) {`

// - **What it does:** This `if` statement checks if the cat image is in the middle of the screen. The condition checks whether the `left` position is within a certain range, calculated based on the middle of the screen and half the width of the cat image.

// ### 11. `img.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';`

// - **What it does:** If the cat image is in the middle of the screen, this line changes the `src` attribute of the `<img>` element to a new URL, replacing the walking cat image with a dancing cat image.

// ### 12. `setTimeout(() => { img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"; }, 5000);`

// - **What it does:** This line sets a timeout that waits for 5 seconds (5000 milliseconds) before switching the `src` attribute back to the original walking cat image. This allows the dancing cat to appear for 5 seconds before the cat continues its walk.

// ### 13. `if(left >= screenWidth){ left = 0; }`

// - **What it does:** This `if` statement checks if the cat image has reached or passed the right edge of the screen. If it has, the `left` variable is reset to `0`, which moves the cat back to the left side of the screen to start walking again.

// ### 14. `}` (closes `moveCat` function)

// - **What it does:** This curly brace closes the `moveCat` function.

// ### 15. `setInterval(moveCat, 50);`

// - **What it does:** This line calls the `moveCat` function every 50 milliseconds using `setInterval`. This causes the cat image to move across the screen smoothly and continuously.

// ### 16. `}` (closes `catWalk` function)

// - **What it does:** This curly brace closes the `catWalk` function.

// ### 17. `window.addEventListener('load', catWalk);`

// - **What it does:** This line adds an event listener to the `window` object, which listens for the `load` event (when the entire webpage has finished loading). When the page is fully loaded, the `catWalk` function is executed.

// This code moves a cat image across the screen from left to right, and when it reaches the middle, it temporarily replaces it with a dancing cat image for 5 seconds before continuing its walk. The cat resets to the left side when it reaches the right edge of the screen.