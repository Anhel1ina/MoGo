let acc = document.getElementsByClassName("acc-group__button");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            arrow.style.transfrom = 'rotate(' + am_deg + 'deg)';
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
