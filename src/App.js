import './App.css';
import './index.js';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar />
        <div className="appWrapperContent">
          <Routes>
            <Route path='/profile' element={< Profile state={props.state.profileState}/>}/>
            <Route path='/dialogs' element={< Dialogs dataMessages={props.state.messagesState.dataMessages} dialogsData={props.state.messagesState.dialogsData} />} />
            <Route path='/News' element={< News responseAPI={props.state.responseAPI} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
