function NewsController(){
  var targetDiv = document.getElementById('app');
  targetDiv.innerHTML = listHeadlines();
}

NewsController();
