import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <div className="app-background" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`
      }}></div>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;