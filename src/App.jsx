import { Routes,Route} from 'react-router-dom';
// import {lazy} from 'react';

// import axios from 'axios';
// import { useEffect, useState } from 'react';
import './App.css';
//模拟数据接收文件
// import './mock/mockServer.js';
import Header from './components/Header';

// const Home = lazy(() => import('./page/Home'));
// const Article = lazy(() => import('./page/Article'));
// const BuildWeb = lazy(() => import('./page/BuildWeb'));
// const Works = lazy(() => import('./page/Works'));
// const About = lazy(() => import('./page/About'));

import Home from './page/Home'
import Article from './page/Article'
import BuildWeb from './page/BuildWeb'
import Works from './page/Works'
import About from './page/About'

import { useState, useEffect } from 'react';
import axios from 'axios';
import('./mock/mockServer.js').then(()=>{
  console.log('mock server started');
});
function App() {
  console.log(1);
  const [articleData, setArticleData] = useState([]);

  //使用useEffect()进行数据获取
  useEffect(() => {
    const fetchData = async() => { 
        try {
            const result = await axios.get("/api/data");
            console.log(result);
            setArticleData(result.data.data.buildData);
        } catch (e) {
            console.log(e);
        }
    }
    fetchData();
    return () => {
      console.log('unmount');
    };
  },[])
    
  return (
    <div id='main'>
      <Header/>
      <div className='con'>
      <Routes>
        <Route path="/" exact element={<Home data={articleData}/>}/>
        <Route path="/article"  element={<Article />}/>
        <Route path="/buildWeb"  element={<BuildWeb />}/>
        <Route path="/works"  element={<Works />}/>
        <Route path="/about"  element={<About />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
