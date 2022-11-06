
function get_url_params(){
  
  var params_split = '/hi?hi=a&b=d'.split('?')[1].split('&');

  var params={}

  params_split.forEach(
    
      function(value){
      
        key_val = value.split('=')
        params[key_val[0]] = key_val[1];
      }
  )
  return params;
  
}
