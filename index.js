const toggleBtn = document.querySelector(".checkbox");
const body = document.getElementsByTagName("body")[0];

toggleBtn.addEventListener("change", (e) => {
  const toggleCheck = e.target.checked;
  setTimeout(() => {
    changeDarkMode(toggleCheck);
  }, 300);
});

const changeDarkMode = (checked) => {
  if (checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
