const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const url = "http://localhost:3000/studentBookProject/";
const app = document.getElementById("app");
const all_student = document.getElementById("all_student");
let apiJSON;
let counter = 0;
let responseLenght = 0;

//Main page
//Получение информации с api сервера и запись JSON что пришел с api в переменную
function getAllStudent(url = "") {
  return fetch(url, { method: "GET" })
    .then(response => response.json())
    .then(response => (apiJSON = response))
    .catch(error => console.log(error));
}

//Получение студентов,запись длины JSON
function getStudents(response) {
  addStudentsToList(response[counter]);
  responseLenght = response.length;
}
// Отрисовка таблицы студентов на странице
function addStudentsToList(el) {
  console.log(el);
  if (all_student.firstChild) {
    while (all_student.firstChild) {
      all_student.removeChild(all_student.firstChild);
    }
    for (let i in el) {
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td> ${i} : </td> <td> ${el[i]}</td>`;
      all_student.appendChild(tableRow);
    }
  } else {
    for (let i in el) {
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td> ${i} : </td> <td> ${el[i]}</td>`;
      all_student.appendChild(tableRow);
    }
  }
}
//Запуск всего кода что выше,через promise GetAllStudent
getAllStudent(url).then(getStudents);

//Контроллер,что обрабатывает клики на Кнопках prev next
function counterChanger(state) {
  if (state == "prev") {
    if (counter != 0) {
      counter--;
      console.log(counter);
    }
  } else if (state == "next") {
    if (counter < responseLenght - 1) {
      counter++;
      console.log(counter);
    }
  }
}

prev.onclick = function(e) {
  counterChanger(e.target.className);
  getStudents(apiJSON);
};

next.onclick = function(e) {
  counterChanger(e.target.className);
  getStudents(apiJSON);
};

//Create Student
