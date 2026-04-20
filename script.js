let sizeEl = document.querySelector("#fontsize");
let colorEl = document.querySelector("#fontcolor");
let button = document.querySelector("input[type='submit']");

button.addEventListener("click", (e) => {
  e.preventDefault();

  document.cookie = `fontsize=${sizeEl.value}; path=/`;
  document.cookie = `fontcolor=${colorEl.value}; path=/`;
});

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return "";
}

function applyPreferences() {
  const size = getCookie("fontsize");
  const color = getCookie("fontcolor");

  if (size) document.body.style.fontSize = size + "px";
  if (color) document.body.style.color = color;
}

applyPreferences();