import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { priceFormatter } from '../../helpers/formatters';
import { useSummary } from '../../hooks/useSummary';

import { Container, SummaryCard } from "./styles";

export default function Summary() {
  const { summary } = useSummary()

  return (
    <Container>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ {priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ {summary.outcome}</strong>
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </header>
        <strong>R$ {summary.total}</strong>
      </SummaryCard>
    </Container>
  )
}
