let clickButton = document.querySelectorAll(".btn");
let clickButtonArr = Array.from(clickButton);

clickButtonArr.map((item) => {
    item.onclick = (el) => {
        filterSelection(el.currentTarget.dataset.obj);
        let current = document.querySelectorAll(".active")[0];
        current.className = current.className.replace(" active", "");
        el.currentTarget.className += " active";
    };
});

filterSelection("all");
function filterSelection(c) {
    let column = document.querySelectorAll(".columnP");
    let columnArr = Array.from(column);
    if (c == "all") c = "";
    columnArr.map((el) => {
        w3RemoveClass(el, "show");
        if (el.className.indexOf(c) > -1) w3AddClass(el, "show");
    });
}

function w3AddClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    arr2.map((el) => {
        if (arr1.indexOf(el) == -1) {
            element.className += " " + el;
        }
    });
}

function w3RemoveClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    arr2.map((el) => {
        while (arr1.indexOf(el) > -1) {
            arr1.splice(arr1.indexOf(el), 1);
        }
    });
    element.className = arr1.join(" ");
}
