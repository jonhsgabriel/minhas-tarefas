import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefa from '../../containers/ListaDeTarefa'

const Home = () => (
  <>
    <BarraLateral mostraFiltros />
    <ListaDeTarefa />
    <BotaoAdicionar />
  </>
)

export default Home
