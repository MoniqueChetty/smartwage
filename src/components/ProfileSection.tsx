import "./css/ProfileSection.css";

function ProfileSection() {
  return (
    <div className="profile__section">
      <div className="profile__separator1" />
      <div className="profile">
        <div className="profile__textavatar">
          <div className="profile__avatar">
            <img
              className="profile__avataricon"
              alt=""
              src="/images/avatar.png"
            />
          </div>
          <div className="profile__text">
            <div className="profile__client">Mike Metelerkamp</div>
            <div className="profile__company">McDonalds</div>
          </div>
        </div>

        <img className="profile__expandicon" alt="" src="/svg/expand.svg" />
      </div>
    </div>
  );
}

export default ProfileSection;
