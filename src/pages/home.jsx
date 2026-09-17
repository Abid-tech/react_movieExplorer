import '../index.css'
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate()
    return (
        <>
            <section className="home">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-7">
                            <div className="home-content">

                                <p className="home-subtitle">
                                    MOVIES <span>•</span> REVIEWS <span>•</span> MORE
                                </p>

                                <h1 className="home-title">
                                    Discover <span>Movies</span>
                                    <br />
                                    You’ll Love
                                </h1>

                                <p className="home-description">
                                    Explore and discover your favorite movies
                                    <br className="d-none d-md-block" />
                                    from around the world.
                                </p>

                                <button className="explore-btn" onClick={()=> navigate('/movie-listing')}>
                                    <span className="arrow">→</span>
                                    <span>Explore Now</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home