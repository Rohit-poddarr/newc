
const firebaseConfig = {
  apiKey: "AIzaSyDCd4EnESGhVaSiXNOzU6W4JB62G7ypatQ",
  authDomain: "beyond-forms-bf89c.firebaseapp.com",
  databaseURL: "https://beyond-forms-bf89c-default-rtdb.firebaseio.com",
  projectId: "beyond-forms-bf89c",
  storageBucket: "beyond-forms-bf89c.appspot.com",
  messagingSenderId: "423654135149",
  appId: "1:423654135149:web:1bf6290e47dc535ea6b664",
  measurementId: "G-SRMHL911D3"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};




// //initialize firebase 
// firebase.initializeApp(firebaseConfig);

// //refrence your db 
// var contactFormDB = firebase.database().ref('contactForm')

// document.getElementById('contactForm').addEventListener('submit',submitForm )

// function submitForm(e){
//   e.preventDefault();

//   var name = getElementVal('name');
//   var email = getElementVal('emailid');
//   var msgContent = getElementVal('msgContent');

//   // console.log(name,emailid, msgContent)

//   saveMessages(name, emailid, msgContent);
// }

// const getElementVal =  (id) =>{
//   return document.getElementById(id).value;
// }

// const saveMessages = (name, emailid, msgContent) =>{
//     var newContactForm = contactFormDB.push();

//     newContactForm.set({
//       name : name,
//       emailid:emailid,
//       msgContent:msgContent,
//     })
// };

