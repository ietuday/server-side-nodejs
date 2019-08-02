var WebPurify = require('webpurify');

var wp = new WebPurify({
    api_key: 'APIKEY'
    //, endpoint:   'us'  // Optional, available choices: 'eu', 'ap'. Default: 'us'.
    //, enterprise: false // Optional, set to true if you are using the enterprise API, allows SSL
});

console.log(wp);

var optional = {
    lang:   'en', // the 2 letter language code for the text you are submitting
    semail: 1,    // treat email addresses like profanity
    sphone: 1,    // treat phone numbers like profanity
    slink:  1     // treat urls like profanity
};

// wp.check('test2 rapidera test')
// .then(profanity => {

//   if (profanity) {
//     console.log('A bunch of sailors in here!');
//   } else {
//     console.log('1-------->This is a pure string');
//   }
// });


wp.check('call me', optional)
.then(profanity => {
  console.log(profanity);
})


