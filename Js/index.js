var names = [];
var movie= [];
var ticket=[];
var email= [];
var city = [];

// getting the  values from input fields
var nameInput = document.getElementById( "name");
var movieInput= document.getElementById("movie");
var ticketInput= document.getElementById("ticket");
var emailInput= document.getElementById("email");
var cityInput= document.getElementById ("city");

// getting the display box
var magbox = document.getElementById("Show");

function check(){
//pushing the input fields values into arrys
  names.push( nameInput.value);
  movie.push (movieInput.value);
  ticket.push(ticketInput.value);
  email.push(emailInput.value);
  city.push(cityInput.value);

     //Clearing the input field;
     nameInput.value="" ;
     movieInput.value="" ;
     ticketInput.value= "" ;
     emailInput.value= "" ;  
     cityInput.value = "" ;
        //also empty the massage boxs
        magbox.innerHTML="";
     
// finally display the data into massage box
    magbox.innerHTML += "<span> person Names: " + names + "</span>  <br> "
    magbox.innerHTML += "<span> Movie Names: " + movie + "</span  > <br> "
    magbox.innerHTML += "<span> ticket Names: " + ticket + "</span> <br> " 
    magbox.innerHTML += "<span> Email number:   " + email + "</span> <br> "  
    magbox.innerHTML += "<span>  City name   : "  + city + "</span> <br> " 
}