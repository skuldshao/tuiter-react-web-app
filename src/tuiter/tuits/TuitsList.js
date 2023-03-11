import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const PostSummaryList = () => {
    const TuitArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                TuitArray.map(tuit =>
                                   <TuitItem
                                       key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default PostSummaryList;