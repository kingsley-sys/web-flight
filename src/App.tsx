import { useRoutes } from 'react-router-dom'
import route from './routes';

function App() {

  const element = useRoutes(route);

  return (

    <>
      {element}
    </> 
  )
}

export default App
