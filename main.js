const myModal = document.getElementById("subscribe");
function showModal() {
  myModal.style.display = "block";
}
function hideModal() {
  myModal.style.display = "none";
}
// Toggle between hiding and showing blog replies/comments
function showReplies() {
  const btnShowReplies = document.querySelectorAll(".replies");
  for (var i = 0; i < btnShowReplies.length; i++) {
    btnShowReplies[i].onclick = function (e) {
      const blogReplie = this.parentElement.nextElementSibling;
      blogReplie.classList.toggle("active");
    };
  }
}
function liked(x) {
  x.classList.toggle("active");
}
