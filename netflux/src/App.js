import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import HomePage from './Pages/HomePage';
import CategoryPage from './Pages/CategoryPage';
import Details from './Pages/Details';
import SearchPage from './Pages/SearchPage';

import data from './data/movies.json';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  state = {
    movies: data
};

  render() {
    return (
      <React.StrictMode>
        <Router>
          <div className="wrapper">
            <div className="container">
              <Header />
                <>
                  <Routes>
                    <Route
                      exact
                      path="/"
                      element={<HomePage
                        movies = {this.state.movies}
                      />}
                    />
                    <Route
                      exact
                      path="/Movies"
                      element={<CategoryPage
                        movies = {this.state.movies}
                        type = "Film"
                        typeText = "الافلام"
                        optionText= "نوع الفيلم"
                      />}
                    />
                    <Route
                      exact
                      path="/Shows"
                      element={<CategoryPage
                        movies = {this.state.movies}
                        type = "Shows"
                        typeText = "المسلسلات"
                        optionText= "نوع المسلسل"
                      />}
                    />
                    <Route
                      exact
                      path="/details/:id"
                      element={<Details
                        movies = {this.state.movies}
                      />}
                    />
                    <Route
                      exact
                      path ="/search"
                      element={<SearchPage 
                        movies={this.state.movies}
                      />}
                    />
                  </Routes>
                </>
              <Footer />
            </div>
          </div>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;