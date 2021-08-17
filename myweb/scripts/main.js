var myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg'){
        myImage.setAttribute('src','images/moon.jpg');
    }else{
        myImage.setAttribute('src','images/firefox.jpg');
    }
}

var mybutton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUsername(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUsername();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
    
}

if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

mybutton.onclick = function(){
    setUsername();
}