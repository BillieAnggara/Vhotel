function validate(){
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const checkin =  document.getElementById("check-in").value
    const checkout = document.getElementById("check-out").value

    // console.log(username)
    if(username.length < 5){
        alert("Username must be at least 5 character long")
        // document.getElementById("error_msg").innerHTML = "Username must be at least 5 character long<br>"
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com")
    }
    else if(checkin == checkout){
        alert("You must stay at least 1 day full")
    }
    else{
        alert("Your reservation success")
    }
}