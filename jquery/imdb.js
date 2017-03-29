(funcion () {

	$(init);

	function init()
	{

		$("#searchMovie").click(searchMovie);
		var = movieTitle = $("#movieTitle");


		function searchMovie()
		{

			var title = movieTitle.val();
			alert("searchMovie: "+title);

			$.ajax({

				url: "http://www.omdbapi.com/?t=The+Flash",
				dataType: "jsonp",
				success: function(response){
					console.log(response);
				}
			})
		}

	}
}) ();