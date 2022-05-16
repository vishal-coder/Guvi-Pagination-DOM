var request1 = new XMLHttpRequest();
var global;
request1.open(
  "Get",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
);
request1.send();
request1.onload = function () {
  var data = JSON.parse(request1.response);
  global = data;

  insertData(global, 1); //initially page number will be 1
  for (var i = 0; i < data.length; i++) {}
};

let container = createElement("div", "class", "container");
let header = createElement(
  "h1",
  "id",
  "title",
  null,
  null,
  "Simple Pagination"
);
let description = createElement(
  "p",
  "id",
  "description",
  null,
  null,
  "showing json data in tabular format with help of pagination"
);
// for pagination

pagination = createElement("div", "class", "pagination");
innerDiv = createElement(
  "div",
  "class",
  "d-flex justify-content-center text-center",
  "id",
  "buttons"
);

let nav = createElement("nav", "aria-label", "Page navigation example");
let ui = createElement("ul", "class", "pagination", "id", "buttons");
let first_li = createElement("li", "class", "page-item disabled");
let previous_li = createElement("li", "class", "page-item disabled");
let one_li = createElement("li", "class", "page-item active");
let two_li = createElement("li", "class", "page-item");
let three_li = createElement("li", "class", "page-item");
let four_li = createElement("li", "class", "page-item");
let five_li = createElement("li", "class", "page-item");
let next_li = createElement("li", "class", "page-item");
let last_li = createElement("li", "class", "page-item");

let a_first = createElement("a", "class", "page-link", "id", "First", "First");
a_first.setAttribute("href", "#");
let a_previous = createElement(
  "a",
  "class",
  "page-link",
  "id",
  "Previous",
  "Previous"
);
a_previous.setAttribute("href", "#");

let a_one = createElement("a", "class", "page-link num", "id", "1", "1");
a_one.setAttribute("href", "#");

let a_two = createElement("a", "class", "page-link num", "id", "2", "2");
a_two.setAttribute("href", "#");

let a_three = createElement("a", "class", "page-link num", "id", "3", "3");
a_three.setAttribute("href", "#");

let a_four = createElement("a", "class", "page-link num", "id", "4", "4");
a_four.setAttribute("href", "#");

let a_five = createElement("a", "class", "page-link num", "id", "5", "5");
a_five.setAttribute("href", "#");

let a_Next = createElement("a", "class", "page-link", "id", "Next", "Next");
a_Next.setAttribute("href", "#");

let a_Last = createElement("a", "class", "page-link", "id", "Last", "Last");
a_Last.setAttribute("href", "#");

first_li.append(a_first);
previous_li.append(a_previous);
one_li.append(a_one);
two_li.append(a_two);
three_li.append(a_three);
four_li.append(a_four);
five_li.append(a_five);
next_li.append(a_Next);
last_li.append(a_Last);

ui.append(
  first_li,
  previous_li,
  one_li,
  two_li,
  three_li,
  four_li,
  five_li,
  next_li,
  last_li
);

nav.append(ui);
innerDiv.append(nav);
pagination.append(innerDiv);

//for table data

let tableDiv = createElement("div", "class", "table-responsive");
let table = createElement(
  "table",
  "class",
  "table table-bordered center",
  "id",
  "table"
);

let thead = createElement("thead", "class", "thead-dark");

let tr_th = document.createElement("tr");
let th1 = createElement("th", "scope", "col", null, null, "Id");
let th2 = createElement("th", "scope", "col", null, null, "Name");
let th3 = createElement("th", "scope", "col", null, null, "email");

tr_th.append(th1, th2, th3);
thead.append(tr_th);
table.append(thead);

let tbody = document.createElement("tbody");

let tr1 = document.createElement("tr");
let tr1_td1 = document.createElement("td");
let tr1_td2 = document.createElement("td");
let tr1_td3 = document.createElement("td");

tr1.append(tr1_td1, tr1_td2, tr1_td3);

let tr2 = document.createElement("tr");
let tr2_td1 = document.createElement("td");
let tr2_td2 = document.createElement("td");
let tr2_td3 = document.createElement("td");
tr2.append(tr2_td1, tr2_td2, tr2_td3);

let tr3 = document.createElement("tr");
let tr3_td1 = document.createElement("td");
let tr3_td2 = document.createElement("td");
let tr3_td3 = document.createElement("td");
tr3.append(tr3_td1, tr3_td2, tr3_td3);

let tr4 = document.createElement("tr");
let tr4_td1 = document.createElement("td");
let tr4_td2 = document.createElement("td");
let tr4_td3 = document.createElement("td");
tr4.append(tr4_td1, tr4_td2, tr4_td3);

