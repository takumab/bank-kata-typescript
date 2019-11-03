class Transaction {
    readonly amount: number;
    readonly date: Date;

    constructor(amount: number, date: Date) {
        this.amount = amount;
        this.date = date;
    }

}

export default Transaction