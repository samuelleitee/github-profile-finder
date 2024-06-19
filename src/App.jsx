import { Link } from "./components/Link";
import { ProfileCard } from "./components/ProfileCard";

function App() {
  return (
    <ProfileCard.Root name="Cameron Williamson">
      <ProfileCard.Image src="https://avatars.githubusercontent.com/u/131712358?v=4" />

      <Link.Root text="GITHUB">
        <Link.Image />
      </Link.Root>
    </ProfileCard.Root>
  );
}

export default App;
