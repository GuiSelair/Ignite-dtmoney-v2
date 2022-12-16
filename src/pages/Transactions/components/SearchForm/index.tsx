import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod';

import { Container } from './styles';

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  const handleSearchTransactions = (data: SearchFormInputs) => {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder='Busque por transações' {...register('query')} />

      <button type='submit' disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          Buscar
      </button>
    </Container>
  )
}
