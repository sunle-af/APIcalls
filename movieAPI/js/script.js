 $(document).ready(function() { 
     var apikey="b0202a42"
     $("#movieForm").submit(function(event){
         event.preventDefault()
      

         var movie = $("#movie").val()
         var url = "http://www.omdbapi.com/?apikey="+apikey
        
         var url2 = "http://demo.tech2edge.co/samples/data-sg"
         $.ajax({
             method:'GET',
             url:url+"&t="+movie,
             success:function(data){
                 console.log(data)

                 result = `
                    <img style="float:left" class="img-thumbnail" width=200 height=200 src="${data.Poster}"/>
                    <h2>${data.Title}</h2>
                    <h2>${data.Genre}</h2>
                    <h2>${data.Released}</h2>
                    <h2>${data.Runtime}</h2>
                    
                    `

                 $("#result").html(result)

             }
         })
     })
 });
