import Transaction from "./transaction";
import BankClock from "./bankClock";
import TransactionRepositoryInterface from "./transactionRepositoryInterface";
import {StatementPrinterInterface} from "./statementPrinterInterface";

class Account {
    private transactionRepository: TransactionRepositoryInterface;
    private statementPrinter: StatementPrinterInterface;
    private clock: BankClock;

    constructor(transactionRepository: TransactionRepositoryInterface, clock: BankClock, statementPrinter: StatementPrinterInterface) {
        this.statementPrinter = statementPrinter;
        this.clock = clock;
        this.transactionRepository = transactionRepository;
    }

    deposit(amount: number): void {
        const transaction = new Transaction(amount, this.clock.now());
        this.transactionRepository.add(transaction)
    }

    withdraw(amount: number): void {
        const transaction = new Transaction(amount, this.clock.now());
        this.transactionRepository.add(transaction)
    }


    printStatement(): void {
        const transactions = this.transactionRepository.all();
        this.statementPrinter.print(transactions)
    }
}

export default Account;