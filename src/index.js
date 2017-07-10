import {getUsers, deleteUser} from './api/userApi';
//import $ from 'jquery';

let numUsers = 0;
getUsers().then(result => {
  let usersBody = "";
  numUsers = result.length;
  console.log("number of users: "+numUsers);//eslint-disable-line no-console
  result.forEach(user => {
    usersBody+=`<tr>

      <td><p><a class="btn btn-primary btn-med" href="#" data-id="${user.id}" role="button">Delete</a></p></td>

      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('btn btn-primary btn-med');
  Array.from(deleteLinks, link => {
    link.onclick = function(event){
      const element = event.target;
      console.log(element.attributes["data-id"].value);//eslint-disable-line no-console
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });

});
