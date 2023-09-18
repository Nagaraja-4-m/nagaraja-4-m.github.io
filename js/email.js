
const SERVICE_ID="service_yp3g2eb";
const TEMPLATE_ID="template_xzaxwlb";

const btn = document.getElementById('submitButton');


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const rootStyles = getComputedStyle(document.documentElement);
    const mainColor = rootStyles.getPropertyValue('--blue');

    
   btn.value = 'Sending...';
   var params={
        my_name: "Nagaraj",
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        from_subject: document.getElementById('from_subject').value,
        from_msg: document.getElementById('from_msg').value,
        reply_to:"nagaraj.nani.business@gmail.com",
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID,params).then(
        res => {
            console.log("success");
            btn.value = 'Send';
            btn.setAttribute('disabled', true);
            document.getElementById('email-response').innerHTML='Thank you for your message.'
            document.getElementById('email-response').style.color=mainColor;
            document.getElementById('myForm').reset();
        }
    ).catch(
        error => {
        console.log("failed");
        btn.value = 'Send';
        document.getElementById('email-response').innerHTML='A technical issue occured.'
        document.getElementById('email-response').style.color=mainColor;
        }
    )


});


   
//     return flag


// }




// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_xzaxwlb';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });
