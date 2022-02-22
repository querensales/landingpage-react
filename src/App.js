import './App.css'

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>QuerenSales.Dev</h3>
            </div>
            <div className="item-menu">
              <a href="#">Login</a>
            </div>
          </div>

          <div className="form">
            <h2>Entre em Contato!</h2>
            <form>
              <div className="items-form">
                <input placeholder="Nome" type="text" />
                <input placeholder="Sobrenome" type="text" />
                <input placeholder="(xx) xxxxx-xxxx" type="text" />
                <input placeholder="Email" type="text" />
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="conteudo">
        <div className="center">
          <div className="conteudo-single">
            <h3>Landing page</h3>
            <p>Desenvolvida em react! Para adquirir conhecimento.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
