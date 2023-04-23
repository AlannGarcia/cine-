import Movie from "./Movie.js"

const MoviesList = ({movies = []}) => {
    return (
        <div>
            <div className="card-group">
                  {movies.map(m => (
                      <Movie key ={m.id} movieX = {m}/>
                  ))}
            </div>
        </div>
    )
}
export default MoviesList;