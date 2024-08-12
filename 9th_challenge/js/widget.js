const stat = new XMLHttpRequest();
stat.onreadystatechange = function () {
  if (stat.readyState === 4) {
    // console.log(xhr.responseText);
    const employees = JSON.parse(stat.responseText);
    // console.log(typeof employees);
    let statusHTML = `<ul class='bulleted'>`;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += `<li class='in'>`;
      } else {
        statusHTML += `<li class='out'>`;
      }
      statusHTML += employees[i].name
      statusHTML += `</li>`;
    };
    statusHTML += `</ul>`;
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
stat.open('GET', 'data/employees.json');
stat.send();

const room = new XMLHttpRequest();
room.onreadystatechange = function () {
  if (room.readyState === 4) {
    const rooms = JSON.parse(room.responseText);
    let roomHTML = `<ul class='rooms'>`;
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        roomHTML += `<li class='empty'>`;
      } else {
        roomHTML += `<li class='full'>`;
      }
      roomHTML += rooms[i].room
      roomHTML += `</li>`;
    };
    roomHTML += `</ul>`;
    document.getElementById('roomList').innerHTML = roomHTML;
  }
};
room.open('GET', 'data/rooms.json');
room.send();
