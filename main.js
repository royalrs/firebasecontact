

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA72j1yJZlsmB6l6hPUu-vliBxbeTZxHfI",
    authDomain: "smartrider-20240.firebaseapp.com",
    databaseURL: "https://smartrider-20240.firebaseio.com",
    projectId: "smartrider-20240",
    storageBucket: "smartrider-20240.appspot.com",
    messagingSenderId: "134863464353"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages')

// Listen for form submit
document.getElementById('registrationform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var mobile_no = getInputVal('mobile_no');
  var password = getInputVal('password');

  // Save message
  saveMessage(source,destination);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('registrationform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, mobile_no, password){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    mobile_no: mobile_no,
    password:password,

  });
}
