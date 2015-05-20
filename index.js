;(function() {
  var username = window.localStorage.getItem('waitlist_meetup_username');

  if (!username) {
    username = window.prompt(
      'Whats your name? (make sure you spell it the way you spell it in the ' +
      'sidebar)'
    );
    window.localStorage.setItem('waitlist_meetup_username', username);
  }

  var place_in_queue = $('#rsvp-list-waitlist > li:contains(' + username + ')')
                         .index() + 1;
  if (place_in_queue) {
    window.alert('You are number ' + place_in_queue + ' on the waitlist');
  } else {
    window.alert("You are not in the queue :) / :( that means that you're " +
                 "either in or you didn't spell your name as it's spelled " +
                 "in the sidebar (you spelled it \"" + username +
                 "\"), in that case clear the " +
                 "waitlist_meetup_username localstorage key, so that you " +
                 "can make a new attempt on getting it right, or just set it " +
                 "to the right name.")
  }
})();
