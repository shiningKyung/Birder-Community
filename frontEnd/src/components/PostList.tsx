const PostList = () => {
    return (
        <div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 item_list">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://smart.science.go.kr/k3i/scienceSubject/cmm/imageView.action?file_sid=1942" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">물까치1</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://smart.science.go.kr/k3i/scienceSubject/cmm/imageView.action?file_sid=1942" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">물까치2</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://smart.science.go.kr/k3i/scienceSubject/cmm/imageView.action?file_sid=1942" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">물까치3</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PostList;