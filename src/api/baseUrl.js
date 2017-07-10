export default function getBaseUrl(){

  //return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001' : '/';
  if(getQueryStringParameterByName('useMockApi') ){
    console.log("returning baseUrl of http://localhost:3001");
    return 'http://localhost:3001/';
  }
  else{
    console.log("returning / ");
    return '/';
  }
}


// function getQueryStringParameterByName(name, url){
//   if(!url) url = window.location.href;
//   name = name.replace(/[\[\]]/g, "\\$&");
//   console.log('name: '+name);
//   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//       results = regex.exec(url);
//   if(!results) return null;
//   if(results[2]) return '';
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

function getQueryStringParameterByName(name, url) {
    if(!url) url = window.location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
