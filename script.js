let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .nav');

menu.onClick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


//  lets get all required elements of form

const form=document.querySelector("form");
// statustext=form.querySelector(".button-area")

form.onsubmit=(e)=>{
    
    let xhr=new XMLHttpRequest();
    xhr.open("POST","index.php",true);
    // xhr.onload=()=>{
        // if(xhr.readyState==4 && xhr.status==200){
        let response = xhr.response;
        console.log(response)
        // }
    // }
    let formData = new FormData(form);
    xhr.send(formData);
}

