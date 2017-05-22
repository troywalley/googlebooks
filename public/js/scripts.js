
var searchButton= document.getElementsByClassName('search')[0];
searchButton.addEventListener("click", function(){
  var input=document.getElementsByClassName('book')[0];
  var inputSearch=input.value;
  getAjax(inputSearch);
})




function getAjax(book){
 $.ajax({
      method: "get",
    url: "https://www.googleapis.com/books/v1/volumes",


    data: {
        q: book
    },

    dataType: "json",
    success: function(response) {
        response.items.forEach(function(response){
          console.log(response);
          // var div=document.createElement("div");
          // var container=document.getElementsByClassName("results-container")[0];
          // var form=document.createElement("form");
          // var input=document.createElement("input");
          // form.action="/search";
          // form.method="post";
          // input.type="hidden";
          // input.value=response;
          // form.appendChild(input);
          // div.innerHTML=response.volumeInfo.title;
          // container.appendChild(div);

        })
      }

  })
}


// xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes", true);
// xhttp.send();
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML = this.responseText;
//
//     }
//   };
//   xhttp.open("GET", "demo_get.asp", true);
//   xhttp.send();
// }
