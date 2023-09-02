
const SERVICE_ID="service_yp3g2eb";
const TEMPLATE_ID="template_xzaxwlb";

function SendMail(){
    var flag=true
    var params={
        my_name: "Nagaraj",
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        from_subject: document.getElementById('from_subject').value,
        from_msg: document.getElementById('from_msg').value,
        from_name: document.getElementById('from_name').value,
        reply_to:"nagaraj.nani.business@gmail.com",
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID,params).then(
        res => {
            console.log("success");
        }
    ).catch(
        error => {
        console.log("failed");
        }
    )
    return flag


}

