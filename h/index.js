$("#emailSubmit").click( function() {

  ga('send', {
    hitType: 'event',
    eventCategory: 'conversion',
    eventAction: 'signUp',
    eventLabel: 'h'
  });

  window.location.href = "./error.html";
  return false;
});

$("#signUpHeader").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'click',
    eventLabel: 'h-signUpHeader'
  });
});

$("#signUpBanner").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'click',
    eventLabel: 'h-signUpBanner'
  });
});

$("#learnMore").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'click',
    eventLabel: 'h-learnMore'
  });
});