/*
 * Exercise: Refactor the code!
 *
 * This script file contains a small front-end app that queries the
 * StackOverflow API. It works, but the code is not ideal; there is a lot of
 * work to do to clean it up.
 *
 * First take a few minutes to understand what the code is doing, then use what
 * you have learned in the preceding stage-1 exercises to refactor the app.
 *
 * Take your time, and think about what principles you are trying to apply while
 * you are refactoring.
 */
'use strict';

function form(){
  e.preventDefault();
  var form = e.target;
  var tag  = form.querySelector('input[name=tags]').value;
  var url  = 'http://api.stackexchange.com/2.2/tags/' + tag + '/top-answerers/all_time?site=stackoverflow'

  var xhr = new XMLHttpRequest();
};
function covertString(){
  var response = JSON.parse(xhr.responseText);

  document.querySelector('#results-summary').innerHTML = ''
    + '<p>'
    + 'Query of ' + tags +  ' returned ' + response.items.length + ' results'
    + '</p>';
};
function StatusCode(){
  console.log('Status Code: ' + xhr.status);
};
function get(){
  xhr.open('GET', url);
  xhr.send();
};
function text01(){
  return ''
  + '<div>'
  + '<p>Title: ' + item.title + '</p>'
  + '<p>Date: ' + new Date(item.creation_date) + '</p>'
  + '<p>Link: <a href="' + item.link + '">Click here</a></p>'
  + '<p>Owner: ' + item.owner.display_name + '</p>'
  + '</div>'
}
function text02(){
  return ''
  + '<div>'
  + '<p>User: ' + item.user.display_name + '</p>'
  + '<p>Reputation: ' + item.user.reputation + '</p>'
  + '<p>Profile: <a href="' + item.user.link + '">Click here</a></p>'
  + '<p>Score: ' + item.score + '</p>'
  + '</div>'
}
function submit(callback){
  document.querySelector('#form-answerers').addEventListener('submit', function (e) {
    form();
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        covertString();
        document.querySelector('#results-body').innerHTML = response.items.map(function (item) {callback()}).join('<br>');
      } else { 
        StatusCode(); 
      }
    });
    get();
  });
}
submit(text01);
submit(text02);



