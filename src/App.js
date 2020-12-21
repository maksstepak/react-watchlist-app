import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site">
      <div className="container is-max-desktop">
        <Header />
        <main className="site__content">
          <section className="section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              in quam vel arcu imperdiet consequat et a tortor. Proin non
              euismod dolor. Curabitur risus arcu, ornare et sodales consequat,
              rutrum non sapien. Aliquam enim sapien, convallis id consectetur
              vitae, fringilla eget diam. In turpis est, semper in pharetra nec,
              laoreet ut nibh. Proin vel luctus felis, ac porttitor ex. Aenean
              maximus vulputate mauris, ut ornare nisi interdum eget. Mauris
              tristique, augue ac euismod venenatis, lorem nibh consectetur
              metus, et gravida purus nisl ut erat.
            </p>
          </section>
          <section className="section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              in quam vel arcu imperdiet consequat et a tortor. Proin non
              euismod dolor. Curabitur risus arcu, ornare et sodales consequat,
              rutrum non sapien. Aliquam enim sapien, convallis id consectetur
              vitae, fringilla eget diam. In turpis est, semper in pharetra nec,
              laoreet ut nibh. Proin vel luctus felis, ac porttitor ex. Aenean
              maximus vulputate mauris, ut ornare nisi interdum eget. Mauris
              tristique, augue ac euismod venenatis, lorem nibh consectetur
              metus, et gravida purus nisl ut erat.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
