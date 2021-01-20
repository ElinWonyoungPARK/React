import './App.css';
/* import Hello from './hello/Hello' */
import Calculator from './calc/Calculator'
import NumberProvider from './calc/NumberProvider' 

const App = () => (<NumberProvider><Calculator/></NumberProvider>)

/* const App = () => (<Hello/>) */

export default App;