window.onscroll = function () { scrollFunction(); featureslideFunction(); };

function scrollFunction() {
    mybutton = document.getElementById("logo");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "0.0";
        mybutton.style.transitionDuration = "0.5s";

    } else {
        mybutton.style.opacity = "1.0";
    }
}

function featureslideFunction() {
    n = 2;

    // for (var i = 0; i < n; ++i) {
    //     individualElement("panel" + (i + 1).toString())
    // }
    individualElement("projectsection");
    // individualElement2("panel1");

}

function individualElement(name) {
    var slidelement;
    var bounding, height, width;
    var cursorNormal, cursorInverted;

    cursorNormal = document.getElementsByClassName('cursor1')[0];
    cursorInverted = document.getElementsByClassName('cursor3')[0];

    slidelement = document.getElementById(name);
    height = slidelement.offsetHeight;
    width = slidelement.offsetWidth;
    bounding = slidelement.getBoundingClientRect();

    if (bounding.top >= -height && bounding.left >= -width && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + width && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + height) {
        // Document.body.classList.add("bag-black");
        document.body.style.backgroundColor = "#121212";
        cursorNormal.style.display = "none";
        cursorInverted.style.display = "block";
    }
    else {
        document.body.style.backgroundColor = "#5449E8";
        cursorNormal.style.display = "block";
        // cursorInverted.style.display = "none";
    }

}