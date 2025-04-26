
function openOverlay(e) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayImage").src = e.target.src;
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

const imgs = document.querySelectorAll("img");

imgs.forEach(img => {
    img.addEventListener("click", openOverlay);
});