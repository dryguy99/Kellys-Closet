var mongoose = require("mongoose");
var Image = require("../models/image.js");
var multer = require("multer");
var upload = multer({dest: "./uploads"});

var fs = require("fs");
var ImageArray=[];
var myfiles=[];
var base64data;


module.exports=function(app){


   app.post("/", upload.single("avatar"), function(req, res, next){
    console.log(req.file)
    console.log(typeof req.file)
    var NewImage= new Image(req.file)
     NewImage.save(function(err,doc){
            if (err){
            console.log('err: ' + error);
            res.json('error: there was an error');
            }
            else{
           console.log(doc);
            }
       })
       res.redirect('/');
	});


app.get("/one",function(req,res){
    Image.find({}).exec(function(error,data){
    var ImageArray=[];
      for(i=0;i<data.length;i++){
            var image = {
            path: data[i].path,
            filename: data[i].filename,
            mimetype:data[i].mimetype
           }
        ImageArray.push(image)
      }
      res.send(ImageArray);
   })
})


app.get("/uploads/:id",function(req,res){
       console.log("REQ " + req.params.id)
   //fs.readFile("./uploads\\"+req.params.id, function(err, imageData){
    fs.readFile("./uploads/"+req.params.id, function(err, imageData){
            //console.log(imageData)
        if(err){
          console.log(err+ "ERRRRRRRR");
        }else{

          var base64data = new Buffer(imageData, 'binary').toString('base64');
          //res.setContentType('image/jpeg');
          //res.set('Content-Type','image/jpeg');
          res.set({'Content-Type':'image/jpeg'});
          //res.set('Content-Type', type);
          res.send(base64data);

          //base64Img.img('data:image/png;base64,...', 'dest', '1', function(err, filepath) {


        }

})

})





//   	app.get("/one",function(req,res){
//     Image.find({}).exec(function(error,data){
//     console.log(data[0].path)

//      ImageArray=[];
//     	for(i=0;i<data.length;i++){
//     		var image = {
//             path: data[i].path,
//             mimetype: data[i].mimetype,
//             id: data[i]._id,
//             base64data:""

//           }
//           ImageArray.push(image)
//     	}
// 		//console.log(ImageArray);

//     	var index = data.length -1;
//     	//console.log(data[index].path)

//     	if(error){
//         	console.log(error)
//       	}
//       	else{
//           //for(i=0;i<ImageArray.length;i++){
//       		fs.readdir("./uploads", function(err, imageData){


//             //sconsole.log(imageData)
//       			//console.log(ImageArray[0].base64data).data[index].path
//   			if(err){
//   				console.log("fs error " + err);
//   			}else{
//          imageData.forEach(function(file, index){
//           //file=file.split(" ")

//             //for(i=0;i<file.length;i++){
//           //console.log("uploads\\"+file);
//             fs.readFile("uploads\\"+file,function(err,fileData){

//                   if(error){
//                       console.log(error)
//                    }
//                   else{
//                       ImageArray[i].base64data = new Buffer(fileData, 'binary').toString('base64');
//                       //console.log(base64data)

//                    }
//                    //res.end();
//                     });
//               // }
//                    })

//   			}
//        // console.log(myfiles)
//         res.contentType('image/jpeg');
//         //res.send(myfiles);
//       	})
//       }


//    })
//    // res.contentType('image/jpeg');
//      //res.send(ImageArray);
// })



app.get("/delete", function(req, res) {
  console.log(req.body)
  Image.remove().exec(function(error,data){

     if(error){
        res.send(error)
      }
      else{
        res.send(data)
        console.log(data)
      }
   });

})




  }
