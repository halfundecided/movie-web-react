import React, { Component } from "react";
import "./App.css";
import Movie from "./components/Movie/Movie.js";

class App extends Component {
  /**
   * Component Lifecycle
   *
   * Render: componentWillMount() -> render() -> componentDidMount()
   *
   * Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
   */

  /* Whenever state changes inside of component, it will render again. */
  componentWillMount() {}

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       greeting: "Hello again!"
  //     });
  //   }, 2000);
  // }
  componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    // setTimeout(() => {
    //   this.setState({
    //     movies: [
    //       // including existing three
    //       // ...this.state.movies,
    //       {
    //         title: "Transpotting",
    //         poster: "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/star-wars-force-awakens-official-poster.jpg"
    //       },
    //       {
    //         title: "Matrix",
    //         poster: "https://en.wikipedia.org/wiki/The_Matrix"
    //       },
    //       {
    //         title: "Full Metal Jacket",
    //         poster: "https://en.wikipedia.org/wiki/Full_Metal_Jacket"
    //       },
    //       {
    //         title: "Oldboy",
    //         poster: "https://en.wikipedia.org/wiki/File:Oldboykoreanposter.jpg"
    //       },
    //       {
    //         title: "Star Wars",
    //         poster:
    //           "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/star-wars-force-awakens-official-poster.jpg"
    //       } 
    //     ]
    //   })
    // }, 1000)
  }

  state = {
  };

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }
  /* All components should have the render function */
  render() {
    return (
      <div className="App">
        {/* {this.state.greeting} */}
        {/* taking movies array and mapping through it  */}
        {/* {this.state.movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })} */}
        {/* do we have movies? if yes, _renderMovies, otherwise 'Loading' */}
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;

/**
 * props: use when we deliver the data to the other components.
 * It flows from parent to children and expressed as immutable value.
 * Parent component로 부터 전달되는 변경 불가능한 고유값.
 */

/**
 * status: the status of component. It changes inside of component. changable after rendering.
 * 만약 status가 변경되면 component는 다시 rendering 되어야 한다. 이는 react의 component life cycle에 따라 진행되는데
 * 상태변경에 따라 rendering을 하기 위해서는 직접 변경하지 않고 setState()함수를 이용해 변경해야한다.
 * rendering 이전의 초기값 설정은 constructor에서 설정한다.
 */
