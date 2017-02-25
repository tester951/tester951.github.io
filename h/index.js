$("#emailSubmit").click( function() {

  ga('send', {
    hitType: 'event',
    eventCategory: 'h',
    eventAction: 'conversion',
    eventLabel: 'signUp'
  });

  window.location.href = "./error.html";
  return false;
});

$("#signUpHeader").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'h',
    eventAction: 'track',
    eventLabel: 'signUpHeader'
  });
});

$("#signUpBanner").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'h',
    eventAction: 'track',
    eventLabel: 'signUpBanner'
  });
});

$("#learnMore").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'h',
    eventAction: 'track',
    eventLabel: 'learnMore'
  });
});

$("#inputEmail").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'h',
    eventAction: 'track',
    eventLabel: 'emailInput'
  });
});