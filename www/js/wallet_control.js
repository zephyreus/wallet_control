function refreshExpenseValue(){
  document.getElementById('lastExpenses').value = 0;
}

function getExpenseValue(){
  var expense = document.getElementById('lastExpenses').value;
  var nothing = "";
  if ((expense == 0) || (expense == null) || (expense == "0")){
    return nothing;
  }
  else{
    return expense;
  }
}

function insertValueToExpense(new_value){
  document.getElementById('lastExpenses').value = new_value;
}

function button9(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "9";
  insertValueToExpense(new_value);
}

function button8(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "8";
  insertValueToExpense(new_value);
}

function button7(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "7";
  insertValueToExpense(new_value);
}

function button6(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "6";
  insertValueToExpense(new_value);
}

function button5(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "5";
  insertValueToExpense(new_value);
}

function button4(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "4";
  insertValueToExpense(new_value);
}

function button3(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "3";
  insertValueToExpense(new_value);
}

function button2(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "2";
  insertValueToExpense(new_value);
}

function button1(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "1";
  insertValueToExpense(new_value);
}

function button0(){
  var expense = getExpenseValue();
  var e = expense.toString();
  var new_value = e + "0";
  insertValueToExpense(new_value);
}

function buttonComma(){
  var expense = getExpenseValue();
  var e = expense.toString();
  // TO DO: walidacja na to, że jak występuje już przecinek, to żeby nic nie robił
  if ((e == '') || (e == '0')){
    var new_value = "0,"
  }
  else{
    var new_value = e + ",";
  }
  insertValueToExpense(new_value);
}

function buttonMultiple(){
  var expense = getExpenseValue();
  var e = expense.toString();
  // TO DO: walidacja na to, że jak występuje już mnożenie, to żeby nic nie robił
  if ((e == '') || (e == '0')){
    var new_value = "0"
  }
  else{
    var new_value = e + " X ";
  }
  insertValueToExpense(new_value);
}
