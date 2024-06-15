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
    user_name= localStorage.getItem("username")
    document.getElementById("user_name").innerHTML="Welcome, "+user_name+"!";
    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name bruh"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("Room Name -"+ room_names);
      row="<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)' >#"+room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
