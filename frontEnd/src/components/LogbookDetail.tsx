import { useLocation } from "react-router-dom";

const LogbookDetail = () => {
    const location = useLocation();
    const data = location.state;

    // img : book.image,
    // title: book.title,
    // username: book.username,
    // time: book.created_time,
    // body: book.body,
    // loc: book.location,
    console.log(data);

    const base64String = btoa(String.fromCharCode(...new Uint8Array(data.img)));

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img src={`data:image/png;base64,${base64String}`} className="max-w-m rounded-lg shadow-2xl" /> */}
                    <img src='https://via.placeholder.com/250' className="max-w-m rounded-lg shadow-2xl" />
                    <div className="text-left">
                        <h2 className="text-3xl font-bold">{data.title}</h2>
                        <p className="py-6">
                            <span className="font-semibold">{data.username}</span> {data.time}
                        </p>
                        <p className="py-6">{data.body}</p>
                        <p className="py-6 flex">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>
                            {data.loc}
                        </p>
                        <button className="btn btn-outline btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            좋아요
                        </button>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default LogbookDetail