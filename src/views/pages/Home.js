import BitcoinLogo from '../../img/logos/Bitcoin-Logo.png'


let Home = {
  render: async () => {
    let view = `
      <div>
        <h1>Home</h1>
        <div>
          <img src="${BitcoinLogo}" alt="Logo Bitcoin" class="logo"/>
          <button id="testFunc">Clique aqui</button>
          <a href="/#/contato">Entrar em contato</a>
        </div>
      </div>
    `
    return view
  },
  after_render: async () => {
    let buttonTest = document.getElementById('testFunc')
    buttonTest.addEventListener('click', () => {
      alert('Funcionou!!!')
    })
  }
}

export default Home;