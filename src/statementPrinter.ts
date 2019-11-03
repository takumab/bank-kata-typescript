import Transaction from "./transaction";
import MyConsole from "./myConsole";
import {StatementPrinterInterface} from "./statementPrinterInterface";


class StatementPrinter implements StatementPrinterInterface {
    private mconsole: MyConsole;

    constructor(mconsole: MyConsole) {
        this.mconsole = mconsole;
    }

    print(transactions: Transaction[]): void {
        this.mconsole.printLine("DATE | AMOUNT | BALANCE");
        transactions.forEach((transaction) => {
            this.mconsole.printLine(`${transaction.date} | ${transaction.amount}`)
        })
    }
}

export default StatementPrinter;