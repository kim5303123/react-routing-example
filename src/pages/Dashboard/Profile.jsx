import { useParams } from "react-router-dom";

// 예) /profile/dashboard/:userId -> URL 패턴
//     /profile/dashboard/1234 ->  실제 URL
//     :userId -> Path Variable

function Profile() {
  // Path Variable 받아오기
  const { userId } = useParams();
  return (
    // url : /dashboard/profile/1004
    <div>
      <h3 id="profile">Profile</h3>
      <p>This is the Profile page for user {userId}</p>
    </div>
  );
}

export default Profile;
