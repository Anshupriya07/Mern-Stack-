const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let valid=1;
    let error_text ='';
    
    const name = document.querySelector("#name").value; 
    if(name == '' && valid == 1){
        error_text = 'Please enter your name';
        valid = 0;
    }
    
    const email = document.querySelector("#email").value;
    if(email == '' && valid == 1){
        error_text = 'Please enter your email';
        valid = 0;
    }

    const phone = document.querySelector("#phone").value;
    if(phone == ''  && valid == 1){
        error_text = 'Please enter your phone';
        valid = 0;
    }
    else if(phone.length<10){
        error_text = 'Please enter correct phone number';
        valid = 0;
    }
    
    const genderval = document.getElementsByName("Gender");
    let gender = '';
    for(let i=0;i<genderval.length;i++){
        if(genderval[i].checked){
            gender = genderval[i].value;
        }
    }
    if(gender == '' && valid == 1){
        error_text = 'Please enter your gender';
        valid = 0;
    }


    const address = document.querySelector("#address").value;

    const pincode = document.querySelector("#pincode").value;
    if(pincode == '' && valid == 1){
        error_text = 'Please enter your pincode';
        valid = 0;
    }
    else if(pincode.length<6 && valid == 1){
        error_text = 'Please enter correct pincode';
        valid = 0;
    }
    

    const password = document.querySelector("#password").value;
    if(password == '' && valid == 1){
        error_text = 'Please enter your password';
        valid = 0;
    }

    const cnfpassword = document.querySelector("#cnfpassword").value;
    if(cnfpassword == '' && valid == 1){
        error_text = 'Please enter your password';
        valid = 0;
    }
    if(password != cnfpassword && valid == 1){
        error_text = 'Please enter your password and confirm password same';
        valid = 0;
    }
    

    if(password != cnfpassword && valid == 1){
        error_text = 'Please enter your password and confirm password same';
        valid = 0;
    }
    const check = document.querySelector('#chkbx').checked ? document.querySelector('#chkbx').value : ' ';
    
    if(check == ' ' && valid == 1){
        error_text = 'Please tick the checkbox';
        valid = 0;
    }

    if(valid == 0 && error_text!=''){
        document.querySelector(".error_message").style.display='block';
        document.querySelector('.error_message').innerText= error_text;
        document.querySelector('.error_message').style.color='red';
    }  
    
    if(valid == 1){
        error_text = '';
        document.querySelector('.error_message').innerText = error_text
        document.querySelector("#showname").innerText = name;
        document.querySelector("#showemail").innerText = email;
        document.querySelector("#showphone").innerText = phone;
        document.querySelector("#showpincode").innerText = pincode;
        document.querySelector("#showgender").innerText = gender;
    }
    

})