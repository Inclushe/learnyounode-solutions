  var http = require('http');
    var bl = require('bl');
    var endCount  = 0 ;
    var output = [] ;
    var run = function(idx){
         http.get( process.argv[idx], function(res){

                        res.setEncoding('utf8');
                        res.pipe(bl(function(err,data){
                                output[idx - 2] = data.toString()  ;
                          endCount++ ;


                          if( endCount == 3){
                                print(output);

                           }
                        }));


                         });
      }
    var init = (function(){
    for(i=2; i < process.argv.length ; i++){
    run(i);

    }})();
    var  print  = function (output){
      for(i=0; i < output.length ; i++) {
           console.log( output[i]);
         }
     }