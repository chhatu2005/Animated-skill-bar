var skillSection = document.getElementById("skillSection")
var progressBars = document.getElementsByClassName("progress")


const showProgress = ()=>
{
    for(var i=0; i<progressBars.length;i++)
    {
        var width = progressBars[i].getAttribute("data-width")
        progressBars[i].style.width = width
    }
}


window.onload = showProgress