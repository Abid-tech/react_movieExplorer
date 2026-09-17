import '../index.css'
import { useState,useEffect } from 'react'


function MovieListing() {
    const [list, setList] = useState([])
    const [loading, setloading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedMovie, setSelectedMovie] = useState(null)


    const openModal = (movie) => setSelectedMovie(movie)
    const closeModal = () => setSelectedMovie(null)

    const fetchMovies = async () => {
        try {
            const response = await fetch('https://api.tvmaze.com/shows');  
            const data = await response.json()

            if (response.ok) {
                const visibleMovies = data.slice(0, 50)
                console.log('Fetched movies:', visibleMovies)
                setList(visibleMovies)
            }
        }catch (error) {
            console.error('Error fetching movies:', error);
        }finally{
            setloading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const searchMovies = async (e) => {
            e.preventDefault()
            const query = searchQuery.trim()
            if (query === '') {
                fetchMovies()
                return
            }
            try{
                const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
                const data = await response.json()
                console.log('Search results:', data)
                setList(data.map((item) => item.show))
                // setList(data.show || [])
            } catch (error) {
                console.error('Error searching movies:', error)
            }
        }

    

    return (
        <section id="movie-listing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="movie-search">
                                <form onSubmit={searchMovies}>
                                    <div className="row g-3">

                                        <div className="col-lg-10">
                                            <input
                                                className="form-control"
                                                type="search"
                                                placeholder="Search for movies..."
                                                aria-label="Search"
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-lg-2">
                                            <button
                                                className="btn btn-primary w-100"
                                                type="submit"
                                            >
                                                Search
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
                
                <div className="row g-4">
                        {list.map((movie) => (

                            <div
                                className="col-sm-6 col-md-4 col-lg-3"
                                key={movie.id}
                            >
                                <div className="card movie-card">

                                    <img
                                        src={movie.image?.medium || ''}
                                        className="card-img-top movie-image"
                                        alt={movie.name}
                                    />

                                    <div className="card-body">

                                        <h5 className="card-title">
                                            {movie.name}
                                        </h5>

                                        <p className="card-text">
                                            ⭐ Rating : {movie.rating?.average || 'N/A'}
                                        </p>

                                        <p className="card-text">
                                            📅 Premiered : {movie.premiered || 'N/A'}
                                        </p>

                                        <a
                                            className="btn btn-primary"
                                            onClick={() => openModal(movie)}
                                        >
                                            See details
                                        </a>

                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
               </div>



            {selectedMovie && (
                <>
                    {/* Backdrop */}
                    <div
                        className="modal-backdrop fade show"
                        onClick={closeModal}
                    ></div>

                    {/* Modal */}
                    <div
                        className="modal fade show d-block movie-modal"
                        tabIndex="-1"
                        role="dialog"
                        onClick={closeModal}
                    >
                        <div
                            className="modal-dialog modal-dialog-centered"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-content movie-modal-content">

                                {/* Header */}
                                <div className="modal-header movie-modal-header">
                                    <h5 className="modal-title">
                                        {selectedMovie.name}
                                    </h5>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={closeModal}
                                    ></button>
                                </div>

                                {/* Body */}
                                <div className="modal-body movie-modal-body">

                                    {/* Movie Image */}
                                    {selectedMovie.image?.original && (
                                        <div className="movie-modal-image-wrapper">
                                            <img
                                                src={selectedMovie.image.original}
                                                className="movie-modal-image"
                                                alt={selectedMovie.name}
                                            />
                                        </div>
                                    )}

                                    {/* Movie Information */}
                                    <div className="movie-modal-info">

                                        <div className="movie-meta">
                                            <span>
                                                ⭐ {selectedMovie.rating?.average ?? 'N/A'}
                                            </span>

                                            <span>
                                                📅 {selectedMovie.premiered ?? 'N/A'}
                                            </span>
                                        </div>

                                        <p>
                                            <strong>Genres:</strong>{' '}
                                            {selectedMovie.genres?.length
                                                ? selectedMovie.genres.join(', ')
                                                : 'N/A'}
                                        </p>

                                        <p>
                                            <strong>Language:</strong>{' '}
                                            {selectedMovie.language || 'N/A'}
                                        </p>

                                        <p>
                                            <strong>Status:</strong>{' '}
                                            {selectedMovie.status || 'N/A'}
                                        </p>

                                        <h6>Overview</h6>

                                        {selectedMovie.summary ? (
                                            <div
                                                className="movie-summary"
                                                dangerouslySetInnerHTML={{
                                                    __html: selectedMovie.summary
                                                }}
                                            />
                                        ) : (
                                            <p>No summary available.</p>
                                        )}

                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="modal-footer movie-modal-footer">
                                    <button
                                        type="button"
                                        className="movie-close-btn"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}

        </section>
    
    )
}   


export default MovieListing