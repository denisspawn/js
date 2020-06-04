'use strict';

let money, time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "")] = +prompt("Во сколько обойдется", "");
//let firstAns = prompt = ("Введите обязательную статью расходов в этом месяце", "");
//let secondAns = h

alert(`Бюджет на один день ${appData.budget/30}`);


