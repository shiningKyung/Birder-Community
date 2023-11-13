import axios from "axios";
import { useState } from "react";
// useEffect, 
import { useNavigate } from "react-router-dom";

const PostEditor = () => {
    const userId = sessionStorage.getItem('id');
    const [postContent, setPostContent] = useState({
        title: "",
        username: userId,
        date: null,
        location: "",
        image: "",
        body: "",
    })

    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setPostContent((prev) => ({...prev, [e.target.name] : e.target.value}));
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8081/writeLogbook", postContent);
            navigate("/");
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <div className="flex flex-col items-center">
            <p>글 작성하기</p>
            <input 
                type="text" 
                placeholder="제목" 
                className="input input-bordered textarea-md w-full max-w-xs"
                onChange={handleChange}
                name="title"
            />
            <textarea 
                className="textarea textarea-bordered textarea-md w-full max-w-xs h-80" 
                placeholder="내용을 작성해주세요"
                onChange={handleChange}
                name="body"
            > 
            </textarea>
            <input 
                type="text" 
                placeholder="위치" 
                className="input input-bordered textarea-md w-full max-w-xs"
                onChange={handleChange}
                name="location"
            />
            <input 
                type="file" 
                className="file-input file-input-bordered file-input-sm w-full max-w-xs" 
                onChange={handleChange}
                name="image"
            />
            <button onClick={handleClick}>등록하기</button>
        </div>
    )
}

export default PostEditor;