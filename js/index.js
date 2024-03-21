/*Build a simple HTML form that you think would be appropriate for a customer to order a
pizza. Dynamically add your student id and name somewhere on the page using a p tag and
JavaScript*/

// Catching the variables form HTML
var studentName = document.querySelector('#name');
var studentN = document.querySelector('#studentNumber');
var output = document.querySelector('#output');
var divForm = document.querySelector('#divForm');
var submitButton = document.getElementById('submit');
var description = document.querySelector('#descriptionOrder');
var total = document.querySelector('#total');


//Creating a class 
class PizzaForm{
branch;
firstName;
lastName;
address;
city;
province;
postCode;
pizzaSelected;
size;
extra;
// Constructor to create new objects
constructor(branch,firstName,lastName,address,city,province,postCode,pizzaSelected,size,extra){
    this.branch = branch;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.province = province;
    this.postCode = postCode;
    this.pizzaSelected = pizzaSelected;
    this.size = size;
    this.extra = extra;
}
// Function to return a string of the total order
pizzaOrder() {
    var SummaryOrder = `Hello! ${this.firstName} ${this.lastName}, we have received your order in the branch ${this.branch}, your ${this.pizzaSelected} pizza, it is under preparation in ${this.size} size, 
     you also added a ${this.extra} as beverage. The order will be delivery in this address: ${this.address}, ${this.city}, ${this.province}, ${this.postCode}, in about 30 minutes!`;
    return SummaryOrder;
    
}
// function to display alert message to the pay button
payMessage(){
    return "We do not have online pay method, just cash at the door!, sorry!";
}  
}
 
// Setting up my addEvent Listener
submitButton.addEventListener("click", function(event){
    
    var prize = 0; // variable which will store the value of the pizza depends on the type and size
    
    event.preventDefault();  

    // Collecting the values from the form

    var branch = document.querySelector('input[name="branch"]:checked');
            
    var firstName = document.querySelector('#fname').value;
    
    var lastName = document.querySelector('#lname').value;
   
    var address = document.querySelector('#address').value;
   
    var city = document.querySelector('#city').value;
 
    var province = document.querySelector('#province').value;
    
    var postCode = document.querySelector('#postcode').value;
    
    var pizzaSelected = document.querySelector('select').value;
    
    var size = document.querySelector('input[name="size"]:checked');

    var extra = document.getElementById('Beverage').value;

    // doing conditional if the value is empty, print the message for each element
        if (!branch){
            description.textContent = "Please choose a branch!";
            return;
         }else if(firstName === "") {
            description.textContent = "Please enter your first Name!";
            return;
        }else if(lastName === ""){    
              description.textContent = "Please enter your last Name!";
              return;
        }else if(address === ""){    
            description.textContent = "Please enter your address";
            return;
        }else if(city === ""){    
            description.textContent = "Please enter your city";
            return;
        }else if(province === ""){    
            description.textContent = "Please enter your province";
            return;
        }else if(postCode === ""){    
            description.textContent = "Please enter your postal code";
            return;
        }else if(pizzaSelected === ""){    
            description.textContent = "Please choose a pizza!"; 
            return;       
        }else if(!size){    
            description.textContent = "Select the size!"; 
            return;       
        }else if(extra === ""){    
            description.textContent = "Are you sure you do need any beverage?"; 
            return;    
        }else{  
        branch = branch.value; // finding the value of this radio input in the form
        size = size.value;   // finding the value of this radio input in the form 
        }
    // Creating a new objects passing all the variables already grabbed
    var Order1 = new PizzaForm(branch, firstName, lastName, address, city, province, postCode, pizzaSelected, size,extra);
   
    // creating a new variable to pass the object trough the function
    var orderDescription = Order1.pizzaOrder();

    // prizing some type of pizza with the sizes 
    if(pizzaSelected === 'Beef'){
        if(size === "Small"){
            prize += 10;
        }else if(size === "Medium"){
            prize += 13;
        }else{
            prize += 15;
        }
    } else if(pizzaSelected === 'Pork'){
        if(size === "Small"){
            prize += 9;
        }else if(size === "Medium"){
            prize += 11;
        }else{
            prize += 13;
        }
    } else if(pizzaSelected === 'Vegetarian'){
        if(size === "Small"){
            prize += 8;
        }else if(size === "Medium"){
            prize += 10;
        }else{
            prize += 12;
        }
    }

    if(extra === "zero coke" || extra === "zero sprite"){
        prize += 4;
    } else if(extra === "craft beer"){
        prize += 7;
    } else if(extra === "orange juice"){
        prize += 4;    
    }else{
        prize += 0;
    }
    
    // printing all the content on the page
    total.textContent = "Total Prize is: $" + prize;
    output.textContent = "Order detail";
    description.textContent = orderDescription;
// Student information
    studentName.textContent = "Rodrigo Lopez";
    studentN.textContent ="Student Number #200549271";

    // Adding a extra button to pay the order
    let btnToPay = document.createElement("button");
    btnToPay.setAttribute("id", "btnToPay");
    btnToPay.textContent = "Pay Now";
    divForm.appendChild(btnToPay);
    // adding new Listener to make the button works, using the function in the pizza class created.
    btnToPay.addEventListener("click", function() {
        alert(Order1.payMessage());
    });

});
