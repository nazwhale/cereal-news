function listHeadlines(){
  APIout = getAPIOutput();
  console.log(APIoutput);

  headlinesHTML = [];
  for (var i=0; i<=10; i++){
    headlinesHTML.push("<li>" + APIoutput.response.results[i].webTitle + "</li>");
  }
  return headlinesHTML.join("");

}
