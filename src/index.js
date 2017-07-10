import {getUsers, deleteUser} from './api/userApi';


getUsers().then(result => {
  let usersBody = "";

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

  updateNumUsers();

  const deleteLinks = global.document.getElementsByClassName('btn btn-primary btn-med');
  Array.from(deleteLinks, link => {
    link.onclick = function(event){
      const element = event.target;
      console.log(element.attributes["data-id"].value);//eslint-disable-line no-console
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode.parentNode;
      row.parentNode.removeChild(row);
      updateNumUsers()
    };
  });

});

function updateNumUsers(){
  const numUsers = global.document.getElementsByClassName('btn btn-primary btn-med').length;
  document.getElementById('userCount').innerHTML = "<h1> Users ("+numUsers+")</h1>";
}
