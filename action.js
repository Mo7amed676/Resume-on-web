


// const scrollButton = document.getElementById("scroll-button");

// function updateScrollButton() {
//   if (window.scrollY > 0) {
//     scrollButton.querySelector(".fa-arrow-up").style.display = "block";
//     scrollButton.querySelector(".fa-arrow-down").style.display = "block";
//     scrollButton.classList.remove("down");
//     scrollButton.classList.add("up");
//     scrollButton.style.display = "block";
//   } else {
//     scrollButton.querySelector(".fa-arrow-up").style.display = "none";
//     scrollButton.querySelector(".fa-arrow-down").style.display = "block";
//     scrollButton.classList.remove("up");
//     scrollButton.classList.add("down");
//     scrollButton.style.display = "none";
//   }

//   if (window.scrollY < (document.documentElement.scrollHeight - window.innerHeight)) {
//     scrollButton.querySelector(".fa-arrow-down").style.display = "block";
//     scrollButton.querySelector(".fa-arrow-up").style.display = "block";
//     scrollButton.classList.remove("up");
//     scrollButton.classList.add("down");
//     scrollButton.style.display = "block";
//   } else {
//     scrollButton.querySelector(".fa-arrow-down").style.display = "none";
//     scrollButton.querySelector(".fa-arrow-up").style.display = "block";
//     scrollButton.classList.remove("down");
//     scrollButton.classList.add("up");
//     scrollButton.style.display = "none";
//   }
// }

// window.addEventListener("scroll", updateScrollButton);
// window.addEventListener("resize", updateScrollButton);
// window.addEventListener("load", updateScrollButton);

// scrollButton.addEventListener("click", () => {
//   if (scrollButton.classList.contains("up")) {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   } else {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth"
//     });
//   }
// });

// ///////////////////////////////////////////////////////////////

window.addEventListener('load', function() {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});


function scrollProgressBar() {
    var getMax = function () {
      return $(document).height() - $(window).height();
    };
  
    var getValue = function () {
      return $(window).scrollTop();
    };
  
    var progressBar = $(".progress-bar"),
      max = getMax(),
      value,
      width;
  
    var getWidth = function () {
      value = getValue();
      width = (value / max) * 100;
      width = width + "%";
      return width;
    };
  
    var setWidth = function () {
      progressBar.css({ width: getWidth() });
    };
  
    $(document).on("scroll", setWidth);
    $(window).on("resize", function () {
      max = getMax();
      setWidth();
    });
  }
  
  $(document).ready(function () {
    scrollProgressBar();
  });
  

  // Get the button:
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button:
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document:
scrollToTopBtn.addEventListener("click", function() {
  // Use smooth scrolling for a more pleasant experience:
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


function toggleContent() {
  var content = document.querySelector('.subsection .content');
  content.classList.toggle('hidden');
}


// var button = document.querySelector('.subsection .btn');
// button.addEventListener('click', toggleContent);

// $(document).ready(function() {
//   $('.subsection').click(function() {
//     var popup = $(this).find('.popup');
//     popup.show();
//     $('body').addClass('popup-open');
//   });

//   $('.popup').click(function(e) {
//     e.stopPropagation();
//   });

//   $('html').click(function() {
//     $('.popup').hide();
//     $('body').removeClass('popup-open');
//   });
// });

// function submitForm() {
//   var name = $('#name').val();
//   var email = $('#email').val();
//   var message = $('#message').val();

//   var dataString = 'name=' + name + '&email=' + email + '&message=' + message;

//   $.ajax({
//     type: 'POST',
//     url: 'submit-form.php',
//     data: dataString,
//     dataType: 'json',
//     success: function(response) {
//       var messageBox = $('#message-box');
//       if (response.status === 'success') {
//         messageBox.removeClass('error').addClass('success').html('<p>' + response.message + '</p>').show();
//       } else {
//         messageBox.removeClass('success').addClass('error').html('<p>' + response.message + '</p>').show();
//       }
//     },
//     error: function() {
//       var messageBox = $('#message-box');
//       messageBox.removeClass('success').addClass('error').html('<p>Error sending message. Please try again later.</p>').show();
//     }
//   });
// }



// // get the section element
// var section = document.getElementById("my-section");

// // get the number of subsections in the section
// var subsections = section.getElementsByClassName("subsection00").length;

// // if there is only one subsection, make the section flexible in size
// if (subsections === 1) {
//   section.style.height = "auto";
// }

// const section = document.querySelector('#my-section');
// const subsections = section.querySelectorAll('.my-subsection');

// if (subsections.length === 1) {
//   subsections[0].style.width = '100%';
// }

// const section = document.querySelector('#my-section');
// const subsections = section.querySelectorAll('.my-subsection');

// if (subsections.length === 1) {
//   subsections[0].style.width = '100%';
// } else if (subsections.length > 1) {
//   section.style.display = 'flex';
//   section.style.flexDirection = 'column';
//   subsections.forEach(subsection => {
//     subsection.style.flex = 'none';
//     subsection.style.width = '100%';
//   });
// }



let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");

  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
    navbar.classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
}


// Add active class to "Home" link when at the top of the page
const homeLink = document.querySelector('.nav-link[href="#home"]');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition === 0) {
    homeButton.classList.add('act');
  } else {
    homeButton.classList.remove('act');
  }
});

// Scroll to top of page when "Home" button is clicked
const homeButton = document.querySelector('.act');
homeButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll to top of page when "Home" button is clicked
const logoButton = document.querySelector('.logo');
logoButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
			var scrollPosition = window.scrollY;

			if (scrollPosition > 0) {
				navbar.classList.add('opaque');
			} else {
				navbar.classList.remove('opaque');
			}
});




const partnersList = document.querySelector('.partners-list');

partnersList.addEventListener('animationiteration', () => {
  partnersList.scrollTo(0, 0);
});
