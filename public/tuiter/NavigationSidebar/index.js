const NavigationSidebar = () => {
    return(`<div class="list-group">
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter d-inline-block float-left"></i></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                   <i class="fa fa-home d-inline-block float-left"></i>
                    <span class="d-none d-xl-inline-block float-left">Home</span>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-hashtag d-inline-block float-left"></i>
                    <span class="d-none d-xl-inline-block float-left">Explore</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell d-inline-block float-left"></i>
                    <span class="d-none d-xl-inline-block float-left">Notifications</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope d-inline-block float-left"></i>
                    <span class="d-none d-xl-inline-block float-left">Messages</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark d-inline-block float-left"></i>
                    <span class="d-none d-xl-inline-block float-left">Bookmarks</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list d-inline-block float-left"></i>
                    <span class="d-none d-xl-inline-block float-left">Lists</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user d-inline-block float-left"></i>
                    <span class="d-none d-xl-inline-block float-left">Profile</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fas fa-comment-dots d-inline-block float-left"></i>
                    <span class="d-none d-xl-inline-block float-left">More</span></a>
            </div>
            
            <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a></div>
 `);
}
export default NavigationSidebar;