console.log("firststep");
document.addEventListener("DOMContentLoaded", function() {

    // Your code to manipulate the DOM goes here
    console.log("DOM content loaded");
});

document.getElementById("download").addEventListener("click", function() {
  debugger
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

var aboutmePage = document.getElementById("aboutmepage");

aboutmePage.addEventListener('mouseenter', function() {
  
    document.getElementById('aboutme1').style.backgroundColor = '#6CBBCC';
    document.getElementById('uicons').style.color = 'white'; 

  })
  aboutmePage.addEventListener('mouseleave', function() {
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
 
    // --------------------------------------mouseenterontestimonialPage---------------------------------------------------

    document.getElementById('testimonial').addEventListener('mouseenter', function() {
      document.getElementById('resume1').style.backgroundColor = '#6CBBCC';
      document.getElementById('ricons').style.color = 'white'; 
  
    })
    document.getElementById('testimonial').addEventListener('mouseleave', function() {
      document.getElementById('resume1').style.backgroundColor = '';
      document.getElementById('ricons').style.color = '#6CBBCC'; 
    });
   
 // --------------------------------------mouseenteronblogPage---------------------------------------------------

        document.getElementById('blogpage').addEventListener('mouseenter', function() {
          document.getElementById('blog1').style.backgroundColor = '#6CBBCC';
          document.getElementById('bicons').style.color = 'white'; 
      
        })
        document.getElementById('blogpage').addEventListener('mouseleave', function() {
          document.getElementById('blog1').style.backgroundColor = '';
          document.getElementById('bicons').style.color = '#6CBBCC'; 
        });

 // --------------------------------------mouseenteronContactMePage---------------------------------------------------

 document.getElementById('contactmepage').addEventListener('mouseenter', function() {
  document.getElementById('contact1').style.backgroundColor = '#6CBBCC';
  document.getElementById('cicons').style.color = 'white'; 

})
document.getElementById('contactmepage').addEventListener('mouseleave', function() {
  document.getElementById('contact1').style.backgroundColor = '';
  document.getElementById('cicons').style.color = '#6CBBCC'; 
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

  document.getElementById('resume1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('testimonial').scrollIntoView({ behavior: 'smooth' }); // Scroll to the about section
  });

  document.getElementById('blog1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('blogpage').scrollIntoView({ behavior: 'smooth' }); // Scroll to the about section
  });

  document.getElementById('contact1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('contactmepage').scrollIntoView({ behavior: 'smooth' }); // Scroll to the about section
  });
  
  document.getElementById('button1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('contactmepage').scrollIntoView({ behavior: 'smooth' }); // Scroll to the about section
  });
  
  // ----------------------------------------------carousel---------------------------------------------------

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



//  -------------------------------------------------contactMePage----------------------------------------------------

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const senderEmail = document.getElementById('emailt').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent('Contact Form Message from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + senderEmail + '\n\nMessage:\n' + message);
  
  window.location.href = `mailto:megna.sth1@gmail.com?subject=${subject}&body=${body}`;
});


