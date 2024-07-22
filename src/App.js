import './App.css';
import MyContainer from './components/MyContainer';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Check from './components/Check';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { useState } from 'react'; // this is a hook
import { useTranslation } from 'react-i18next';

function App() {
  const { t , i18n } = useTranslation();
  return (
    <Router>
      <div className="App">
        {/* <ResponsiveAppBar />
        <Menu /> */}
        <Routes>
          <Route path='/' element={
            <>
                <Header />
                <h1>{t("frontPage")}</h1>
                {/* <Test1 info={{
                    name: 'John Doe',
                    age: 30 }} 
                />
                <Test2 name="Jane Doe" age={25} /> */}
                <MyContainer />
            </>
          } />
          <Route path='/about' element={
            <>
                <Header />
                <Check name="Azarias"/>
                <About />
            </>} />
        </Routes>
        
      </div>
    </Router>
  );
}

function Test1(props) {
  return (
    <div>
      <h1>{props.info.name}</h1>
      <h2>{props.info.age}</h2>
    </div>
  );
}

function Test2(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
}

export default App;
