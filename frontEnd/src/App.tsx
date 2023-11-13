import './App.css'
import { BrowserRouter } from "react-router-dom"
import { useState, useEffect, createContext } from 'react'
import Router from './router/router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
export const AppContext = createContext();

function App() {
    // 로그인 상태 관리
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('id') === null) {
            // sessionStorage 에 id 라는 key 값으로 저장된 값이 없다면
            console.log('isLogin ?? :: ', isLogin)
        } else {
            // sessionStorage 에 id 라는 key 값으로 저장된 값이 있다면
            // 로그인 상태 변경
            setIsLogin(true)
            console.log('isLogin ?? :: ', isLogin)
        }
    })
    return (
        <AppContext.Provider value={{ isLogin }}>
            <BrowserRouter>
                <Navbar />
                <section>
                    <Router />
                </section>
                <Footer />
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
