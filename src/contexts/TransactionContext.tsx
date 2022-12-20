import React, { createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionsContextProps {
  transactions: TransactionProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (
    data: Omit<TransactionProps, 'id' | 'createdAt'>,
  ) => Promise<void>
}

type TransactionsProviderProp = {
  children: React.ReactNode
}

export const TransactionContext = createContext({} as TransactionsContextProps)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProp) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  const createTransaction = async (
    data: Omit<TransactionProps, 'id' | 'createdAt'>,
  ) => {
    const newTransaction = await api.post<TransactionProps>('transactions', {
      description: data.description,
      price: data.price,
      category: data.category,
      type: data.type,
      createdAt: new Date(),
    })

    setTransactions((old) => [newTransaction.data, ...old])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
