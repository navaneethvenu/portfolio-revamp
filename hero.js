const texts = ['Flutter Developer', 'Graphic Designer', 'UI/UX Designer'];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let f = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    (function type() {


        if (count == texts.length) {
            count = 0;
        }
        currentText = texts[count];
        if (f == 0)
            letter = currentText.slice(0, index++);
        else
            letter = currentText.slice(0, index--);

        document.getElementById("shortdescription").textContent = letter;

        if (letter.length == currentText.length) {

            f = 1;
        }

        if (f == 1 && letter.length == 3) {
            f = 2
        }
        if (f == 2 && letter.length == 0) {
            count++;
            index = 0;
            f = 0;
        }
        if (f == 0)
            setTimeout(type, 150);
        else if (f == 0)
            setTimeout(type, 100);
        else
            setTimeout(type, 50);

    })();
});

