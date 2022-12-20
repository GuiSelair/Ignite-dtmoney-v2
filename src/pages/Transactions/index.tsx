import { useContextSelector } from 'use-context-selector'
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import { priceFormatter, dateFormatter } from '../../helpers/formatters'
import SearchForm from './components/SearchForm'

import {
  PriceHightlight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export default function Transactions() {
  const transactions = useContextSelector(
    TransactionContext,
    (context) => context.transactions,
  )

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions?.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHightlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHightlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
