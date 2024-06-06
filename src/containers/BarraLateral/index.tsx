import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'

type Props = {
  mostraFiltros: boolean
}
const BarraLateral = ({ mostraFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      {mostraFiltros ? (
        <>
          <Campo
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
          />
          <S.Filtros>
            <FiltroCard
              valor={enums.Status.PENDENTE}
              criterio="status"
              legenda="pendentes"
            />
            <FiltroCard
              valor={enums.Status.CONCLUIDA}
              criterio="status"
              legenda="concluídas"
            />
            <FiltroCard
              valor={enums.Prioridade.URGENTE}
              criterio="prioridade"
              legenda="urgentes"
            />
            <FiltroCard
              valor={enums.Prioridade.IMPORTANTE}
              criterio="prioridade"
              legenda="importantes"
            />
            <FiltroCard
              valor={enums.Prioridade.NORMAL}
              criterio="prioridade"
              legenda="normal"
            />
            <FiltroCard
              valor={enums.Prioridade.NORMAL}
              criterio="todas"
              legenda="todas"
            />
          </S.Filtros>
        </>
      ) : (
        <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
