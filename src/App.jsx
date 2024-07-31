import './App.css'
import Layout from './componants/Layout';
import{createBrowserRouter,RouterProvider}from'react-router-dom';
import Home from './componants/Home';
import About from './componants/About';
import Contact from './componants/Contact';
import Portfolio from './componants/Portfolio';
import Error from './componants/Error';

const router=createBrowserRouter([{path:'',element:<Layout/>,children:[
{index:true,element:<Home/>},
{path:'home',element:<Home/>},
{path:'about',element:<About/>},
{path:'contact',element:<Contact/>},
{path:'portfolio',element:<Portfolio/>},
{path:'*',element:<Error/>},
]}])

function App() {

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
