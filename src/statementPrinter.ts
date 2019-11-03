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
        const transactionList = this.runningBalanceFor(transactions);
        transactionList.reverse();

        this.mconsole.printLine("DATE | AMOUNT | BALANCE");
        transactionList.forEach((transaction) => {
            this.mconsole.printLine(`${moment(transaction.date).format('DD/MM/YYYY')} | ${transaction.amount} | ${transaction.balance}`)
        })
    }

    private runningBalanceFor(transactions: Transaction[]): { date: Date; amount: number; balance: number }[] {
        let runningBalance: number = 0;
        return transactions.map((transaction) => {
            runningBalance += transaction.amount;
            return {date: transaction.date, amount: transaction.amount, balance: runningBalance}
        });
    }
}

export default StatementPrinter;