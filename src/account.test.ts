import Account from './account';
import Transaction from "./transaction";
import BankClock from "./bankClock";
import TransactionRepositoryInterface from "./transactionRepositoryInterface";
import {StatementPrinterInterface} from "./statementPrinterInterface";

describe('Account', () => {
    const transaction1 = new Transaction(100, new Date(Date.UTC(2019, 9, 23)));
    const transaction2 = new Transaction(-100, new Date(Date.UTC(2019, 9, 24)));

    const MockTransactionRepository = jest.fn<TransactionRepositoryInterface, []>(() =>({
        add: jest.fn(),
        all: jest.fn(() => [transaction1, transaction2])
    }));

    const mockTransactionRepository = new MockTransactionRepository();
    const MockStatementPrinter = jest.fn<StatementPrinterInterface, []>(() => ({
        print: jest.fn()
    }));
    const mockStatementPrinter = new MockStatementPrinter();

    it('should make a deposit', () => {
        const MockClock = jest.fn<BankClock, []>(() => ({
            now: jest.fn(() => new Date(Date.UTC(2019, 9, 23))),
        }));
        const mockClock = new MockClock();
        const account = new Account(mockTransactionRepository, mockClock, mockStatementPrinter);

        account.deposit(100 );

        expect(mockTransactionRepository.add).toBeCalledWith(transaction1);
    });

    it('should make a withdrawal', () => {
        const MockClock = jest.fn<BankClock, []>(() => ({
            now: jest.fn(() => new Date(Date.UTC(2019, 9, 24))),
        }));
        const mockClock = new MockClock();
        const account = new Account(mockTransactionRepository, mockClock, mockStatementPrinter);


        account.withdraw(-100);
        const transaction = new Transaction(-100, mockClock.now());

        expect(mockTransactionRepository.add).toBeCalledWith(transaction);
    });

    it('should print statement', function () {
        const MockClock = jest.fn<BankClock, []>(() => ({now: jest.fn()}));

        const account = new Account(mockTransactionRepository, new MockClock(), mockStatementPrinter);
        const allTransactions = [transaction1, transaction2];

        account.printStatement();

        expect(mockStatementPrinter.print).toBeCalledWith(allTransactions);
    });
});