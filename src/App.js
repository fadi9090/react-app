import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;