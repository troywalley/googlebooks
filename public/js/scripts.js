function GetAjax(book){
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
          console.log(response.volumeInfo.title)
        })

    }

})

}

GetAjax("Harry Potter")
