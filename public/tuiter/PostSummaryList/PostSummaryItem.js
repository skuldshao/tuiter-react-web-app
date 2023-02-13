const PostSummaryItem = (post) => {
    return (`<li class="list-group-item">
                    <div class="row">
                        <div class="col-10">
                            <div class="wd-text-lightgray">${post.topic}</div>
                            <span class="fw-bold text-white"> ${post.userName} </span>
                            <i class="fas fa-check-circle"></i>
                            <span class="wd-text-lightgray">- ${post.time}</span>
                            <div class="fw-bold text-white"> ${post.title} </div>
                        </div>
                        <div class="col-2"><img class="float-end rounded-4" src="${post.image}" width="90%" height="90%"></div>
                    </div>
                </li>`)}
export default PostSummaryItem