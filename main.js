const myModal = document.getElementById("subscribe");
function showModal() {
  myModal.style.display = "block";
}
function hideModal() {
  myModal.style.display = "none";
}
// Toggle between hiding and showing blog replies/comments
function showReplies(x) {
  const blogReplies = document.querySelectorAll(".blog__replies");
  [...blogReplies].map((blogReplieItem, index) => {
    blogReplieItem.classList.toggle("active");
  });
}
function liked(x) {
  x.classList.toggle("active");
}
