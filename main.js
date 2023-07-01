// Retrieve all li elements
const listItems = document.querySelectorAll('.custom-list-li');

// Generate and apply random color for each li element
listItems.forEach((item) => {
  // Generate random RGB values
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Create the color string
  const color = `rgb(${red}, ${green}, ${blue})`;

  // Apply the color to the ::before pseudo-element
  item.style.setProperty('--random-color', color);
});
