document.addEventListener("DOMContentLoaded", function() {
    // Your code to manipulate the DOM goes here
    console.log("DOM content loaded");
});

document.getElementById("download").addEventListener("click", function() {
    // URL of the file to download
    var fileUrl = "	https://megna-shrestha.github.io/portfolio/assets/CV.pdf";

    // Creating a temporary anchor element
    var downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;

    // Setting the filename for the downloaded file
    downloadLink.download = "CV.pdf";

    // Appending the anchor element to the DOM
    document.body.appendChild(downloadLink);

    // Simulating a click to trigger the download
    downloadLink.click();

    // Removing the anchor element from the DOM
    document.body.removeChild(downloadLink);
});




// --------------------------------------mouseenteronAboutMePage---------------------------------------------------
  document.getElementById('aboutmepage').addEventListener('mouseenter', function() {
  
    document.getElementById('aboutme1').style.backgroundColor = '#6CBBCC';
    document.getElementById('uicons').style.color = 'white'; 

  })
  document.getElementById('aboutmepage').addEventListener('mouseleave', function() {
    document.getElementById('aboutme1').style.backgroundColor = '';
    document.getElementById('uicons').style.color='#6CBBCC';
  });

  // --------------------------------------mouseenteronMyWorksPage---------------------------------------------------

  document.getElementById('workpage').addEventListener('mouseenter', function() {
    document.getElementById('work1').style.backgroundColor = '#6CBBCC';
    document.getElementById('oicons').style.color = 'white'; 

  })
  document.getElementById('workpage').addEventListener('mouseleave', function() {
    document.getElementById('work1').style.backgroundColor = '';
    document.getElementById('oicons').style.color = '#6CBBCC'; 
  });

// --------------------------------------------------Onclickfunctions----------------------------------------------
document.getElementById('aboutme1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('aboutmepage').scrollIntoView({ behavior: 'smooth' }); // Scroll to the about section
  }); 

document.getElementById('work1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('workpage').scrollIntoView({ behavior: 'smooth' }); // Scroll to the about section
  });
  