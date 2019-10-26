import Account from "./account";
import TransactionRepository from "./transactionRepository";
import BankClock from "./bankClock";
import Transaction from "./transaction";

describe('TransactionRepository', () => {
    it('should add a transaction', () => {
        const transactionRepository = new TransactionRepository();
        const transaction = new Transaction(100, new Date());
        const transaction2 = new Transaction(200, new Date());

        transactionRepository.add(transaction);
        expect(transactionRepository.all()).toEqual([transaction]);

        transactionRepository.add(transaction2);
        expect(transactionRepository.all()).toEqual([transaction, transaction2]);
    });
});