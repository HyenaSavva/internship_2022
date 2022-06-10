import './style/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import CardList from "./CardList";
import Modal from "./Modal";
import {useState} from "react";


function App() {
    const [active, setActive] = useState([false])



    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={
                        <div className="main">
                            <Header/>
                            <div className="flexBox">
                                <Modal setActive={setActive} active={active}/>
                                <CardList setActive={setActive} active={active}/>
                            </div>
                            <Footer/>
                        </div>
                    }>
                    </Route>

                    <Route path='/about-us' element={
                        <div className="main">
                            <Header/>
                            <div className="flexBox">
                                <About/>
                            </div>
                            <Footer/>
                        </div>
                    }>
                    </Route>

                    <Route path='/contact' element={
                        <div className="main">
                            <Header/>
                            <div className="flexBox">
                                <Contact/>
                            </div>
                            <Footer/>
                        </div>
                    }>
                    </Route>

                </Routes>
            </Router>
        </div>
    );
}

export default App;
