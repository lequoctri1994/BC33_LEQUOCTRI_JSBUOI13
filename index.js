/**
 * Bài 1
 *
 * sơ đồ 3 khối
 *
 * INPUT: lương 1 ngày, số ngày làm
 *
 * PROCESS: (pseudo code)
 *  1. lấy được input (hardcode)
 *  2. tính lương = lương 1 ngày * số ngày làm
 *  3. log lương ra màn hình
 *
 * OUTPUT: lương
 *
 */

function calcSalary() {
  var salaryPerDay = +document.getElementById("salaryPerDay").value;
  var workingDays = +document.getElementById("days").value;

  var totalSalary = salaryPerDay * workingDays;

  var sal = document.getElementById("salary");

  salary.innerHTML = totalSalary;

  console.log("Tổng lương trong tháng là:", totalSalary);
}

/**
 * Bài 2
 *
 * sơ đồ 3 khối
 *
 * INPUT: 5 số thực
 *
 * PROCESS: (pseudo code)
 * 1. lấy được INPUT (hardcode)
 * 2. tính giá trị trung bình của 5 số = (num1 + num2 + num3 + num4 + num5) / 5
 * 3. log giá trị trung bình ra màn hình
 *
 * OUTPUT: giá trị trung bình
 *
 */

function calcAverage() {
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  var num3 = +document.getElementById("num3").value;
  var num4 = +document.getElementById("num4").value;
  var num5 = +document.getElementById("num5").value;

  var average = (num1 + num2 + num3 + num4 + num5) / 5;

  var res = document.getElementById("result");
  result.innerHTML = average;
}

/**
 * Bài 3
 *
 * sơ đồ 3 khối
 *
 * INPUT: 1 USD = 23500 VND
 *
 * PROCESS: (pseudo code)
 * 1. lấy được INPUT (hardcode)
 * 2. tính số tiền sau khi quy đổi USD ra VND
 * 3. log kết quả ra màn hình
 *
 * OUTPUT: số tiền quy đổi
 *
 */

function exchangeMoney() {
  var USD = +document.getElementById("USD").value;
  var VND = 23500;

  var exchange = USD * VND;

  var result = document.getElementById("result3");
  result3.innerHTML = exchange;
}

/**
 * Bài 4
 *
 * sơ đồ 3 khối
 *
 * INPUT: chiều dài, chiều rộng hình chữ nhật
 *
 * PROCESS: (pseudo code)
 * 1. lấy được INPUT (hardcode)
 * 2. tính diện tích, chu vi
 * 3. log kết quả ra màn hình
 *
 * OUTPUT: diện tích, chu vi
 *
 */

function calcBoth() {
  var length = +document.getElementById("length").value;
  var width = +document.getElementById("width").value;

  var area = length * width;
  var perimeter = (length + width) * 2;

  var result = document.getElementById("result4");
  var result2 = document.getElementById("result5");

  result4.innerHTML = area;

  result5.innerHTML = perimeter;
}

/**
 * Bài 5
 *
 * sơ đồ 3 khối
 *
 * INPUT: 1 số thực
 *
 * PROCESS: (pseudo code)
 * 1. lấy được INPUT (hardcode)
 * 2. tính tổng 2 ký số của số thực
 * 3. log kết quả ra màn hình
 *
 * OUTPUT: tổng 2 ký số của số thực
 *
 */

function calc6() {
  var number = +document.getElementById("num6").value;

  var num1 = Math.floor(number / 10);
  var num2 = number % 10;

  var sum = num1 + num2;

  var result = document.getElementById("result6");
  result6.innerHTML = sum;
}

