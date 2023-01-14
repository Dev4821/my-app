
import './App.css';
import Navbar from './myComponent/Navbar';
import TextForm from './myComponent/TextForm';

function App() {
  return (
    < >
      <Navbar title ="Text Changer" about="About Us"/>
      <div className='container my-3'>
        <TextForm heading="Write your text"/>
      </div>
      

    </>
  );
}

export default App;
