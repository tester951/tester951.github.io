$("#emailSubmit").click( function() {

  ga('send', {
    hitType: 'event',
    eventCategory: 'conversion',
    eventAction: 'h',
    eventLabel: 'signUp'
  });

  window.location.href = "./error.html";
  return false;
});

$("#signUpHeader").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'h',
    eventLabel: 'signUpHeader'
  });
});

$("#signUpBanner").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'h',
    eventLabel: 'signUpBanner'
  });
});

$("#learnMore").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'track',
    eventAction: 'h',
    eventLabel: 'learnMore'
  });
});