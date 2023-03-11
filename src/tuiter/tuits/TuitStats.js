import React from "react";


const TuitStats = ({tuit}) => {
    return(
        <div className="d-flex">
            <span className="flex-fill p-2"><i className="bi bi-chat me-2"></i><span>{tuit.replies}</span></span>
            <span className="flex-fill p-2"><i className="bi bi-arrow-repeat me-2"></i><span>{tuit.retuits}</span></span>
            <span className="flex-fill p-2"><i className= {`${tuit.liked ? 'text-danger bi bi-heart-fill': ' bi bi-heart'}  me-2`}></i><span>{tuit.likes}</span></span>
            <span className="flex-fill p-2"><i className="bi bi-share me-2"></i></span>
        </div>
    );
};

export default TuitStats;