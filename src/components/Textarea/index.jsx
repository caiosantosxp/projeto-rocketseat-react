import { Container } from './styles'

export function Texteare({value, ...rest}){
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}