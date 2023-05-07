const email_js = require('emailjs-com');
function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    email_js.sendForm('service_tk7hucg', 'template_1uh5d7b', e.target, 'ZDyaFUpjb8MbPWzl3')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }