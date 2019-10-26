import StatementPrinter from "./statementPrinter";
import BankClock from "./bankClock";
import mock = jest.mock;
import Transaction from "./transaction";
import {MyConsole} from "./myConsole";

describe('StatementPrinter',  () => {
    it('should handle printing of statement',  () => {
        const MockConsole = jest.fn<MyConsole, []>(() => ({
            printLine: jest.fn()
        }));

        const mconsole = new MockConsole();

        const MockClock = jest.fn<BankClock, []>(() => ({
            now: jest.fn(() => new Date(Date.UTC(2019, 9, 24)))
        }));
        const mockClock = new MockClock();

        const statementPrinter = new StatementPrinter(mconsole);
        const transactions = [new Transaction(-100, mockClock.now()), new Transaction(100, mockClock.now())];

        statementPrinter.print(transactions);

        expect(mconsole.printLine).toBeCalledWith("DATE | AMOUNT | BALANCE");

    });
});