
let container = document.querySelector('.container-bottom');
let btn = document.querySelector('.add-button'); 
let input = document.querySelector('input');

// VEZI CUM PUI - la toate 
// baga functionalitate delete 
// css

//case 1
btn.addEventListener('click', function(){
    if( input.value !== "") {
    let par = document.createElement('p');
    par.innerText = input.value; 
    
    par.setAttribute('class','list-item');
    
    container.append(par);
    input.value = '' ; 
     // case2 - ask later
    // let deleteBtn = document.querySelector('.delete-btn');
    // deleteBtn.innerText = "-";
   // la par.innerHTML adaugi + '<button class="delete-btn">';
   //css + mai mare
   //css
   // js cand apas + sa stearga inputu

    par.addEventListener('click',function(){
        par.style.textDecoration = 'line-through';
        par.style.textDecorationThickness ='2px';
    })
    par.addEventListener('dblclick',function(){
        container.removeChild(par);
    })
   
}})


 
 

// function addTask() {
//     const newDiv = document.createElement('h2');
//     container.append(newDiv);
// }
// addTask();
// addTask();
// addTask();



// btn.addEventListener('click' , () =>{
//     container.append(newDiv);
// } );


// btn.addEventListener('click',addTask());

// btn.addEventListener('click', function(){
//     const newDiv = document.createElement('h2');
//     container.append(newDiv);
    
// });