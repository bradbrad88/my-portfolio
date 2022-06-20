const form = document.getElementById("contactForm");
const onSubmit = e => {
  e.preventDefault();
  const request = new XMLHttpRequest();
  request.open("POST", "https://brad-teague-server.herokuapp.com/new_message", true);
  const formdata = new FormData(e.target);
  request.send(formdata);
};
form.addEventListener("submit", onSubmit);
