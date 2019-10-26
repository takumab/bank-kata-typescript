import Transaction from "./transaction";
import TransactionRepositoryInterface from "./transactionRepositoryInterface";

class TransactionRepository implements TransactionRepositoryInterface {
    private transactionList: Array<Transaction>  = [];

    add(transaction: Transaction): void {
        this.transactionList.push(transaction);
    }

    all(): Array<Transaction> {
        return this.transactionList;
    }
}

export default TransactionRepository;