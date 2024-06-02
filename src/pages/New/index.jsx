import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { Input } from "../../components/Input";
import { Texteare } from "../../components/Textarea";
import { NoItem } from "../../components/NoItem";
import { Section } from '../../components/Section'
import { Button } from "../../components/Button";

export function New(){
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder='Titulo' />
          <Texteare placeholder='Observações' />

          <Section title='Link úteis'>
            <NoItem value='https://rocketseat.com.br'/>
            <NoItem isNew placeholder='Novo link'/>
          </Section>

          <Section title='Marcadores'>
            <div className="tags">
            <NoItem value='react'/>
            <NoItem isNew placeholder='Nova tag'/>
            </div>
          </Section>

          <Button  title='Salvar'/>
        </Form>
      </main>
    </Container>
  )
}