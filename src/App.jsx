import './App.css'
import Header from "./components/Header/Header.jsx";
import Intro from "./components/Intro/Intro.jsx";
function App(props) {

  const txt = {
    text:"Жакшыраак жана ыңгайлуу болуп калган Autoline жаңы веб-сайтына кош келиңиз! Аны түзүүдө биз бардык суроолорго жооп табуу үчүн бардык заманбап тенденцияларды жана технологияларды эске алдык.",
  }
  
  return (
    <div className="App">
      <Header/>
      <Intro title={txt}/>
    </div>
  )
}

export default App
