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
          var div=document.createElement("a")
          var container=document.getElementsByClassName("results-container")[0]
          var form=document.createElement("form")

          form.action="/search"
          form.method="post"
          div.innerHTML=response.volumeInfo.title
          container.appendChild(div)

        })

    }

})

}

GetAjax("Harry Potter")
