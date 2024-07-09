import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\t\t===={ wellcom in MURTAZA ALI simple calculator}====\n"));
//Asking question from user.
let answers = await inquirer.prompt([
    {
        message: chalk.yellow("Enter your first number"),
        type: "number",
        name: "first_number"
    },
    {
        message: chalk.yellow("Enter your second number"),
        type: "number",
        name: "second_number"
    },
    {
        message: chalk.yellow(" select one operator to perform operation"),
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    },
]);
//Condition statement if_else.
if (answers.operator === "addition") {
    console.log(chalk.green(answers.first_number + answers.second_number));
    console.log(chalk.bgGreen.bold("\n\tThanks for using MURTAZA ALI simple calculator"));
}
else if (answers.operator === "subtraction") {
    console.log(chalk.green(answers.first_number - answers.second_number));
    console.log(chalk.bgGreen.bold("\n\tThanks for using MURTAZA ALI simple calculator"));
}
else if (answers.operator === "multiplication") {
    console.log(chalk.green(answers.first_number * answers.second_number));
    console.log(chalk.bgGreen.bold("\n\tThanks for using MURTAZA ALI simple calculator"));
}
else if (answers.operator === "division") {
    console.log(chalk.green(answers.first_number / answers.second_number));
    console.log(chalk.bgGreen.bold("\n\tThanks for using MURTAZA ALI simple calculator"));
}
else {
    console.log(chalk.red("invalid input"));
}
;
