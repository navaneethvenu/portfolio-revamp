document.onreadystatechange = () => {

    var loader = document.getElementById('loader');
    if (document.readyState === 'complete') {
        loader.style.display = "none";
        addProjects();
        // FlexWrap();
    }
    else {
        loader.style.display = "flex";
    }
};