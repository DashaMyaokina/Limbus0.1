import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/widjets/header/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SinersListPage from './pages/siners-list-page'
import SingleIdEgoPage from './pages/single-id-ego-page'
import SingleSinerPage from './pages/single-siner-page'

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/siners-list" element={<SinersListPage/>} />
      <Route path="/siner-id-ego" element={<SingleIdEgoPage/>} />
      <Route path="/siner-page" element={<SingleSinerPage/>} />
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

// TODO Создать в папке components папку для компонента card. Добавить компоненты. Добавить тип, карточка должна принимать title, description,img - эти поля строки
// экспортировать компонент, использовать его в App.tsx, передать туда необходимые параметры

export default App
