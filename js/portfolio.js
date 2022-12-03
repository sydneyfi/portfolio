// Resume Button
var modal = document.querySelector("#resumeModal");
var button = document.querySelector("#resumeButton");
var close = document.querySelector(".close");
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}