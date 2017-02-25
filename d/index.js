$("#emailSubmit").click( function() {

  ga('send', {
    hitType: 'event',
    eventCategory: 'conversion',
    eventAction: 'signUp',
    eventLabel: 'd'
  });

  window.location.href = "./error.html";
  return false;
});

$("#signUpHeader").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'click',
    eventLabel: 'd-signUpHeader'
  });
});

$("#signUpBanner").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'click',
    eventLabel: 'd-signUpBanner'
  });
});

$("#learnMore").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'click',
    eventLabel: 'd-learnMore'
  });
});