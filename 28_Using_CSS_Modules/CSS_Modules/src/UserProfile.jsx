import style from  "./css/UserProfile.module.css"
function UserProfile() {
  return (
    <div>
      <h1 className={style.heading}>User Profile</h1>
      <div>
        <img src="https://www.w3schools.com/howto/img_avatar.png" />
        <div>
          <h4>Deepak</h4>
          <p>Software developer</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;