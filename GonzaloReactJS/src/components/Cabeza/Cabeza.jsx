import CartWidget from '../CartWidget/CartWidget'

const Cabeza = () => {
    return(
            
<div data-aos="fade-down">
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a href="../inicio.html"/>
                <img src="../img/logo.png" alt="Logo" class="icono"/>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                  <li class="nav-item">
                    <a class="nav-link" href="/index.html">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/pages/productos.html">Productos</a>
                  </li>

                  <div class="carritoheader">
                  <CartWidget/>
                  </div>
                  
                  
                </ul>
              </div>
            </div>
        </nav>
    </header>
</div>
    )
}

export default Cabeza