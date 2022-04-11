import h from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={h.bannerAva}>
                <img src="https://interier-foto.ru/wp-content/uploads/2015/11/ozero-dzhangyskol-6471.jpg" alt="" />
            </div>
            <div className={h.wrapperAvatar}>
                <a href="s#"><img className={h.mainAvatar} src='https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg' alt="Avatar" /></a>
            </div>
        </div>
    )
}

export default ProfileInfo;