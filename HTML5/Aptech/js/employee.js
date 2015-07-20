window.onload = function() {
    var xmlhttp = new XMLHttpRequest();
    var url = "employee.json";

    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArray = JSON.parse(xmlhttp.responseText);

            var emp = myArray.employees;
            var out="";
            for(var i=0; i< emp.length; i++) {
                out += "<p>" + emp[i].firstName + " " + emp[i].lastName + "</p>";
            }
    
            document.getElementById('contents').innerHTML=out;
          }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

