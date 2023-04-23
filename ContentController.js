const system = requiere ('import com.github.unqUi.model.getRottenTomatoesSystem');
const context = requiere ('import io.javalin.http.Context');

class ContentController {
    
    constructor (system,context) {
        new ContentController(system,context);
    };
    //Devuelve las 10 películas con mejor score
    getTop() {
        let primeras = 10
        let orderedMovies = scoredMovies(system.movies)
        topMovies = orderedMovies.subList(0, primeras).map(ApiMovieAdapter(movie.id, movie.title, movie.description, movie.poster, movie.categories, getScore(movie)));
        context.json(mapOf("result", topMovies));
        return topMovies;
    };
}

/*
    //Devuelve las 10 últimas peliculas agregadas en la lista de movies
    fun getLatest(ctx: Context) {
        val ultimas = 10
        val lastMovies = system.movies.subList(system.movies.size - ultimas, system.movies.size).map { movie ->
            ApiMovieAdapter(
                movie.id, movie.title, movie.description, movie.poster, movie.categories,
                getScore(movie)
            )
        }
        ctx.json(mapOf("result" to lastMovies))
    }
    fun getContentById(ctx: Context) {
        val id = ctx.pathParam("id")
        val movie: Movie? = system.movies.find { movie -> movie.id == id }
        if (movie != null) {
            val movAdp = ApiMovieAdapterById(
                movie.id,
                movie.title,
                movie.description,
                movie.poster,
                movie.categories,
                getScore(movie),
                getRelatedContentAdapter(movie),
                getReviewsAdapter(movie)
            )
            ctx.json(movAdp)
        } else {
            ctx.status(404)
            ctx.json(ErrorDTO("No existe pelicula con id: $id"))
        }

    }
    private fun getUserIdContext(ctx: Context):String{
        return ctx.attribute<String>("id")?:throw UserError("not  found  user")
    }

    fun pushReview(ctx: Context){
        val userHCD= system.getUserById(getUserIdContext(ctx)) //Debera, ser jania u_1
        val movId= ctx.pathParam("id") //El id corresponde a la pelicula que quiero calificar
        val dataBodyReview = ctx.bodyValidator<DataBodyReview>()
            .check({it.text.isNotBlank()},"El contenido esta vacio")
            .check({it.stars > 0},"Las estrellas no pueden ser menos de 0")
            .check({it.stars <= 5},"Las estrellas no pueden ser mas de 5")
            .get()
        val draftReview= DraftReview(userHCD.id,movId,dataBodyReview.text, dataBodyReview.stars)
        try {
            val addedReview=system.addReview(draftReview)
            //hay que mapear la respuesta al formato pedido
            ctx.json(ApiReviewAdapter(
                addedReview.id,
                UserAdapter(
                    addedReview.user.id,
                    addedReview.user.name,
                    addedReview.user.image,
                    addedReview.user.email),
                ApiMovieAdapter(
                    addedReview.movie.id,
                    addedReview.movie.title,
                    addedReview.movie.description,
                    addedReview.movie.poster,
                    addedReview.movie.categories,
                    getScore(addedReview.movie)),
                addedReview.text,
                addedReview.stars)
                )
        }
        catch (e:UserError){
            ctx.status(404)
            ctx.json(ErrorDTO("No existe el usuario"))
        }
        catch (e:MovieError){
            ctx.status(404)
            ctx.json(ErrorDTO("No existe la pelicula"))
        }
    }
    private fun getReviewsAdapter(movie: Movie):MutableList<ApiReviewAdapter> {
        val review = system.reviews.filter {it.movie.id == movie.id }.toMutableList()
        return review.map{
            ApiReviewAdapter(
                it.id,
                UserAdapter(it.user.id, it.user.name,it.user.image,it.user.email),
                ApiMovieAdapter(it.movie.id,
                    it.movie.title,
                    it.movie.description,
                    it.movie.poster,
                    it.movie.categories,
                    getScore(it.movie)),
                it.text,
                it.stars) }.toMutableList()
    }

    private fun getRelatedContentAdapter(movie: Movie): MutableList<ApiMovieAdapter> {
        return movie.relatedContent.map {
            ApiMovieAdapter(
                it.id,
                it.title,
                it.description,
                it.poster,
                it.categories,
                getScore(it))
        }.toMutableList()
    }

    fun getScore(mov: Movie): Int {
        val movie = MovieReview(mov)
        system.reviews.map { review -> movie.addStars(review) }
        return movie.getAverage()
    }

    private fun scoredMovies(movies: MutableList<Movie>): MutableList<Movie> {
        //ATENCIÓN: devuelve la lista de movies ordenadas por el score,
        //pero lo calcula internamente y no lo devuelve
        return movies.map {ScoredMovie(it, getScore(it)) }.sortedBy { -it.Score }.map { it.movie }
            .toMutableList()
    }
};*/
