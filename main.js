function clickedSearchIcon() {
  document.getElementsByClassName("navBarLeftSection")[0].style.display =
    "none";
  document.getElementsByClassName("navBarRightSection")[0].style.display =
    "none";
  document.getElementsByClassName("navBarMiddleSection")[0].style.display =
    "flex";
  document.getElementById("backIconResponsive").style.display = "flex";
  document.getElementsByClassName("naviBar")[0].style.justifyContent = "center";
}

function clickedBackIcon() {
  document.getElementById("backIconResponsive").style.display = "none";
  document.getElementsByClassName("navBarLeftSection")[0].style.display =
    "flex";
  document.getElementsByClassName("navBarRightSection")[0].style.display =
    "flex";

  document.getElementsByClassName("naviBar")[0].style.justifyContent =
    "space-between";
  document.getElementsByClassName("navBarMiddleSection")[0].style.display =
    "none   ";
}
