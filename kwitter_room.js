function un(){
liuser = localStorage.getItem("user_name");
document.getElementById("username1").innerHTML = "Welcome "+liuser+" !";
}
function addroom(){
get_room = document.getElementById("room_name").value;
localStorage.setItem("room_name", get_room);
firebase.database().ref("/").child(get_room).update({
    purpose: "adding room name"
});
window.location = "kwitter_room.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room name - " + Room_names);
 row = "<div class='room name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'># " + Room_names + "</div><hr>"
 document.getElementById("output").innerHTML = row;
 //End code
 });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}
