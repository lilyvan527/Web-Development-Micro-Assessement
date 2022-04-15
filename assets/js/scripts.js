function myFilter() { //create function to onkeyup
  var input, filter, ul, li, a, i, txtValue; //assign value to each element
  input = document.getElementById("myInput"); 
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {       
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
var names = ['Air Jordan','Nike','Adidas']; //assign value to names
var ul = document.createElement('ul'); //assign value to ul
document.querySelector('.javahere').appendChild(ul); //attach ul to .javahere
names.forEach((name) => { // assign value for each of element in names 
	let li = document.createElement('li'); //assign value to li
	li.innerHTML = name; //add value of each name to li 
	ul.appendChild(li); //attach li to ul
})
function submit(){ //create function to onclick
    name=document.querySelector('#inputbrand').value; //get value from #inputbrand 
    ul=document.querySelector('ul'); // assign value to ul  
    const li=document.createElement('li'); //assign value to li 
    li.innerHTML=name; //add value of name to li  
    ul.appendChild(li); //attach li to ul 
    document.querySelector('#inputbrand').value='';//get value from #inputbrand 
} 
    console.log('it works'); //test in console

    var modal = document.getElementById('id01'); // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}