$("#emailSubmit").click( function() {

  ga('send', {
    hitType: 'event',
    eventCategory: 'h',
    eventAction: 'conversion',
    eventLabel: 'signUp'
  });

  fbq('track', 'CompleteRegistration');

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

  fbq('track', 'InitiateCheckout');
});

$("#signUpBanner").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'h',
    eventAction: 'track',
    eventLabel: 'signUpBanner'
  });

  fbq('track', 'InitiateCheckout');
});

$("#learnMore").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'h',
    eventAction: 'track',
    eventLabel: 'learnMore'
  });

  fbq('track', 'Search');
});

$("#inputEmail").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'h',
    eventAction: 'track',
    eventLabel: 'emailInput'
  });

  fbq('track', 'Lead');

});

fbq('track', 'ViewContent');