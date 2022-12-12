import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { Container } from './styles'

export default function SearchForm() {
  return (
    <Container>
      <input type="text" placeholder='Busque por transações' />

      <button type='submit'>
          <MagnifyingGlass size={20} />
          Buscar
      </button>
    </Container>
  )
}
