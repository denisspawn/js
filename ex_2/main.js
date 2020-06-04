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
  let a = prompt("введите обязательную статью расходов в этом месяце", "");
  let b = +prompt("во сколько обойдется", "");
  if ((typeof(a)) == 'string' && (typeof(a)) != null && a != "" && a.length <= 50 && (typeof(b)) != null && b != ""){
    appData.expenses[a] = b;
  }
}

appData.moneyPerDay = appData.budget/30;

alert(`Бюджет на один день ${appDataPerDay}`);
