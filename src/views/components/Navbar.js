let NavBar = {
  render: async () => {
    let view = `
      <nav>
        <div>
          <h1>Cabeçário</h1>
        </div>
      </nav>
    `
    return view
  },
  after_render: async () => {
    console.log('Navbar!')
  }
}

export default NavBar