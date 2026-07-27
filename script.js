const floatingName = document.querySelector(".floating-name");
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (event) => {
    const bounds = hero.getBoundingClientRect();

    const mouseX = event.clientX - bounds.left;
    const mouseY = event.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const moveX = (mouseX - centerX) * 0.025;
    const moveY = (mouseY - centerY) * 0.025;

    floatingName.style.transform =
        `translate(${moveX}px, ${moveY}px)`;
});

hero.addEventListener("mouseleave", () => {
    floatingName.style.transform = "translate(0, 0)";
});
