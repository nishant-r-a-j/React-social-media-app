import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import Postlist from './components/Postlist'
import Postlistprovider from './store/post-liststore'

function App() {
  const [selectedtab,setselectedtab]=useState('Home')

  return <Postlistprovider>
    <div className='app-container'>
    <Sidebar selectedtab={selectedtab}  setselectedtab={setselectedtab} />
    <div className='content'>
    <Header/>
    {selectedtab ==='Home'? <Postlist/>: <CreatePost/>}
   
    
    {/* <Footer/> */}
    </div>
    </div>
   </Postlistprovider>
}

export default App
