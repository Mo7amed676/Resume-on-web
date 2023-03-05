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

