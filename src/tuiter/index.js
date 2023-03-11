import {Routes, Route} from 'react-router';
import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});


function Tuiter() {
    return (
        <div>
        <Provider store={store}>
        <Nav/>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route index element={<HomeComponent />} />
                    <Route path='explore' element={<ExploreComponent />} />
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
        </div>

    );

}
export default Tuiter