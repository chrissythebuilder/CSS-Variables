$(document).ready(function() {
    const inputs = document.querySelectorAll(".controls input");

    function handleUpdate() {
        // dataset calls all the data attributes in each input and will put them all in an object
        console.log(this.dataset.sizing || '');

        const suffix = this.dataset.sizing || '';

        // update the actual variable
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    }

    // listen on an onchange event for each input
    inputs.forEach(input => input.addEventListener("change", handleUpdate));
    inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
})