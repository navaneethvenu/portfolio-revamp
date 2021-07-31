projectData = {
    "projects": [
        {
            "name": "Music Landing Page",
            "imageURL": "Images/Projects/work1.PNG",
            "projectURL": "https://alternaet.ga/guess",
            "descShort": "This is a sample music page created to display the links to all streaming platforms for a particular song"
        },
        {
            "name": "Colour Randomiser",
            "imageURL": "Images/Projects/work2.PNG",
            "projectURL": "https://navaneethvenu.github.io/colour-randomizer/",
            "descShort": "A Beginner Level Project made with Pure HTML/CSS/JS to generate Random Colours and their Colour Codes"
        },
        {
            "name": "Tic Tac Toe",
            "imageURL": "Images/Projects/work3.PNG",
            "projectURL": "https://navaneethvenu.github.io/tictactoe/",
            "descShort": "A Beginner Level UI Centric Recreation of the Famous Tic Tac Toe game made with Pure HTML/CSS/JS "
        },
        {
            "name": "Thea Rosa",
            "imageURL": "Images/Projects/work4.PNG",
            "projectURL": "https://www.behance.net/gallery/114374589/Thea-Rosa-Twine-Logo-Design-Challenge-1-2021",
            "descShort": "A Brand Identity Project"
        },
        {
            "name": "Venemous Gaming",
            "imageURL": "Images/Projects/work5.PNG",
            "projectURL": "https://www.behance.net/gallery/114429409/Venemous-Gaming-Twine-Logo-Design-Challenge-4-2021",
            "descShort": "A Brand Identity Project"
        },
        {
            "name": "Music Landing Page",
            "imageURL": "Images/Projects/work1.PNG",
            "projectURL": "https://alternaet.ga/guess",
            "descShort": "This is a sample music page created to display the links to all streaming platforms for a particular song"
        },
        {
            "name": "Colour Randomiser",
            "imageURL": "Images/Projects/work2.PNG",
            "projectURL": "https://navaneethvenu.github.io/colour-randomizer/",
            "descShort": "A Beginner Level Project made with Pure HTML/CSS/JS to generate Random Colours and their Colour Codes"
        },
        {
            "name": "Tic Tac Toe",
            "imageURL": "Images/Projects/work3.PNG",
            "projectURL": "https://navaneethvenu.github.io/tictactoe/",
            "descShort": "A Beginner Level UI Centric Recreation of the Famous Tic Tac Toe game made with Pure HTML/CSS/JS "
        },
        {
            "name": "Thea Rosa",
            "imageURL": "Images/Projects/work4.PNG",
            "projectURL": "https://www.behance.net/gallery/114374589/Thea-Rosa-Twine-Logo-Design-Challenge-1-2021",
            "descShort": "A Brand Identity Project"
        },
        {
            "name": "Venemous Gaming",
            "imageURL": "Images/Projects/work5.PNG",
            "projectURL": "https://www.behance.net/gallery/114429409/Venemous-Gaming-Twine-Logo-Design-Challenge-4-2021",
            "descShort": "A Brand Identity Project"
        }
    ]
};
// addProjects();

function addProjects() {

    data = projectData;
    const element = document.getElementById("projectsection");
    var tile;
    var content;
    var title;
    var desc;
    var button;
    var spacer;
    var f;

    for (i in data["projects"]) {

        tile = document.createElement("div");
        content = document.createElement("div");
        title = document.createElement("h1");
        desc = document.createElement("p");
        button = document.createElement("a");

        title.innerText = data["projects"][i]["name"];
        desc.innerText = data["projects"][i]["descShort"];
        button.innerText = "View Project";
        button.href = data["projects"][i]["projectURL"];
        button.target = "_blank";
        tile.classList.add('projecttile');
        if ((i % 3) + 1 == 2 || (i % 3) + 1 == 3) {
            console.log((i % 3 + 1));
            tile.classList.add(`projecttile${(i % 3) + 1}`);
        }
        content.classList.add('projectcontent');
        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(button);


        tile.appendChild(content);
        tile.style.backgroundImage = `url('${data["projects"][i]["imageURL"]}')`;
        element.appendChild(tile);
        // console.log(`url('${data["projects"][i]["imageURL"]}')`);
    }
    spacer = document.createElement("div");
    spacer.classList.add("spacer");
    element.appendChild(spacer)

}
