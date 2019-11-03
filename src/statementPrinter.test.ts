import StatementPrinter from "./statementPrinter";
import Transaction from "./transaction";
import MyConsole from "./myConsole";

describe('StatementPrinter',  () => {
    it('should handle printing of statement',  () => {
        const MockConsole = jest.fn<MyConsole, []>(() => ({
            printLine: jest.fn()
        }));
        const mconsole = new MockConsole();

        const statementPrinter = new StatementPrinter(mconsole);
        const transactions = [
            new Transaction(1000, new Date(Date.UTC(2014, 3, 1))),
            new Transaction(-100, new Date(Date.UTC(2014, 3, 2))),
            new Transaction(500, new Date(Date.UTC(2014, 3, 10))),
        ];

        statementPrinter.print(transactions);

        expect(mconsole.printLine).toBeCalledWith("DATE | AMOUNT | BALANCE");
        expect(mconsole.printLine).toBeCalledWith("10/04/2014 | 500 | 1400");
        expect(mconsole.printLine).toBeCalledWith("02/04/2014 | -100 | 900");
        expect(mconsole.printLine).toBeCalledWith("01/04/2014 | 1000 | 1000");

    });
});