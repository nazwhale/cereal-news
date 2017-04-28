function getAPIOutput(){

  var cereal = 'cheerios'
  var url = 'https://content.guardianapis.com/search?';
  var choice = 'q=' + cereal + '&';
  var key = 'api-key=79da25fe-82d8-4d99-b194-38059f5cf206';

  // fetch(url + choice + key)
  // .then(res => res.json())
  // .then((out) => {
  //   out
  // })
  // .then(out) = APIoutput
  // .catch(err => console.error(err));

  var opts = {
    method: 'GET',
    body: 'json',
    headers: {}
  };

  fetch(url + choice + key).then(function (response) {
    console.log(1);
    return response.json();
  })
  .then(function (body) {
    //doSomething with body;
    console.log(2);
    APIout = body;
  });
}
getAPIOutput();
