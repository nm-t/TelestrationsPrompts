function random() {
    var url = "https://www.w3.org/TR/PNG/iso_8859-1.txt";

    var jsonFile = new XMLHttpRequest();
        jsonFile.open("GET",url,true);
        jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
            document.getElementById("text-holder").innerHTML = jsonFile.responseText;
        }
    }
}
