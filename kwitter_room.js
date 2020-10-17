//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBu_RolmAQBuGcfsBZpXmqhTmpAjV5Ebi8",
    authDomain: "kwitter-dd480.firebaseapp.com",
    databaseURL: "https://kwitter-dd480.firebaseio.com",
    projectId: "kwitter-dd480",
    storageBucket: "kwitter-dd480.appspot.com",
    messagingSenderId: "625017377899",
    appId: "1:625017377899:web:37ccb43909426d6b020d2e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !"; 
function addroom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"aadingroomname"
});
}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
  console.log("room name: "+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectroomname(this.id)' >#"+ Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  //End code
   });});}
getData();
function redirectroomname(name)
{
  console.log("name");
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}




function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}