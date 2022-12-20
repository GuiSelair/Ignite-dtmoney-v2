import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import logo from '../../assets/logo.svg'
import NewTransactionModal from '../NewTransactionModal'
import { Container, Content, NewTransactionButton } from './styles'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal onClose={() => setOpen(false)} />
        </Dialog.Root>
      </Content>
    </Container>
  )
}
