import axios from 'axios';

let Contact = {
  render: async () => {
    let view = `
      <div>
        <h2>Entre em contato</h2>
        <div>
          <input type="text" placeholder="Informe seu nome" id="name">
          <input type="text" placeholder="Informe seu email" id="email">
          <input type="text" placeholder="Informe seu telefone" id="phone">
          <button id="submitDataForm"> clique aqui para enviar <button>
        </div>
      </div>
    `;
    return view
  },
  after_render: async () => {
    document.getElementById('submitDataForm')
    .addEventListener('click', () => {
      let name = document.getElementById('name').value,
          email = document.getElementById('email').value,
          phone = document.getElementById('phone').value

      axios.post('https://webhook.site/4c639737-c1c9-488d-a085-013d2a26e614', {
        name,
        email,
        phone
      }).then(
        response => {
          if (response.status === 200 || 201){
            alert('Requisição realizada com sucesso!')
            window.open('https://google.com/')
          }
        }
      )
    })
  }
}

export default Contact