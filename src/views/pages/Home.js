import BitcoinLogo from '../../img/logos/Bitcoin-Logo.png';
import NavBar from '../components/Navbar';
import FooterComponent from '../components/Footer';


let Home = {
  render: async () => {
    let Navigation = await NavBar.render()
    let view = `
      ${Navigation}
        <div>
          <h1>Home</h1>
          <div>
            <img src="${BitcoinLogo}" alt="Logo Bitcoin" class="logo"/>
            <button id="testFunc">Clique aqui</button>
            <a href="/#/contato">Entrar em contato</a>
          </div>
        </div>
      ${FooterComponent}
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