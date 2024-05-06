import { Component } from "react";
import axios from "axios";

export default class Movies extends Component {

    // movies = [{id:1, title: "Home Alone", imgPath: "https://lumiere-a.akamaihd.net/v1/images/homealone2_7706aa6d.jpeg?region=0%2C0%2C584%2C876"},
    // {id:2, title: "Home Alone", imgPath:"https://lumiere-a.akamaihd.net/v1/images/homealone2_7706aa6d.jpeg?region=0%2C0%2C584%2C876"},
    // {id:3, title: "Home Alone", imgPath:"https://lumiere-a.akamaihd.net/v1/images/homealone2_7706aa6d.jpeg?region=0%2C0%2C584%2C876"},
    // {id:4, title: "Home Alone", imgPath:"https://lumiere-a.akamaihd.net/v1/images/homealone2_7706aa6d.jpeg?region=0%2C0%2C584%2C876"},
    // {id:5, title: "Home Alone", imgPath:"https://lumiere-a.akamaihd.net/v1/images/homealone2_7706aa6d.jpeg?region=0%2C0%2C584%2C876"},
    // {id:6, title: "Home Alone", imgPath:"https://lumiere-a.akamaihd.net/v1/images/homealone2_7706aa6d.jpeg?region=0%2C0%2C584%2C876"},
    // {id:7, title: "Home Alone", imgPath:"https://lumiere-a.akamaihd.net/v1/images/homealone2_7706aa6d.jpeg?region=0%2C0%2C584%2C876"},
    // {id:8, title: "Home Alone", imgPath:"https://lumiere-a.akamaihd.net/v1/images/homealone2_7706aa6d.jpeg?region=0%2C0%2C584%2C876"}
    // ]


    state = { movies: [] }
    async componentDidMount() {
        let x = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361')
        console.log(x.data.results)
        this.setState({ movies: x.data.results })
    }

    renderStarRating(voteAverage) {
        const fullStars = Math.floor(voteAverage);
        const halfStar = voteAverage % 1 !== 0;
        let stars = [];

        // Full stars
        for (let i = 3; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fa fa-star vote"></i>);
        }

        // Half star
        if (halfStar) {
            stars.push(<i key="half" className="fa fa-star-half-stroke vote"></i>);
        }

        // Empty stars
        for (let i = fullStars + halfStar; i < 5; i++) {
            stars.push(<i key={`empty-${i}`} className="fa fa-star-o"></i>);
        }

        return stars;
    }

    render() {



        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-12">
                        <div className="brd w-50"></div>
                        <h3>Treding <br />Movies<br />to watch now</h3>
                        <p className="secondcolor">most watched movies by weeks</p>
                        <div className="brd w-100"></div>
                        <div id="star-rating"></div>
                    </div>
                    {

                        this.state.movies.map((value, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                                    <div className="overlay">
                                        <h5 className="text-center">{value.title}</h5>
                                        <p><span className="fw-semibold">Description: </span>{value.overview}</p>
                                        <p><span className="fw-semibold">Language: </span>{value.original_language}</p>
                                        <p><span className="fw-semibold">Media type: </span>{value.media_type}</p>
                                        <p><span className="fw-semibold">Data: </span>{value.release_date}</p>
                                        <p><span className="fw-semibold">Rate: </span>{value.vote_average}</p>
                                    </div>
                                        <img src={"https://image.tmdb.org/t/p/original" + value.poster_path} className="w-100 rounded" />
                                        <p className="pt-2 mb-1">{value.title}</p>
                                        <span>Data: {value.release_date}</span>
                                        <div className="star-rating">
                                            {this.renderStarRating(value.vote_average)}
                                            <span className="float-end">{value.vote_average}</span>
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    }
}