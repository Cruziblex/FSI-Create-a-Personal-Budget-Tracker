let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for (i = 0; i < weeklyExpenseQuestions.length; i++)
{
let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
weeklyExpenses += answer
}

for (i = 0; i < annualExpenseQuestions.length; i++)
{
let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
monthlyExpenses += answer
}

for (i = 0; i < annualExpenseQuestions.length; i++)
{
let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
annualExpenses += answer
}
