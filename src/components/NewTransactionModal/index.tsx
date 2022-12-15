import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import { Content, Overlay, Form, CloseButton, TransactionType, TransactionTypeButton } from './styles';

export default function NewTransactionModal() {
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

            <Form action="">
                <input type="text" name="description" id="description" placeholder='Descrição' />
                <input type="number" name="price" id="price" placeholder='Preço' />
                <input type="text" name="category" id="category" placeholder='Categoria' />

                <TransactionType>
                  <TransactionTypeButton value='income' variant='income'>
                    <ArrowCircleUp size={24}/>
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton value='outcome' variant='outcome'>
                    <ArrowCircleDown size={24}/>
                    Saída
                  </TransactionTypeButton>
                </TransactionType>

                <button type="submit">Cadastrar</button>
            </Form>

        </Content>
    </Dialog.Portal>
  )
}
