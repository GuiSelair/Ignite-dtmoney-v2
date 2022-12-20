import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Content, Overlay, Form, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { useContext, useState } from 'react';
import { TransactionContext } from '../../contexts/TransactionContext';

const newTransactionSchema = z.object({
  description: z.string().min(3).max(100),
  price: z.number(),
  category: z.string().min(5).max(100),
  type: z.enum(['income', 'outcome'])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>;

export default function NewTransactionModal({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit, formState: { isSubmitting }, control, reset } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema)
  });
  const { createTransaction } = useContext(TransactionContext);

  const handleCreateTransaction = async (data: NewTransactionFormInputs) => {
    await createTransaction(data);
    reset();
    onClose();
  }

  return (
    <Dialog.Portal>
        <Overlay/>
        <Content>
            <Dialog.Close asChild>
              <CloseButton>
                <X size={24}/>
              </CloseButton>
            </Dialog.Close>
            <Dialog.Title>Nova Transação</Dialog.Title>

            <Form onSubmit={handleSubmit(handleCreateTransaction)}>
                <input type="text" id="description" placeholder='Descrição' {...register('description')} />
                <input type="number" id="price" placeholder='Preço' {...register('price', { valueAsNumber: true })} />
                <input type="text" id="category" placeholder='Categoria' {...register('category')} />

                <Controller
                  name='type'
                  control={control}
                  render={({ field }) => (
                    <TransactionType onValueChange={field.onChange} value={field.value}>
                      <TransactionTypeButton value='income' variant='income'>
                        <ArrowCircleUp size={24}/>
                        Entrada
                      </TransactionTypeButton>

                      <TransactionTypeButton value='outcome' variant='outcome'>
                        <ArrowCircleDown size={24}/>
                        Saída
                      </TransactionTypeButton>
                    </TransactionType>
                  )}
                />
                

                <button type="submit" disabled={isSubmitting}>Cadastrar</button>
            </Form>

        </Content>
    </Dialog.Portal>
  )
}