let tr5 = document.createElement("tr");
let tr5_td1 = document.createElement("td");
let tr5_td2 = document.createElement("td");
let tr5_td3 = document.createElement("td");
tr5.append(tr5_td1, tr5_td2, tr5_td3);

tbody.append(tr1, tr2, tr3, tr4, tr5);
table.append(tbody);
tableDiv.append(table);
container.append(header, description, pagination, tableDiv);

document.body.append(container);

// make one hidden input and use that as page number
let hiddenEl = createElement("input", "type", "hidden", "value", "1", null);
document.body.append(hiddenEl);

function createElement(tagName, attr, value1, attr1, value2, textValue) {
  let ele = document.createElement(tagName);
  ele.setAttribute(attr, value1);
  if (attr1 != null) ele.setAttribute(attr1, value2);
  if (textValue != null) ele.innerText = textValue;

  return ele;
}

let currentPageNum = document.querySelector('[type="hidden"]').value;

let buttons = document.querySelectorAll(".page-link");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let clickedPageBtn = button.innerText;
    let pageNum;

    if (clickedPageBtn == "First") {
      currentPageNum = 1;
    } else if (clickedPageBtn == "Previous") {
      --currentPageNum;
    } else if (clickedPageBtn == "Next") {
      if (currentPageNum === global.length / 5) {
        toggleDisable("End");
        return;
      }
      ++currentPageNum;
    } else if (clickedPageBtn == "Last") {
      currentPageNum = global.length / 5;
    } else {
      currentPageNum = button.innerText;
    }

    // to disable buttons on condition
    toggleDisable(clickedPageBtn);

    // to update page number
    updatePageNumbers(clickedPageBtn);

    // to update new data
    insertData(global, currentPageNum);
  });
});

function insertData(array, pageNum) {
  let trList = document.querySelectorAll("tbody> tr");
  let index = (pageNum - 1) * 5;
  trList.forEach((tr) => {
    tr.childNodes[0].innerText = array[index].id;
    tr.childNodes[1].innerText = array[index].name;
    tr.childNodes[2].innerText = array[index].email;
    index++;
  });
}

function toggleDisable(disableBtn) {
  let previusel = document.getElementById("Previous");
  let nextel = document.getElementById("Next");
  let firstEl = document.getElementById("First");
  let lastEl = document.getElementById("Last");
  if (disableBtn == "Last") {
    nextel.parentElement.classList.add("disabled");
    previusel.parentElement.classList.remove("disabled");
    firstEl.parentElement.classList.remove("disabled");
    lastEl.parentElement.classList.add("disabled");
  } else if (
    disableBtn == "1" ||
    disableBtn == "First" ||
    (disableBtn == "Previous" && currentPageNum == 1)
  ) {
    previusel.parentElement.classList.add("disabled");
    firstEl.parentElement.classList.add("disabled");
    nextel.parentElement.classList.remove("disabled");
    lastEl.parentElement.classList.remove("disabled");
  } else if (disableBtn == "End" || currentPageNum == global.length / 5) {
    firstEl.parentElement.classList.remove("disabled");
    previusel.parentElement.classList.remove("disabled");
    nextel.parentElement.classList.add("disabled");
    lastEl.parentElement.classList.add("disabled");
  } else {
    previusel.parentElement.classList.remove("disabled");
    nextel.parentElement.classList.remove("disabled");
    firstEl.parentElement.classList.remove("disabled");
    lastEl.parentElement.classList.remove("disabled");
  }
}

function toggleActiveClass(clickedPageBtn) {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  let pageEl = document.getElementById(clickedPageBtn);
  pageEl.parentElement.classList.add("active");
}

function updatePageNumbers(clickedPageBtn) {
  let pageLimit = global.length / 5;
  let numText = Number(currentPageNum);
  if (
    (currentPageNum > 5 && currentPageNum < pageLimit) ||
    clickedPageBtn == "Last" ||
    clickedPageBtn == "First" ||
    (clickedPageBtn == "Previous" && numText - 5 == 0)
  ) {
    if (numText + 5 > pageLimit) {
      numText = pageLimit - 4;
    } else if (clickedPageBtn == "End") {
      numText = pageLimit - 4;
    } else if (clickedPageBtn == "Previous" && numText - 5 == 0) {
      numText = 1;
    }
    numList = document.querySelectorAll(".num");
    numList.forEach((num) => {
      num.setAttribute("id", numText);
      num.innerText = numText++;
    });
  }
  toggleActiveClass(currentPageNum);
}
