import Header from './components/Header';
import Footer from './components/Footer';
import NewMovieForm from './components/NewMovieForm';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="site">
      <div className="site__content">
        <div className="container is-max-desktop">
          <Header />
          <main>
            <section className="p-2">
              <NewMovieForm />
            </section>
            <section className="p-2">
              <MovieList />
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
