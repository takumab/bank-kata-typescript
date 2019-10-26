import Transaction from "./transaction";
import {MyConsole} from "./myConsole";

class StatementPrinter {
    private mconsole: MyConsole;
    constructor(mconsole: MyConsole) {
        this.mconsole = mconsole;
    }

    print(transactions: Transaction[]) {
        throw new Error("Method not implemented.");
    }
}

export default StatementPrinter;