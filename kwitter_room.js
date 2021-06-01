
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBJCMwSNBbxMB1f_tDVa5jPghjdsWNtdag",
      authDomain: "kwitter-5a2a3.firebaseapp.com",
      databaseURL: "https://kwitter-5a2a3-default-rtdb.firebaseio.com",
      projectId: "kwitter-5a2a3",
      storageBucket: "kwitter-5a2a3.appspot.com",
      messagingSenderId: "235122578005",
      appId: "1:235122578005:web:800dad02585bc4a221fadc",
      measurementId: "G-RQJPEL0TDE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomnames"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function logout(){
      window.location="index.html";
}
function redirecttoroomname(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_room.html";
}