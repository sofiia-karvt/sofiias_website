console.log("Hello World!");
setupCounter();

function setupCounter() {
  let count = 0;

  function increment() {
    count++;
    document.querySelector("#count").innerHTML = count;
  }

  function decrement() {
    count--;
    document.querySelector("#count").innerHTML = count;
  }

  document.querySelector("#increment").addEventListener("click", increment);
  document.querySelector("#decrement").addEventListener("click", decrement);
}
function toggleHighlight() {
  const paragraph = document.getElementById('toggle-paragraph');
  paragraph.classList.toggle('highlight');
}

// Add and remove class on hover
const hoverParagraph = document.getElementById('hover-paragraph');
hoverParagraph.addEventListener('mouseenter', () => {
  hoverParagraph.classList.add('highlight');
});

hoverParagraph.addEventListener('mouseleave', () => {
  hoverParagraph.classList.remove('highlight');
});
