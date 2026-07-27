/*
    Select the large decorative name and its two separate lines.

    querySelector() searches the HTML for the first element
    matching the supplied CSS selector.
*/
const floatingName = document.querySelector(".floating-name");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");


/*
    Return all three elements to their original positions.

    This function is used when the pointer leaves
    the browser window.
*/
function resetNamePosition() {
    floatingName.style.transform = "translate(0, 0)";
    firstName.style.transform = "translateX(0)";
    lastName.style.transform = "translateX(0)";
}


/*
    Check that all three HTML elements were found.

    Without this check, the script could produce an error
    if one of the class names were missing or misspelled.
*/
if (floatingName && firstName && lastName) {

    /*
        Listen for pointer movement anywhere inside
        the browser window.

        pointermove works with a mouse, stylus,
        and other pointer devices.
    */
    window.addEventListener("pointermove", (event) => {

        /*
            event.clientX is the horizontal pointer position
            inside the browser viewport.

            window.innerWidth is the viewport's total width.

            Dividing them produces a value from approximately:

            Left edge   = 0
            Center      = 0.5
            Right edge  = 1

            Subtracting 0.5 changes the range to:

            Left edge   = -0.5
            Center      = 0
            Right edge  = 0.5
        */
        const normalizedX =
            event.clientX / window.innerWidth - 0.5;


        /*
            Perform the same normalization vertically.

            Top edge     = -0.5
            Center       = 0
            Bottom edge  = 0.5
        */
        const normalizedY =
            event.clientY / window.innerHeight - 0.5;


        /*
            Move the entire floating name in the same
            general direction as the pointer.

            Horizontal movement:
            normalizedX multiplied by 36 pixels

            Vertical movement:
            normalizedY multiplied by 24 pixels

            Increase these numbers for stronger movement.
            Decrease them for subtler movement.
        */
        floatingName.style.transform =
            `translate(
                ${normalizedX * 36}px,
                ${normalizedY * 24}px
            )`;


        /*
            Move "James" horizontally in the opposite
            direction from the pointer.

            The negative multiplier reverses its direction.
        */
        firstName.style.transform =
            `translateX(${normalizedX * -18}px)`;


        /*
            Move "Obergh" horizontally in the same
            direction as the pointer.

            Because the two lines move oppositely,
            they appear to separate slightly.
        */
        lastName.style.transform =
            `translateX(${normalizedX * 18}px)`;
    });


    /*
        Detect when the pointer leaves the browser window.

        mouseout can also fire while moving between page
        elements, so relatedTarget is checked.

        If relatedTarget is null, the pointer has actually
        left the browser's document area.
    */
    window.addEventListener("mouseout", (event) => {
        if (!event.relatedTarget) {
            resetNamePosition();
        }
    });
}
