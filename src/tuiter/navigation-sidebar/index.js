import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell, faBookmark, faCircle, faEnvelope, faHashtag, faHome, faList, faUser
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = () => {

    const {pathname} = useLocation();
    const path = pathname.split('/');

    return (
        <div className="list-group">
            <a className="list-group-item">
                <FontAwesomeIcon icon={faTwitter} className={'me-2'}/>
                Tuiter
            </a>

            <Link to="/tuiter" className={`list-group-item
                    ${path.length === 2 ?'active':''}`}>
                <FontAwesomeIcon icon={faHome} className={'me-2'}/>
                Home
            </Link>

            <Link to={"/tuiter/explore"} className={`list-group-item
                    ${path[2] === 'explore'?'active':''}`}>
                <FontAwesomeIcon icon={faHashtag} className={'me-2'}/>
                Explore
            </Link>

            <a className={`list-group-item
                    ${path[2] === 'notifications'?'active':''}`}>
                <FontAwesomeIcon icon={faBell} className={'me-2'}/>
                Notifications
            </a>

            <a className={`list-group-item
                    ${path[2] === 'messages'?'active':''}`}>
                <FontAwesomeIcon icon={faEnvelope} className={'me-2'}/>
                Messages
            </a>

            <a className={`list-group-item
                    ${path[2] === 'bookmarks'?'active':''}`}>
                <FontAwesomeIcon icon={faBookmark} className={'me-2'}/>
                Bookmarks
            </a>

            <a className={`list-group-item
                    ${path[2] === 'lists'?'active':''}`}>
                <FontAwesomeIcon icon={faList} className={'me-2'}/>
                Lists
            </a>

            <a className={`list-group-item
                    ${path[2] === 'profile'?'active':''}`}>
                <FontAwesomeIcon icon={faUser} className={'me-2'}/>
                Profile
            </a>

            <a className={`list-group-item
                    ${path[2] ==='more'?'active':''}`}>
                <FontAwesomeIcon icon={faCircle} className={'me-2'}/>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;