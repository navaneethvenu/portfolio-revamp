document.onreadystatechange = () => {

    var loader = document.getElementById('loader');
    if (document.readyState === 'complete') {
        loader.style.display = "none";
        addProjects();
    }
    else {
        loader.style.display = "flex";
    }
};