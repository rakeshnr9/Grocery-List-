function display() {


  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          var result = "";
          for (var i = 0; i < response.length; i++) {
              result += "<tr>\n";
              result += "<td>" + response[i].SlNo +"</td>\n";
              result += "<td>" + response[i].Name +"</td>\n";
              result += "<td>" + response[i].Quantity +"</td>\n";
              result += "<td>" + response[i].Unit +"</td>\n";
              result += "<td>" + response[i].Department +"</td>\n";
              result += "<td>" + response[i].Notes +"</td>\n";
              result += "</tr>\n";
          }
          document.querySelector("#myTable").innerHTML = result;

      }
  };
  xhttp.open("GET", "./index.json", true);
  xhttp.send();
}













