import * as S from "./styles"

export function NewCycleForm(){
    return(
        <S.FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <S.TaskInput
          id="task"
          list="task-suggestions"
          placeholder="Dê um nome para o seu projeto"
          {...register('task')}
          disabled={!!activeCycle}
        />

        {/* sugestao para inputs */}
        <datalist id="task-suggestions">
          <option value="Projeto 1" />
        </datalist>

        <label htmlFor="minutesAmount">Vou trabalhar em</label>
        <S.MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="00"
          step={5}
          min={1}
          max={60}
          {...register('minutesAmount', { valueAsNumber: true })}
          disabled={!!activeCycle}
        />
        <span>minutos.</span>
      </S.FormContainer>
    )
}