import Transaction from "./transaction";

interface TransactionRepositoryInterface {

    add(transaction: Transaction): void;

    all(): Array<Transaction>;
}

export default TransactionRepositoryInterface;
