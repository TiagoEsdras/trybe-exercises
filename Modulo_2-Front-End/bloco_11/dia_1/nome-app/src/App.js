import './App.css';

const task = (value, index) => {
  return (
    <li key={index}>{value}</li>
  );
}

const tasks = ['Ajustar a Energia', 'Inspecionar Amostra', 'Enviar Scan', 'Esvaziar o Lixo',
'Reativar Escudos', 'Limpar o Filtro do 02', 'Ligar Reator'];
function App() {
  return (
    <ul> 
      {tasks.map((tarefa, index) => task(tarefa, index))}
    </ul>
  );
}

export default App;
