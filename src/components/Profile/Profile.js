import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import h from './Profile.module.css';

const Profile = (props) => {

    return (
        <div className={h.content}>
            <ProfileInfo />
            <MyPosts className={h.wrapperPosts} state={props.state} />
        </div>
    );
}



export default Profile;
