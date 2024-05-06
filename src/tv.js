import { Component } from "react";
import axios from "axios";

export default class TV extends Component {


    state = { tv: [] }
    async componentDidMount() {
        let x = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=52bbcddeda849047525b51d6f8a12361')
        console.log(x.data.results)
        this.setState({ tv: x.data.results })
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
                        <h3>Treding <br />TV<br />to watch now</h3>
                        <p className="secondcolor">most watched tv by weeks</p>
                        <div className="brd w-100"></div>
                    </div>
                    {
                        this.state.tv.map((value, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                                    <img src={"https://image.tmdb.org/t/p/original" + value.poster_path} className="w-100 rounded" />
                                    <p className="pt-2 mb-1">{value.name}</p>
                                    <span>Data: {value.first_air_date}</span>
                                    <p className="">{value.vote_average}</p>
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