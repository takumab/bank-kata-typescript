import TransactionRepository from "./transactionRepository";
import Transaction from "./transaction";
import BankClock from "./bankClock";
import TransactionRepositoryInterface from "./transactionRepositoryInterface";
import {StatementPrinter} from "./statementPrinter";

class Account {
    private transactionRepository: TransactionRepositoryInterface;
    private statementPrinter: StatementPrinter;
    private clock: BankClock;

    constructor(transactionRepository: TransactionRepositoryInterface, clock: BankClock, statementPrinter: StatementPrinter) {
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
        this.transactionRepository.all()
    }
}

export default Account;