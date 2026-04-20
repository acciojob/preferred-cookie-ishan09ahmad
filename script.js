let sizeEl = document.querySelector("#fontsize");
let colorEl = document.querySelector("#fontcolor");
let button = document.querySelector("input");

button.addEventListener("click", (e) => {
  e.preventDefault();

  document.cookie = `fontsize=${sizeEl.value}`;
  document.cookie = `fontcolor=${colorEl.value}`;
});
function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }

  return "";
}

function loadPreferences() {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) sizeEl.value = savedSize;
  if (savedColor) colorEl.value = savedColor;

}

loadPreferences();
