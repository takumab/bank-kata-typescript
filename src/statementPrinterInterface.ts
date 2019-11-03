import Transaction from "./transaction";

export interface StatementPrinterInterface {

    print(transactions: Transaction[]): void;

}