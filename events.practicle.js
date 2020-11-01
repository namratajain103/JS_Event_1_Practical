function fun() {
    var heading = document.getElementsByTagName('h1')[0];

    heading.innerHTML = "I have Learned JS Events"
}

function updateBox() {
    var boxes = document.getElementsByClassName("box");
    console.log(boxes);
    var data = document.getElementById("user_input").value;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = data;
    }

}