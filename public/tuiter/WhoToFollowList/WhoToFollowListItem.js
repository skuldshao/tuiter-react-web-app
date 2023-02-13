const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class=" d-flex flex-row">
                        <img class= "rounded-circle me-2" src="../image/${who.avatarIcon}" width="50px" height="50px">
                        <div class="flex-column">
                        <div class="fw-bold text-white"> ${who.userName} <i class="fas fa-check-circle" style="color: white"></i></div>
                        <div class="text-white">@${who.handle}</div>
                        </div>
                    </div>
                    <button class="btn btn-primary rounded-pill">Follow</button>
    </li>
    `);
}

export default WhoToFollowListItem;
