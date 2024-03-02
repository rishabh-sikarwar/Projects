
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('application-form');
//     form.addEventListener('submit', submitForm);
// });

// function submitForm(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const data = {};
//     formData.forEach((value, key) => {
//         data[key] = value;
//     });

//     const url = 'https://script.google.com/macros/s/AKfycbzPz-8uHK-jZfb-AhmJ1Lw0OxWxzVR2ve1fQNCuGulGXoYoKVE-KBds37KB5vv--rNDrg/exec';
//     fetch(url, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         console.log('Form data sent successfully!');
//         // You can redirect the user to a thank you page or display a success message here
//     })
//     .catch(error => {
//         console.error('Error sending form data:', error);
//         // Handle errors here
//     });
// }



const scriptURL = 'https://script.google.com/macros/s/AKfycbxgSWo8g5LszVXZ5JJnuLzx9Jy1UeXoOVuZ9lqelX5slzhRRamfCnaauHtwuv1Iwpz0mw/exec'
  const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        success.innerHTML = " Application Successfully Submitted ";

        setTimeout(() => {
           success.innerHTML= " " 
        }, 3000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
