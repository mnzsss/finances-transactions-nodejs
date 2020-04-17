import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const reducer = (accumulator = 0, currentValue = 0): number =>
      accumulator + currentValue;

    const incomeArr = this.transactions.map(transaction =>
      transaction.type === 'income' ? transaction.value : 0,
    );
    const income = incomeArr.length > 0 ? incomeArr.reduce(reducer) : 0;

    const outcomeArr = this.transactions.map(transaction =>
      transaction.type === 'outcome' ? transaction.value : 0,
    );
    const outcome = outcomeArr.length > 0 ? outcomeArr.reduce(reducer) : 0;

    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
