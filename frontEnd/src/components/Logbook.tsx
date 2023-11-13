import { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useNavigate } from 'react-router-dom';

const Logbook = () => {
    const { isLogin } = useContext(AppContext);
    const [books, setBooks] = useState([]);

    const srhTitle = useRef();

    // 검색
    const fetchSrhBooks = async () => {
        try {
            const res = await axios.post("http://localhost:8081/logbook", {
                srhTitle: srhTitle.current.value
            });
            setBooks(res.data);
            console.log(books);
        } catch (err) {
            console.log(err);
        }
    };
    
    // 게시글 목록
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8081/logbook");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    
    // 글 상세보기
    const navigate = useNavigate()
    
    const goDetail = () => {
        navigate(`/logbook/${id}`);
    };

    // 게시물상세보기
    const btn = () => {
        return (
            <button className="btn btn-primary" >상세보기</button>
        );
    }

    return (
        <>
            <div className="join">
                <input 
                    className="input input-bordered join-item" 
                    placeholder="제목으로 검색하기"
                    ref={srhTitle}
                />
                <button 
                    className="btn join-item rounded-r-full"
                    onClick={fetchSrhBooks}
                >
                    검색
                </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 item_list">
                {books && books.map(book => (
                    <div className="card lg:card-side bg-base-100 shadow-xl" key={book.title}>
                        <figure><img src="https://smart.science.go.kr/k3i/scienceSubject/cmm/imageView.action?file_sid=1942" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{book.title}</h2>
                            <p>{book.location}</p>
                            <p>작성자 : {book.username}</p>
                            <div className="card-actions justify-end">
                            <Link 
                                to={`/logbook/${book.no}`}
                                state= {{
                                    img : book.image,
                                    title: book.title,
                                    username: book.username,
                                    time: book.created_time,
                                    body: book.body,
                                    loc: book.location,
                                }}   
                            >
                                <button className="btn btn-primary" 
                                >상세보기
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isLogin ? 
                <button><Link to='/postEdit'>글 작성</Link></button>
                : 
                <button ><Link to='/login'>글 작성</Link></button>
            }
        </>
    );
};

export default Logbook;