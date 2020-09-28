const images = () => {
  const popup = document.createElement("div"),
    workSection = document.querySelector(".works"),
    bigImage = document.createElement("img");

  popup.classList.add("popup");
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";
  popup.style.display = "none";
  popup.appendChild(bigImage);
  workSection.appendChild(popup);
  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains("preview")) {
      popup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
    }

    if (target && target.matches("div.popup")) {
      popup.style.display = "none";
    }
  });
};

export default images;
