import * as S from './styles'

export function History() {
  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4].map(() => (
              <tr key="1">
                <td>Nome da tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>Concluído</td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
