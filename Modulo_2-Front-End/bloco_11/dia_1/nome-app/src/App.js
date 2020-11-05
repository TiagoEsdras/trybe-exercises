import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Ajustar a Energia', 'Inspecionar Amostra', 'Enviar Scan', 'Esvaziar o Lixo',
'Reativar Escudos', 'Limpar o Filtro do 02', 'Ligar Reator'];
function App() {
  return ( 
    tasks.map(tarefa => <ul> { task(tarefa) }</ul>)
  );
}

export default App;
