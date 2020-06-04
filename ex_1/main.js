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

for(let i = 0; i < 2; i++) {
  appData.expenses[prompt("введите обязательную статью расходов в этом месяце", "")] = +prompt("во сколько обойдется", "");
}

alert(`Бюджет на один день ${appData.budget/30}`);
