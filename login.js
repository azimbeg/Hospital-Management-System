function isLogin(){
    var check = document.getElementById('loginCheck').value;
    switch(check){
        case 'Doctor': 
        window.open('Doctor.html');
        break;

        case 'Receptionist': 
        window.open('Receptionist.html');
        break;

        case 'Chemist': 
        window.open('Chemist.html');
        break;
        
        case 'Account': 
        window.open('Account.html');
        break;

        default : alert("Select on of Login");break;

    }
}

function delete_Data(){
    var con = confirm("do you want to delet this ?");
    if(con){alert("The Data has been deleted.")}
}

function logOut(){
    window.open('login.html');
}