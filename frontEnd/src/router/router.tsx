import { Routes, Route } from 'react-router-dom';
import Index from '../components/Index';
import Logbook from '../components/Logbook';
import Questions from '../components/Questions';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import PostEditor from '../components/PostEditor';
import LogbookDetail from '../components/LogbookDetail';

const Router = () => {
    return (
        <Routes>
			{/* <Route path='*' element={<Error />} /> */}
			<Route path='/' element={<Index />} />
			{/* <Route path='/product/:id' element={<Products />} />
			<Route path='/cart' element={<Cart />} /> */}
			{/* <Route path='/fashion' element={<Fashion />} />
			<Route path='/digital' element={<Digital />} /> */}
            <Route path='/logbook' element={<Logbook />} />
            <Route path='/logbook/:no' element={<LogbookDetail />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
			<Route path='/postEdit' element={<PostEditor />} />
		</Routes>
    );
};

export default Router;