import "./App.css";
import photo from "./profil.jpg";
import Profile from "./profile/Profile";
function App() {
  const profile = {
    fullName: "Tej Omayma",
    bio: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profession: "Student",
    pic: photo,
  };
  return (
    <div className="App">
      <Profile
        fullName={profile.fullName}
        bio={profile.bio}
        profession={profile.profession}
      >
        <img src={profile.pic} alt="" srcset="" />
      </Profile>
    </div>
  );
}

export default App;
