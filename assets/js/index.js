let burgerClick = () => {
  document.getElementById("navigation_hide").style.display="block";
};

let closeClick = () =>  {
  document.getElementById("navigation_hide").style.display="none";
};

let heartClick = () =>  {
  document.getElementsByClassName("details-heart-block")[0].style.display="block";
  document.getElementsByClassName("details-lamp-block")[0].style.display="none";
  document.getElementsByClassName("details-mouse-block")[0].style.display="none";
  document.getElementById("heart").style.backgroundColor="#19bd9a";
  document.getElementById("lamp").style.backgroundColor="#81868e";
  document.getElementById("mouse").style.backgroundColor="#81868e";
};

let lampClick = () =>  {
  document.getElementsByClassName("details-heart-block")[0].style.display="none";
  document.getElementsByClassName("details-lamp-block")[0].style.display="block";
  document.getElementsByClassName("details-mouse-block")[0].style.display="none";
  document.getElementById("lamp").style.backgroundColor="#19bd9a";
  document.getElementById("mouse").style.backgroundColor="#81868e";
  document.getElementById("heart").style.backgroundColor="#81868e";
};

let mouseClick = () =>  {
  document.getElementsByClassName("details-heart-block")[0].style.display="none";
  document.getElementsByClassName("details-lamp-block")[0].style.display="none";
  document.getElementsByClassName("details-mouse-block")[0].style.display="block";
  document.getElementById("mouse").style.backgroundColor="#19bd9a";
  document.getElementById("lamp").style.backgroundColor="#81868e";
  document.getElementById("heart").style.backgroundColor="#81868e";
};