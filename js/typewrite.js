
var txt = 'I am  a web developer';
var speed = 100;

function typeWriter(i) {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(i);
    }, speed);
  } else {
    // Reset index and start typing again
    setTimeout(function() {
      document.getElementById("demo").innerHTML = ''; // Clear content
      typeWriter(0); // Start typing from the beginning
    }, 1000); // Delay before starting again
  }
}

// Start the typewriter effect when the page loads
typeWriter(0);