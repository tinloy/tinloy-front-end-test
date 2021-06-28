window.onload = function () {
    addContents();
}

const contentCardId = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10"]

function addContents() {

    contentCardId.forEach(id => {
        var tag = document.createElement('p');
        var text1 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
        var text2 = document.createTextNode('Id diam maecenas ultricies mi eget mauris pharetra. Cursus mattis molestie a iaculis at. At urna condimentum mattis pellentesque id nibh tortor. Porttitor eget dolor morbi non arcu risus. Sem et tortor consequat id. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Massa sapien faucibus et molestie ac feugiat sed lectus. Velit sed ullamcorper morbi tincidunt ornare massa eget. Quam pellentesque nec nam aliquam sem et tortor. Adipiscing enim eu turpis egestas pretium. Gravida dictum fusce ut placerat orci nulla. Pellentesque id nibh tortor id aliquet lectus. Duis ultricies lacus sed turpis tincidunt id. Ornare arcu odio ut sem nulla pharetra diam. Interdum varius sit amet mattis vulputate enim.');
        tag.appendChild(text1);
        var element = document.getElementById(id);
        element.appendChild(tag)
    })
}