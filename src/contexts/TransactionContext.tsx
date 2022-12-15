import { createContext, useEffect, useState } from 'react';

interface TransactionProps {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  createdAt: string;
}

interface TransactionsContextProps {
  transactions: TransactionProps[]
}

type TransactionsProviderProp = {
  children: React.ReactNode;
}

export const TransactionContext = createContext({} as TransactionsContextProps);

export const TransactionsProvider = ({ children }: TransactionsProviderProp) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:3333/transactions')
    .then((response) => response.json())
    .then((responseData) => {
      setTransactions(responseData)
    })
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}