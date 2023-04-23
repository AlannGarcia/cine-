import { useNavigate } from "react-router-dom"

const Movie = ({movieX}) => {  
  
  const navigate = useNavigate();
    return (

        <div onClick = {()=> navigate(`/movie/${movieX.id}`)} className="card song m-2 shadow-sm">
                      <img src={movieX.poster} className="card-image" alt="..."  />
                      <div className="card-body">
                      <h6 className="card-title">{movieX.title}</h6>
                        <p className="card-text">{movieX.description}</p>
                      </div>
        </div>
    )
}