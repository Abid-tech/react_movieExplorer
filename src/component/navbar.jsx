import '../index.css'
import { useNavigate } from 'react-router'

function Navbar() {
  const navigate = useNavigate()
  return (
    <>
        <section id="navbar">
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <a  onClick={() => navigate('/')} className="navbar-brand" href="#">Movie<span>Explorer</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item nav-btn">
                      <button onClick={() => navigate('/movie-listing')}>Explore Movies</button>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>
      </section>
    </>
  )
}

export default Navbar