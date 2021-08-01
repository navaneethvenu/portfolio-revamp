window.onscroll = function () { scrollFunction(); featureslideFunction(); aboutScroll(); heroScroll(); };

function scrollFunction() {
    mybutton = document.getElementById("logo");
    cursor1 = document.getElementsByClassName("cursorImg")[0];
    cursor2 = document.getElementsByClassName("cursorImg")[1];
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "0.0";
        mybutton.style.transitionDuration = "0.5s";

    } else {
        mybutton.style.opacity = "1.0";
    }
    if ((document.body.scrollTop > 500 && document.body.scrollTop < 1450) || (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1450)) {
        cursor1.style.width = "300px";
        cursor2.style.width = "300px";
        cursor1.scroll({
            top: 10,
            left: 10,
            behavior: 'smooth'
        });
        cursor1.style.transitionDuration = "1s";
        cursor2.style.transitionDuration = "1s";

    }

    // else if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //     cursor1.style.width = "100px";
    //     cursor2.style.width = "100px";
    // }

    else {
        cursor1.style.width = "100px";
        cursor2.style.width = "100px";
    }


}

function cursorFollow() {

    var cursorf2 = document.getElementsByClassName('cursor3')[0];
    var cursor = document.getElementsByClassName('cursor2')[0];
    var cursorf = document.getElementsByClassName('cursor1')[0];
    var cursorAnim = document.getElementsByClassName('cursorAnim')[0];

    window.addEventListener('mousemove', function (e) {
        cursorAnim.style.webkitAnimationPlayState = 'paused'
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
        cursorf.style.left = x + "px";
        cursorf.style.top = y + "px";
        cursorf2.style.left = x + "px";
        cursorf2.style.top = y + "px";
        cursorAnim.style.webkitAnimationPlayState = 'running'
    });


}

function featureslideFunction() {
    n = 2;

    // for (var i = 0; i < n; ++i) {
    //     individualElement("panel" + (i + 1).toString())
    // }
    // individualElement("projectsection");
    // individualElement2("panel1");

}

function individualElement(name) {
    var slidelement;
    var bounding, height, width;
    var cursorNormal, cursorInverted;

    cursorNormal = document.getElementsByClassName('cursor1')[0];
    cursorInverted = document.getElementsByClassName('cursor3')[0];

    aboutNormal = document.getElementsByClassName('imgAbout')[1];
    aboutInverted = document.getElementsByClassName('imgAbout')[0];

    slidelement = document.getElementById(name);
    height = slidelement.offsetHeight;
    width = slidelement.offsetWidth;
    bounding = slidelement.getBoundingClientRect();


    if (bounding.top >= -height && bounding.left >= -width && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + width && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + height) {
        // Document.body.classList.add("bag-black");
        document.body.style.backgroundColor = "#121212";
        cursorNormal.style.opacity = "0.0";
        cursorInverted.style.opacity = "1.0";



    }
    else {
        document.body.style.backgroundColor = "#5449E8";
        cursorNormal.style.opacity = "1.0";
        cursorInverted.style.display = "0.0";


    }

}

function aboutScroll() {

    cursorNormal = document.getElementsByClassName('cursor1')[0];
    cursorInverted = document.getElementsByClassName('cursor3')[0];

    aboutNormal = document.getElementsByClassName('imgAbout')[2];
    aboutInverted = document.getElementsByClassName('imgAbout')[1];
    slidelement = document.getElementsByClassName('about')[0];
    hero = document.getElementsByClassName('hero')[0];
    height = slidelement.offsetHeight;
    width = slidelement.offsetWidth;
    bounding = slidelement.getBoundingClientRect();



    if (bounding.top >= -height && bounding.left >= -width && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + width && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) / 2 + height / 2) {

        aboutNormal.style.opacity = "0.0";
        aboutInverted.style.opacity = "1.0";
        document.body.style.backgroundColor = "#171628";

        cursorNormal.style.opacity = "0.0";
        cursorInverted.style.opacity = "1.0";

        document.getElementsByClassName('wrapper')[0].style.opacity = "0.0"


    }
    else {
        aboutNormal.style.opacity = "1.0";
        aboutInverted.style.opacity = "0.25";
        document.body.style.backgroundColor = "#5449E8";

        cursorNormal.style.opacity = "1.0";
        cursorInverted.style.display = "0.0";

        document.getElementsByClassName('wrapper')[0].style.opacity = "1.0";
    }

}

function heroScroll() {
    hero = document.getElementsByClassName('hero')[0];
    slidelement = document.getElementsByClassName('heroimg')[0];
    slidelementNext = document.getElementsByClassName('about')[0];
    height = slidelement.offsetHeight;
    width = slidelement.offsetWidth;
    heightNext = slidelementNext.offsetHeight;
    widthNext = slidelementNext.offsetWidth;
    bounding = slidelement.getBoundingClientRect();
    boundingNext = slidelementNext.getBoundingClientRect();
    downbutton = document.getElementsByClassName('downicon')[0];

    hero.style.height = "100vh";

    if ((bounding.top >= -height && bounding.left >= -width && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + width && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + height) && ((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10))) {

        hero.style.height = "70vh";
        downbutton.style.height = "0px";
        downbutton.style.opacity = "0";
    }
    else if (!(bounding.top >= -height && bounding.left >= -width && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + width && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + height) && (boundingNext.top >= -heightNext && boundingNext.left >= -widthNext && boundingNext.right <= (window.innerWidth || document.documentElement.clientWidth) + widthNext && boundingNext.bottom <= (window.innerHeight || document.documentElement.clientHeight) + heightNext)) {
        hero.style.height = "70vh";
        downbutton.style.height = "0px";
        downbutton.style.opacity = "0";
    }
    else {
        hero.style.height = "100vh";
        downbutton.style.opacity = "1";
    }

}

function imgAbout() {
    var element = document.getElementsByClassName('aboutContent')[0];
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;
    var image = document.getElementsByClassName('imageOverlap')[0];
    imgRect = image.getBoundingClientRect();
    imgRect.top = offset;
}