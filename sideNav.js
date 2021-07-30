function addStrike(classNumber) {
    var oldElement = document.getElementsByClassName('activeLink')[0];
    var newElement = document.getElementsByClassName('navItem')[classNumber];
    oldElement.classList.remove('activeLink');
    newElement.classList.add('activeLink');

}