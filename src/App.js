import './App.css';
import Button from './components/UI/Button';

function App() {

    return (
        <div className='App'>
            <div className='Header'>
                <div className='Logo'>
                    <img className='Image' src='/NSAT.svg' alt=''/>
                </div>

                <div className='Navigation'>
                    <Button title='LOG IN'/>
                </div>
            </div>

            <div className='MainBody'>
                <div className='Globe'>

                </div>
                <div className='Search'>

                </div>
            </div>
        </div>
    );
}

export default App;