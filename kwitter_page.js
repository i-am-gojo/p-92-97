const firebaseConfig = {
      apiKey: "AIzaSyA6LDN5g1ZxTsJw-ge5ZWblLyzPAOREO7M",
      authDomain: "kwitter-c9b69.firebaseapp.com",
      databaseURL: "https://kwitter-c9b69-default-rtdb.firebaseio.com",
      projectId: "kwitter-c9b69",
      storageBucket: "kwitter-c9b69.appspot.com",
      messagingSenderId: "44957071959",
      appId: "1:44957071959:web:47dcda9ef51121fec50112"
    };
    firebase.initializeApp(firebaseConfig);

    username= localStorage.getItem("username")
    room_name= localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name= message_data["name"]
message= message_data["message"]
like=message_data["like"]
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-danger' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+" </span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
      window.location="index.html"
}

function sendmsg(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })
}