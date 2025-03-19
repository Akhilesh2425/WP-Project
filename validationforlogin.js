function validate()
 {
                var name=document.getElementById('sa').value;
                var password=document.getElementById('pa').value;
                if(name==="")
                {
                    alert("Enter your ID");
                    exit(1);
                }
                if(password==="")
                {
                    alert("Enter your password");
                    exit(1);
                }
                else{
                    alert("Login Successful");
                    window.location.href = "main.html";
                    return true;
                }
 }