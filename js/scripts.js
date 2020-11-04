// Business Logic for Bank Account --------------
function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  let newBalance = this.balance + amount;
  this.balance = newBalance;
  console.log(newBalance);
}

BankAccount.prototype.withdraw = function(amount) {
  let newBalance = this.balance - amount;
  this.balance = newBalance;
  console.log(newBalance);
}

// User Interface Logic --------------
$(document).ready(function() {
  let newAccount = new BankAccount();
  $("form#newAccount").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let deposit = parseInt($("#deposit").val());
    newAccount = new BankAccount (name, deposit);
    $("#totalBalance").text(newAccount.balance);
  });
  $("form#deposit").submit(function(event) {
    event.preventDefault();
    let addition = parseInt($("#addition").val());
    newAccount.deposit(addition);
    console.log(newAccount);
    $("#totalBalance").text(newAccount.balance);
  });
  $("form#withdrawal").submit(function(event) {
    event.preventDefault();
    let withdrawal = parseInt($("#withdraw").val());
    newAccount.withdraw(withdrawal);
    console.log(newAccount);
    $("#totalBalance").text(newAccount.balance);
  });
});
