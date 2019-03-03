var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;
// document.write(today);

var tommorrow = new Date();
var dd = tommorrow.getDate() + 1;
var mm = tommorrow.getMonth() + 1; //January is 0!
var yyyy = tommorrow.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

tommorrow = mm + '/' + dd + '/' + yyyy;
// document.write(today);

var nextDay2 = new Date();
var dd = nextDay2.getDate() + 2;
var mm = nextDay2.getMonth() + 1; //January is 0!
var yyyy = nextDay2.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

nextDay2 = mm + '/' + dd + '/' + yyyy;

var nextDay3 = new Date();
var dd = nextDay3.getDate() + 3;
var mm = nextDay3.getMonth() + 1; //January is 0!
var yyyy = nextDay3.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}
nextDay3 = mm + '/' + dd + '/' + yyyy;

var nextDay4 = new Date();
var dd = nextDay4.getDate() + 4;
var mm = nextDay4.getMonth() + 1; //January is 0!
var yyyy = nextDay4.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}
nextDay4 = mm + '/' + dd + '/' + yyyy;