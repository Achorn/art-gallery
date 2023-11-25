let images = [
  {
    src: "./assets/imgs/pretending.PNG",
    title: "Pretending",
    date: "2023",
    medium: "Digital: Procreate-Pocket",
  },
  {
    src: "./assets/imgs/shoe.png",
    title: "Love Letter to SF",
    date: "2023",
    medium: "Digital: Procreate",
  },
  {
    src: "./assets/imgs/cup.jpg",
    title: "Favorite Mug",
    date: "2022",
    medium: "Digital: Procreate",
  },
  {
    src: "./assets/imgs/jiji.jpg",
    title: "Jiji in Box",
    date: "2023",
    medium: "Digital: Procreate",
  },
];
let selectedImgIndex = 0;

let backBtn = document.getElementById("rightBtn");
let forwardBtn = document.getElementById("leftBtn");
let imgElement = document.getElementById("artImg");
let imgTitleElement = document.getElementById("artTitle");
let imgDateELement = document.getElementById("artDate");
let imgMediumElement = document.getElementById("artMedium");
backBtn.addEventListener("click", () => updateToPreviousImg());
forwardBtn.addEventListener("click", () => updateToNextImg());

function updateToPreviousImg() {
  let newIndex;
  if (selectedImgIndex === 0) newIndex = images.length - 1;
  else newIndex = selectedImgIndex - 1;
  updateImg(newIndex);
}
function updateToNextImg() {
  let newIndex;
  if (selectedImgIndex === images.length - 1) newIndex = 0;
  else newIndex = selectedImgIndex + 1;
  updateImg(newIndex);
}
function updateImg(index) {
  selectedImgIndex = index;
  let img = images[index];
  imgElement.src = img.src;
  imgTitleElement.innerHTML = img.title;
  imgDateELement.innerHTML = img.date;
  imgMediumElement.innerHTML = img.medium;
}
// INTERACTIVE IMAGE
let artContainer = document.getElementById("imgHolder");
let artImg = document.getElementById("artImg");
let maxRotation = 4;

artContainer.addEventListener("mouseenter", (e) => {
  artImg.style.transition = "none";
});

artContainer.addEventListener("mousemove", (e) => {
  rotateImgWithCursor(e);
});

artContainer.addEventListener("mouseleave", () => {
  artImg.style.transition = "all .9s ease-out";
  rotateImg(1.4201787994891444, 1.5223499361430395);
});

let rotateImgWithCursor = (e) => {
  const box = artContainer.getBoundingClientRect();
  const height = artContainer.offsetHeight / 2;

  const xCenter = Math.floor((box.left + box.right) / 2);
  const yCenter = Math.floor((box.top + box.bottom) / 2);

  let mouseX = e.pageX;
  let mouseY = e.pageY;

  let xRot = ((mouseX - xCenter) / height) * maxRotation;
  let yRot = ((mouseY - yCenter) / height) * -1 * maxRotation;
  rotateImg(xRot, yRot);
};

let rotateImg = (xrotate, yRotate) => {
  artImg.style.transform = `rotateY(${xrotate}deg) rotateX(${yRotate}deg) translateX(${
    xrotate * -2
  }px) translateY(${yRotate * 2}px)`;
};
