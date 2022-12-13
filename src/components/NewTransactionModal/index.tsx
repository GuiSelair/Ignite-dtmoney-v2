import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

import { Content, Overlay, Form, CloseButton } from './styles';

export default function NewTransactionModal() {
  return (
    <Dialog.Portal>
        <Overlay/>
        <Content>
            <Dialog.Close asChild>
              <CloseButton>
                <X />
              </CloseButton>
            </Dialog.Close>
            <Dialog.Title>Nova Transação</Dialog.Title>

            <Form action="">
                <input type="text" name="description" id="description" placeholder='Descrição' />
                <input type="number" name="price" id="price" placeholder='Preço' />
                <input type="text" name="category" id="category" placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Form>

        </Content>
    </Dialog.Portal>
  )
}
