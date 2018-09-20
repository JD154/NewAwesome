document.getElementById("toggle-sidebar").addEventListener('click', openSideBar);


function openSideBar(){

    document.getElementById("sidebar").style.transform = "translateX(0px)";
    document.getElementById("sidebar-overlay").style.opacity = "1";
    document.getElementById("sidebar-overlay").style.pointerEvents = "auto";

    document.getElementById("sidebar-overlay").addEventListener("click", closeSideBar);
}

function closeSideBar(){

    document.getElementById("sidebar").style.transform = "translateX(-100%)";
    document.getElementById("sidebar-overlay").style.opacity = "0";
    document.getElementById("sidebar-overlay").style.pointerEvents = "none";

}