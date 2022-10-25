function openImage(image) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("img-modal");
    var captionText = document.getElementById("caption-modal");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;

    var span = document.getElementsByClassName("modal")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }
}
