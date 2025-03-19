function validate1()
{
    var name=document.getElementById('nameof').value;
    var fname=document.getElementById('fnameof').value;
    var number=document.getElementById('num').value;
    let email = document.getElementById("email").value.trim();
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let password=document.getElementById('password').value;
    let cpassword=document.getElementById('cpassword').value;
    if(name ==="" || fname ==="")
        {
            alert("Name or surname cannot be empty");
            return false;
        }
        if(password==="") {
            alert("Set Your password");
            return false;
        }
        if(cpassword==="")
        {
            alert("Confirm your password");
            return false;
        }
        if(password!=cpassword)
        {
            alert("Both passwords do not match");
            return false;
        }
    if(number.length!=10)
    {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }
    if(!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email address.");
        return false;
    }
    if(day==="" || month===""|| year==="")
    {
        alert("Date of Birth is not entered");
        return false;
    }
    else{
        alert("Registration Successful");
        return true;
    }
}