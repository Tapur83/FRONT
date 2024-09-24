import Navigation from './navigation'
import Header from './Header'
import './App.css'
import Articles from './Articles'
import Tutorials from './tutorials'
import Subscribe from './subscribe'
import Footer from './footer'

function App() {
  return (
   <div>
   <Navigation/>
   <Header/>
   <Articles/>
   <Tutorials/>
   <Subscribe/>
   <Footer/>
   </div>
  );
}

export default App;
