function test(){return 'working';}


function get_url_params(url){
  
  var params_split = url.split('?')[1].split('&');

  var params={}

  params_split.forEach(
    
      function(value){
      
        key_val = value.split('=')
        params[key_val[0]] = key_val[1];
      }
  )
  return params;
  
}
