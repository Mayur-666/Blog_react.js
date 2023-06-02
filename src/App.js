import Topbar from './components/TopBar/Topbar';
import Settings from './components/pages/settings/Settings';
import Home from './components/pages/home/Home';
import Single from './components/pages/single/Single';
import Write from './components/pages/write/Write';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';


function App() {
    const user = false;
    return(
        <Router>
            <Topbar userf={user}/>
            <Routes>

                <Route exact path='/' element={<Home />} />
                <Route exact path='/register' element={user ? <Home /> : <Register />} />
                <Route exact path='/login' element={user ? <Home /> : <Login />} />
                <Route exact path='/settings' element={user ? <Settings /> : <Register />} />
                <Route exact path='/post/:postId' element={<Single />} />
                <Route exact path='/write' element={user ? <Write /> : <Register />} />
                
            </Routes>
        </Router>
        
    );
}
export default App;