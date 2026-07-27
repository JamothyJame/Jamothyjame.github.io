const hero = document.querySelector(".hero");
const floatingName = document.querySelector(".floating-name");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");

if (hero && floatingName && firstName && lastName) {
    hero.addEventListener("mousemove", (event) => {
        const bounds = hero.getBoundingClientRect();

        const normalizedX =
            (event.clientX - bounds.left) / bounds.width - 0.5;

        const normalizedY =
            (event.clientY - bounds.top) / bounds.height - 0.5;

        floatingName.style.transform =
            `translate(${normalizedX * 22}px, ${normalizedY * 16}px)`;

        firstName.style.transform =
            `translateX(${normalizedX * -12}px)`;

        lastName.style.transform =
            `translateX(${normalizedX * 12}px)`;
    });

    hero.addEventListener("mouseleave", () => {
        floatingName.style.transform = "translate(0, 0)";
        firstName.style.transform = "translateX(0)";
        lastName.style.transform = "translateX(0)";
    });
}
