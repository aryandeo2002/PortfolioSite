function formvalidate(){
    let x = document.forms["contactform"]["fname"].value;
    if (x == "") {
      alert(" First Name must be filled out");
      return false;
    }
    else if(x == isNaN()){
        alert("Name Cannot be Number");
        return false;
    }
}
