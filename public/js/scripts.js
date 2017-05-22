
var searchButton= document.getElementsByClassName('search')[0];
searchButton.addEventListener("click", function(){
  var input=document.getElementsByClassName('book')[0];
  var inputSearch=input.value;
  console.log(inputSearch);
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

          var div=document.createElement("div")
          var container=document.getElementsByClassName("results-container")[0]
          div.innerHTML=response.volumeInfo.title
          container.appendChild(div)
          div.addEventListener("click", function(event){
            $.ajax({
              method: "post",
              url:"/home",
              data:{
                url: "test"
              },
              dataType: "json",
              success: function(response){
                console.log(response)
              },
              error: function(response)

            })
          })

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
