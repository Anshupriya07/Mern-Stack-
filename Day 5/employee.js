function employee(name,email,phone,basicsal){
    Totalsal=0;
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Phone: ' + phone);

    this.Totalsal = function () {
        if(basicsal>40000 && basicsal<50000){
            Ts = basicsal+(0.15*basicsal)+(0.2*basicsal)-(0.1*basicsal);
            console.log('Totalsal: ' + Ts);
        }
        else if(basicsal>50000 && basicsal<70000){
            Ts = basicsal+(0.15*basicsal)+(0.2*basicsal)-(0.15*basicsal);
            console.log('Totalsal: ' + Ts);
        }
        else if(basicsal>70000 && basicsal<90000){
            Ts = basicsal+(0.15*basicsal)+(0.2*basicsal)-(0.2*basicsal);
            console.log('Totalsal: ' + Ts);
        }
        else if(basicsal>90000){
            Ts = basicsal+(0.15*basicsal)+(0.2*basicsal)-(0.3*basicsal);
            console.log('Totalsal: ' + Ts);
        }
    }
    
}
let name = prompt('Enter your name');
let email = prompt('Enter your email');
let phone = prompt('Enter your phone');
let basicSalary = Number(prompt('Enter your salary'));
const employee1= new employee(name, email, phone, basicSalary);
employee1.Totalsal();