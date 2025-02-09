// script.js

// Function to handle button click events
let noButtonMessages = [

    'Are you suree?',

    'Pleasee?',

    'Princess think about it:((',

    'Are you suree? :((('

];

let noButtonIndex = 0; // To keep track of the current message index


function selectOption(option) {

    // Check which option was clicked

    if (option === 'yes') {

        // Flash rainbow colors

    {

            document.getElementById('question').innerText = 'I love you :3';
            document.getElementById('no-button').style.display = 'none';
            document.getElementById('yes-button').style.display = 'none'; // Hide the question
            showEnvelope();
            

        };

    } else if (option === 'no') {

        // Change text on the "No" button to the next message

        document.getElementById('no-button').innerText = noButtonMessages[noButtonIndex];

        

        // Update the index for the next message

        noButtonIndex = (noButtonIndex + 1) % noButtonMessages.length;


        // Increase font size of "Yes" button

        var yesButton = document.getElementById('yes-button');

        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');

        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2

        yesButton.style.fontSize = newSize + 'px';

    } else {

        // If neither "Yes" nor "No" was clicked, show an alert message

        alert('Invalid option!');

    }

}


function showEnvelope() {

    const envelope = document.getElementById('envelope');

    envelope.classList.remove('hidden');

    envelope.classList.add('animate'); // Add animation class

    envelope.style.transform = 'scale(1)'; // Ensure the envelope scales to 1

    envelope.style.opacity = '1'; // Ensure the envelope is fully opaque

    function showEnvelope() {

    const envelope = document.getElementById('envelope');

    envelope.classList.remove('hidden');

    setTimeout(() => {

        envelope.classList.add('show'); // Add animation class

    }, 10); // Small timeout to ensure the class is applied after rendering

}

    

    // Use a timeout to allow the browser to render the element before adding the animation class

    setTimeout(() => {

        envelope.classList.add('show'); // Add animation class

    }, 10); // Small timeout to ensure the class is applied after rendering

}




// Event listeners for buttons

document.getElementById('yes-button').addEventListener('click', function() {

    selectOption('yes');

});


document.getElementById('no-button').addEventListener('click', function() {

    selectOption('no');

});

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        
    };
}

// Display the cat.gif initially
displayCat();
displayCatHeart();

