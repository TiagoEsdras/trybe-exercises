import React from 'react';
import { connect } from 'react-redux';
import selectedMovie from '../actions/movieAction';

class Sidebar extends React.Component {
  render() {
    const { categories, selectedMovie } = this.props;
    return (
      <aside>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <h3>{ category.name }</h3>
              <ul>
                {
                  category.movies.map((movie) => (
                    <li key={ movie.id }>
                      { movie.title }
                      {' '}
                      was release in
                      {' '}
                      { movie.release }
                      <button type="button" onCick={() => selectedMovie(category, movie)}>Selecionar</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.movieReducer.categories,
});

const mapDispatchToProps = { selectedMovie };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
