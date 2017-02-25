$("#emailSubmit").click( function() {

  ga('send', {
    hitType: 'event',
    eventCategory: 'conversion',
    eventAction: 'd',
    eventLabel: 'signUp'
  });

  window.location.href = "./error.html";
  return false;
});

$("#signUpHeader").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'd',
    eventLabel: 'signUpHeader'
  });
});

$("#signUpBanner").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'd',
    eventLabel: 'signUpBanner'
  });
});

$("#learnMore").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'd',
    eventLabel: 'learnMore'
  });
});