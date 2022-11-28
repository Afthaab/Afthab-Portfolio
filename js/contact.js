const form = document.getElementById("contactForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //get the values from the user
    const namevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const subjectvalue = subject.value.trim();
    const messagevalue = message.value.trim();
var a=b=c=d=0;
    if(namevalue === ''){
        //show error 
        // add error class
        setErrorFor(username, 'Username cannot be null');

    }else{
        //add success class
        setSuccessFor(username);
        a=1;

    }

    if(emailvalue === ''){
        setErrorFor(email,'Email cannot be blank');
    }
    else if(!isEmail(emailvalue)){
        setErrorFor(email,'Email is not valid')
    }else{
        setSuccessFor(email);
        b=1;
    }

    if(subjectvalue === ''){
        //show error 
        // add error class
        setErrorFor(subject, 'Subject cannot be null');

    }else{
        //add success class
        setSuccessFor(subject);
        c=1;

    }
    if(messagevalue === ''){
        //show error 
        // add error class
        setErrorFor(message, 'message cannot be null');

    }
    else if(messagevalue.length <= 30){
        //show error 
        // add error class
        setErrorFor(message, 'atleast 30 Letters');
    }else if(messagevalue.length >= 150){
        //show error 
        // add error class
        setErrorFor(message, 'atmost 150 Letters');
    }
    else{
        //add success class
        setSuccessFor(message);
        d=1;
        if(a==b==c==d==1){
            // $("#contactForm").submit((e) => {
            //     e.preventDefault()
            //     $.ajax({
            //         url: "https://script.google.com/macros/s/AKfycbwVqpAiCvuNibrOCMcXp8nL6Q-WD6ig0dc6L-jao-fJYf9Iji4VIgGQh-FSdoGBqjEEHw/exec",
            //         data: $("#contactForm").serialize(),
            //         method: "post",
            //         success: function (response) {
            //             alert("Form submitted successfully")
            //             window.location.reload()
            //             //window.location.href="https://google.com"
            //         },
            //         error: function (err) {
            //             alert("Something Error")
            
            //         }
            //     })
            // })
       
                var form = document.getElementById('contactForm');
                var xhr = new XMLHttpRequest();
                var data = new FormData(form);
                console.log(data);
                xhr.open('POST','https://script.google.com/macros/s/AKfycbwVqpAiCvuNibrOCMcXp8nL6Q-WD6ig0dc6L-jao-fJYf9Iji4VIgGQh-FSdoGBqjEEHw/exec')
          
                xhr.send(data);
                xhr.onreadystatechange = function() {
                  if (xhr.readyState == XMLHttpRequest.DONE) {
              alert("Submit successful");
                    form.reset();
                  }
                }
                //Dont submit the form.
                return false; 
              
            };
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message
    small.innerText = message;

    //add error class
    formControl.className = 'form-group errorr';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group successs';
}
function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)
}




// if((nameErr || emailErr || mobileErr || messageErr) != true) {
//     var formm = document.getElementById('formid');
//     var xhr = new XMLHttpRequest();
//     var data = new FormData(form);
//     console.log(data);
//     xhr.open('POST','https://script.google.com/macros/s/AKfycbw9KCuIVX2E4u2KSEWQ1bQ6Qtk-pyifnfOoxwK-9PXPHC1mQq8rl8bMv6J_FiVdJHJ9/exec')

//     xhr.send(data);
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState == XMLHttpRequest.DONE) {
//         Swal.fire({
// icon: 'success',
// title: 'Submit Successful',
// showConfirmButton: false,
// timer: 1500
// })
//         form.reset();
//       }
//     }
//     //Dont submit the form.
//     return false; 
//   }else{
//     Swal.fire({
// icon: 'error',
// title: 'Oops...',
// text: 'Something went wrong!',

// })
//     return false;
//   }

