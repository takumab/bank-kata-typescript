import Transaction from "./transaction";
import MyConsole from "./myConsole";
import {StatementPrinterInterface} from "./statementPrinterInterface";
import moment = require("moment");


class StatementPrinter implements StatementPrinterInterface {
    private mconsole: MyConsole;

    constructor(mconsole: MyConsole) {
        this.mconsole = mconsole;
    }

    print(transactions: Transaction[]): void {
        let runningBalance: number = 0;
        const transactionList = transactions.map((transaction) => {
            runningBalance += transaction.amount;
            return {date: transaction.date, amount: transaction.amount, balance: runningBalance}
        });
        transactionList.reverse();

        this.mconsole.printLine("DATE | AMOUNT | BALANCE");
        transactionList.forEach((transaction) => {
            this.mconsole.printLine(`${moment(transaction.date).format('DD/MM/YYYY')} | ${transaction.amount} | ${transaction.balance}`)
        })
    }
}

export default StatementPrinter;