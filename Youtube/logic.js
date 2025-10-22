var seach = document.getElementById("search-bar");
var button = document.getElementById("seach-btn");

var inputvalue;
var searchLogic = function() 
{
    inputvalue = seach.value;
    console.log(inputvalue);
    inputvalue.replace(/ /g, '+');
    window.open("https://www.youtube.com/results?search_query="+inputvalue).focus();

}

seach.addEventListener('keydown',(event) =>
    {if (event.key === 'Enter'){searchLogic()}})

button.onclick = searchLogic();
