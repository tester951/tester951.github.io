$("#emailSubmit").click( function() {

  ga('send', {
    hitType: 'event',
    eventCategory: 'd',
    eventAction: 'conversion',
    eventLabel: 'signUp'
  });

  window.location.href = "./error.html";
  return false;
});

$("#signUpHeader").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'd',
    eventAction: 'track',
    eventLabel: 'signUpHeader'
  });
});

$("#signUpBanner").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'd',
    eventAction: 'track',
    eventLabel: 'signUpBanner'
  });
});

$("#learnMore").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'd',
    eventAction: 'track',
    eventLabel: 'learnMore'
  });
});

$("#inputEmail").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'd',
    eventAction: 'track',
    eventLabel: 'emailInput'
  });
});