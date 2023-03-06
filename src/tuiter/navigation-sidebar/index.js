import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell, faBookmark, faCircle, faEnvelope, faHashtag, faHome, faList, faUser
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">
                <FontAwesomeIcon icon={faTwitter} className={'me-2'}/>
                Tuiter
            </a>

            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <FontAwesomeIcon icon={faHome} className={'me-2'}/>
                Home
            </a>

            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <FontAwesomeIcon icon={faHashtag} className={'me-2'}/>
                Explore
            </a>

            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <FontAwesomeIcon icon={faBell} className={'me-2'}/>
                Notifications
            </a>

            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <FontAwesomeIcon icon={faEnvelope} className={'me-2'}/>
                Messages
            </a>

            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <FontAwesomeIcon icon={faBookmark} className={'me-2'}/>
                Bookmarks
            </a>

            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <FontAwesomeIcon icon={faList} className={'me-2'}/>
                Lists
            </a>

            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <FontAwesomeIcon icon={faUser} className={'me-2'}/>
                Profile
            </a>

            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <FontAwesomeIcon icon={faCircle} className={'me-2'}/>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;