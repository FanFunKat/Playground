var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // console.log(xhr.responseText);
    const employees = JSON.parse(xhr.responseText);
    console.log(typeof employees);
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

