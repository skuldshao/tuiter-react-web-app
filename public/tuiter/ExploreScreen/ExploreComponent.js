import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            
          <div class="d-flex align-items-center">
                <div class="input-group me-2">
                    <span class="input-group-text bg-white wd-rounded-start"><i class="fa fa-search" style="color: lightgrey"></i></span>
                    <input class="form-control border-start-0 wd-rounded-end" placeholder="Search Tuiter"/>
                </div>
                <a href="explore-settings.html"><i class="fas fa-cog"  style="color: dodgerblue;font-size:35px"></i></a>
            </div>

                <ul class="nav nav-tabs d-flex justify-content-start mt-2 mb-2">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-md-block d-none">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>




            <div class="position-relative">
                <img src="../image/starship.jpg" width="100%">
                <h3 class="text-white position-absolute bottom-0 left-0 p-2">SpaceX's StarShip </h3>
            </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
