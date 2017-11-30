/* .toggle is pressed it opens slide */
function openSlideMenu(){
    document.getElementById('side-menu').style.width='250px';
      document.getElementById('main').style.marginLeft='250px';
}
/* when 'X' is pressed it closes the slid */
function closeSlideMenu(){
    document.getElementById('side-menu').style.width='0';
      document.getElementById('main').style.marginLeft='0';
}
