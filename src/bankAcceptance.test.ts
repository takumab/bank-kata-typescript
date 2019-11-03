import Account from "./account";
import MyConsole from "./myConsole";
import TransactionRepository from "./transactionRepository";
import BankClock from "./bankClock";
import StatementPrinter from "./statementPrinter";

describe('Acceptance Test', () => {
    describe('Bank Account', () => {
        it('should print a bank statement', () => {
            const MockClock = jest.fn<BankClock, []>(() => ({
                now: jest.fn().mockReturnValueOnce(new Date(2014, 5, 1))
                    .mockReturnValueOnce(new Date(2014, 5, 2))
                    .mockReturnValueOnce(new Date(2014, 5, 10))
            }));
            const mockClock = new MockClock();

            const MockConsole = jest.fn<MyConsole, []>(() => ({
                printLine: jest.fn()
            }));
            const mconsole = new MockConsole();

            const account = new Account(new TransactionRepository(), mockClock, new StatementPrinter(mconsole));
            account.deposit(1000);
            account.withdraw(-100);
            account.deposit(500);

            account.printStatement();


            expect(mconsole.printLine).toBeCalledWith("DATE | AMOUNT | BALANCE");
            expect(mconsole.printLine).toBeCalledWith("10/04/2014 | 500 | 1400");
            expect(mconsole.printLine).toBeCalledWith("02/04/2014 | -100 | 900");
            expect(mconsole.printLine).toBeCalledWith("01/04/2014 | 1000 | 1000");
        });
    })
});