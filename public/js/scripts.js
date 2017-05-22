$("document").ready(function() {







 $.ajax({
	 method: "GET",
	 url: "https://www.googleapis.com/books/v1/volumes",

	 data: {
	    q: "harry potter"
	},

	datatype: "json",
	success: function(response){   
	     console.log(response)
	     
    }
})
















})