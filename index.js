const firebaseConfig = {
    apiKey: "AIzaSyCQAgQ80_36EV6cCXZqjf9lmixX98UYmSs",
    authDomain: "recenttech-bd15b.firebaseapp.com",
    databaseURL: "https://recenttech-bd15b-default-rtdb.firebaseio.com",
    projectId: "recenttech-bd15b",
    storageBucket: "recenttech-bd15b.appspot.com",
    messagingSenderId: "789399722236",
    appId: "1:789399722236:web:8ee1d058036a1bc9479f79",
    measurementId: "G-8QBK5L8S6Q"
  };
  

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  var messagesRef=firebase.database().ref('messages');

  document.getElementById('Recent-contact').addEventListener('submit',submitForm);


    function submitForm(e) {
        
    
    e.preventDefault();

    //get values
    var name=getInputVal('name');
    var phone=getInputVal('phone');
    var email=getInputVal('email');
    var subject=getInputVal('subject');
    var message=getInputVal('message');
    

    //save message
    saveMessage(name,phone,email,subject,message);

    //clear form
    document.getElementById('Recent-contact').reset();
     
  }

  //function to get form values
  function getInputVal(id){
    return document.getElementById(id).value;

  }

  //save message to firebase
  function saveMessage(name,phone,email,subject,message){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        Name: name,
        Phone: phone,
        Email: email,
        Subject: subject,
        Message: message      
    });
  }

