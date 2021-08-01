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
            "descShort": "A Brand Identity Project as part of the Twine Logo Design Challenge"
        },
        {
            "name": "Venemous Gaming",
            "imageURL": "Images/Projects/work5.PNG",
            "projectURL": "https://www.behance.net/gallery/114429409/Venemous-Gaming-Twine-Logo-Design-Challenge-4-2021",
            "descShort": "A Brand Identity Project as part of the Twine Logo Design Challenge"
        },
        {
            "name": "Beyond Gravity",
            "imageURL": "Images/Projects/work6.PNG",
            "projectURL": "https://www.behance.net/gallery/114877423/Beyond-Gravity-Twine-Logo-Design-Challenge-4-2021",
            "descShort": "A Brand Identity Project as part of the Twine Logo Design Challenge"
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
        // if ((i % 3) + 1 == 2 || (i % 3) + 1 == 3) {
        //     console.log((i % 3 + 1));
        //     tile.classList.add(`projecttile${(i % 3) + 1}`);
        // }


        if ((i + 1) % 3 == 1 || (i + 1) % 3 == 0)
            tile.classList.add("projecttile2")

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
    element.appendChild(spacer);
    // projectHover();

}

// function projectHover() {

//     var data = projectData;
//     for (i in data["projects"]) {
//         console.log(i);
//         if (i % 3 == 0) {
//             element = document.getElementsByClassName('projecttile')[i];
//             element.onmouseover = function () {
//                 element.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "end" });
//             }
//         }
//     }
// }

function FlexWrap() {

    window.addEventListener('load', function (event) {
        var targetClassName = 'flex-wrap-anim';
        var defaultDuration = '0.3s';

        var dummyList = [];
        function addDummy(item, duration) {
            var top = item.offsetTop;
            var left = item.offsetLeft;
            setTimeout(function () {
                item.style.position = 'absolute';
                item.style.top = top + 'px';
                item.style.left = left + 'px';

                var dummyDiv = document.createElement('div');
                dummyDiv.classList.add(targetClassName + '-dummy');
                var rect = item.getBoundingClientRect();
                dummyDiv.style.width = rect.width + 'px';
                dummyDiv.style.height = rect.height + 'px';
                dummyDiv.style.visibility = 'hidden';
                dummyDiv['__' + targetClassName + '_pair'] = item;
                dummyDiv['__' + targetClassName + '_duration'] = duration;
                item.parentNode.appendChild(dummyDiv);
                dummyList.push(dummyDiv);
            }, 0);
        }

        var conts = document.getElementsByClassName(targetClassName);
        for (var i = 0, max = conts.length; i < max; i++) {
            var cont = conts[i];
            cont.style.position = 'relative';
            var duration = cont.getAttribute('data-duration')
                || defaultDuration;
            var items = cont.getElementsByTagName('div');
            for (var i = 0, max = items.length; i < max; i++) {
                addDummy(items[i], duration);
            }
        }

        window.addEventListener('resize', function (event) {
            dummyList.forEach(function (dummyDiv) {
                var item = dummyDiv['__' + targetClassName + '_pair'];
                var duration = dummyDiv['__' + targetClassName + '_duration'];
                if (item.offsetTop != dummyDiv.offsetTop) {
                    item.style.transition = 'all ' + duration;
                    item.style.top = dummyDiv.offsetTop + 'px';
                    item.style.left = dummyDiv.offsetLeft + 'px';
                } else {
                    item.style.transition = '';
                    item.style.left = dummyDiv.offsetLeft + 'px';
                }
            });
        });
    });

}
