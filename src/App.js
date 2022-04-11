import './App.css';
import './index.js';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = (props) => {
  // console.log(props.state.profileState)
  // debugger;
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar />
        <div className="appWrapperContent">
          <Routes>
            <Route path='/profile' element={< Profile
            store={props.store}
            dispatch={props.dispatch}
            />}/>
            <Route path='/dialogs' element={< DialogsContainer store={props.store} />} />
            <Route path='/News' element={< News/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
