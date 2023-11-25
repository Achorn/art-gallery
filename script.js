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
  rotateImg(1.4201787994891444, -1.5223499361430395);
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
  console.log(xrotate, yRotate);
  artImg.style.transform = `rotateY(${xrotate}deg) rotateX(${yRotate}deg) translateX(${
    xrotate * -2
  }px) translateY(${yRotate * 2}px)`;
  console.log(artImg.style.transform);
};
