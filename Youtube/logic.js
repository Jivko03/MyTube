let searchBar = document.getElementById("search-bar");
let searchButton = document.getElementById("seach-btn");
let elem = document.getElementById("link-btn");
let inputvalue;


let lol = function() 
{
            inputvalue = searchBar.value;
            inputvalue.replace(/ /g, '+');
            window.open("https://www.youtube.com/results?search_query="+inputvalue).focus();
}
let aNewLink = function()
{
    let linkName = prompt("Enter the name of the link:");
    let linkURL = prompt("Enter the URL of the link:");
    let newButton = document.createElement("button");
    newButton.onclick = function() {window.open(linkURL).focus();};
    newButton.className = "newlink-btn";
    newButton.innerHTML = linkName;
    document.getElementsByClassName("quick-links")[0].appendChild(newButton);
}


elem.onclick = aNewLink;
searchBar.addEventListener('keydown',(event) =>{if (event.key === 'Enter') lol();})
searchButton.onclick = lol;

