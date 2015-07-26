window.onload = function() {
  
    // JSON Parse Implementation
    var xmlhttp1 = new XMLHttpRequest();
    var url = "employee.json";
    
    xmlhttp1.open("GET", url, true);
    xmlhttp1.send();

    xmlhttp1.onreadystatechange = function() {
        if(xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
            var jsonDoc = JSON.parse(xmlhttp1.responseText);

            var emp = jsonDoc.employees;
            var out="";
            for(var i in emp) {
                out += "<p>" + emp[i].firstName + " " + emp[i].lastName + "<ul>";
                for(var j in emp[i].role) {
                    out += "<li>" + emp[i].role[j] + "</li>";
                }
                out += "</ul></p>";
            }
    
            document.getElementById('json-contents').innerHTML=out;
          }
    };

    
    
    
    // XML Parse Implementation
    var xmlhttp2;
    var urlXML = "employee.xml";
    
    if (window.XMLHttpRequest) {
        xmlhttp2 = new XMLHttpRequest(); // IE7+, Chorme, Firefox etc
    }
    else {
        xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP"); //IE6-
    }
    
    xmlhttp2.open("GET", urlXML, true);
    xmlhttp2.send();
    
    xmlhttp2.onreadystatechange = function() {
        if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
            var xmlDoc = xmlhttp2.responseXML; // retrieves contents of xml document
            var employee = xmlDoc.getElementsByTagName("EMPLOYEE"); // get all employee tags
    
            var xout = '<ul>';
            for (var i=0; i<employee.length; i++) {
                xout += '<li>'
                        + employee[i].getElementsByTagName("FIRSTNAME")[0].childNodes[0].nodeValue
                        + ' ' + employee[i].getElementsByTagName("LASTNAME")[0].childNodes[0].nodeValue
                        + '<ul><li>'
                        + employee[i].getElementsByTagName("SALARY")[0].childNodes[0].nodeValue + '</li>';
                        
                        // get employee roles
                        var empRole = employee[i].getElementsByTagName("ROLE");
                        for (var j=0; j<empRole.length; j++) {
                            xout += '<li>Role ' + (j+1) + ': ' + empRole[j].childNodes[0].nodeValue + '</li>';
                        }
                        xout += '</ul></li>';
            }
            document.getElementById('xml-contents').innerHTML = xout + '</ul>';
        }
    };
};

