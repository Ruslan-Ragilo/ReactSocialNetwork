import ProfileInfo from './ProfileInfo/ProfileInfo'
import h from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    // debugger;
    return (
        <div className={h.content}>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    );
}



export default Profile;
