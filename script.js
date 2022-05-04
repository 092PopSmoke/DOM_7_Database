const ansatt = document.querySelector("#finnAnsatt");
ansatt.addEventListener("click", finnAnsatt);
let list = ["Nael Hassan", "image.jpg", "IT-Mester"]



function finnAnsatt() {
    var temp = document.getElementById("personInput").value;
    console.log(temp);

    document.getElementById("ansattID").innerHTML = "Nael Hassan";
    document.getElementById("ansattP").innerHTML = "IT-Mester";
    document.getElementById("container_info").innerHTML = "image.jpg";

}
