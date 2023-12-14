import { Play } from 'phosphor-react'
import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <form action="">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">Vou trabalhar em</label>
          <input id="minutesAmount" type="number" />
          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <button type="submit">
          <Play size={24} /> Começar
        </button>
      </form>
    </S.HomeContainer>
  )
}
