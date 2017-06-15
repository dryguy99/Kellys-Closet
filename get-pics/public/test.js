

///FRONT SIDE


$(document).on("click", "#submit", function() {
$.ajax({
    method: "GET",
    url: "/one"
  }).done(function(data) {
    for(i=0;i<data.length;i++){
       console.log(data[i].path)
     $("#img").append('<img src="data:image/png;base64, ' + data[i].path + '" />');
    }

})
})



///SERVER SIDE

app.get("/one",function(req,res){
    Image.find({}).exec(function(error,data){
    var ImageArray=[];
      for(i=0;i<data.length;i++){
            var image = {
            path: data[i].path
           }
        ImageArray.push(image)
      }
      res.send(ImageArray);    

})
 
})


app.get("/:id",function(req,res){
  console.log(req.params)
   fs.readFile(req.params.path, function(err, imageData){
            console.log(imageData)
        if(err){
          console.log(err);
        }else{

          var base64data = new Buffer(imageData, 'binary').toString('base64');
          res.contentType('image/jpeg');
          res.send(base64data);
        }

})
 
})