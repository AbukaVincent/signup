function validate()
{
    var uname = document.getElementById("uname");
    var password = document.getElementById("myInput");

    if(uname.value.trim()=="")
    {
        alert("Blank Username");
        uname.style.border = "solid 3px red";
        return false;
    }
    else if(password.value.trim()=="")
    {
        alert("Blank Password");
        password.style.border = "solid 3px red";
        return false;
    }
    else if(password.value.trim().length<5)
    {
        alert("password too short");
        return false;
    }
    else{
        return true;
    }
}