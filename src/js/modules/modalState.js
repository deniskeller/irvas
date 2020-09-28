import checkNumInputs from "./checkNumInputs";

const modalState = (state) => {
  const popupForm = document.querySelectorAll(".balcon_icons_img"),
    popupWidth = document.querySelectorAll("#width"),
    popupHeight = document.querySelectorAll("#height"),
    popupType = document.querySelectorAll("#view_type"),
    popupProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = index;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              index === 0
                ? (state[prop] = "Холодное")
                : (state[prop] = "Теплое");
              elem.forEach((box, j) => {
                box.checked = false;
                if (index == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            console.log("state: ", state);
        }
      });
    });
  }

  bindActionToElems("click", popupForm, "form");
  bindActionToElems("input", popupWidth, "width");
  bindActionToElems("input", popupHeight, "height");
  bindActionToElems("change", popupType, "type");
  bindActionToElems("change", popupProfile, "profile");
};

export default modalState;
