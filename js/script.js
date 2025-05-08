const textContainer = document.createElement("div");
textContainer.textContent = "Klik pada gelas untuk memilih";
textContainer.classList.add("status");
document.body.appendChild(textContainer);

const store = {
  selectedButton: null,
  content: "",
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (store.selectedButton === null) {
      if (button.textContent !== "") {
        store.selectedButton = button;
        store.content = button.textContent;
        button.classList.add("selected");
        textContainer.textContent = `${button.textContent} dipilih. Klik gelas kosong untuk memindahkan.`;
      } else {
        textContainer.textContent =
          "Pilih gelas yang berisi cairan (Kopi atau Teh)";
      }
    } else {
      if (store.selectedButton === button) {
        button.classList.remove("selected");
        store.selectedButton = null;
        store.content = "";
        textContainer.textContent = "Pemilihan dibatalkan";
      } else {
        if (button.textContent === "") {
          button.textContent = store.content;
          store.selectedButton.textContent = "";

          store.selectedButton.classList.remove("selected");
          store.selectedButton = null;
          store.content = "";

          textContainer.textContent =
            "Cairan dipindahkan. Klik gelas lain untuk memilih.";
        } else {
          textContainer.textContent =
            "Tidak bisa menukar! Pindahkan hanya ke gelas kosong.";
        }
      }
    }
  });
});
