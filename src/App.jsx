import { Link } from "./components/Link";
import { LinkImage } from "./components/Link/LinkImage";
import { ProfileCard } from "./components/ProfileCard";

function App() {
  return (
    <ProfileCard.Root>
      <ProfileCard.Image src="https://avatars.githubusercontent.com/u/131712358?v=4" />

      <Link.Root text="GITHUB">
        <LinkImage />
      </Link.Root>
    </ProfileCard.Root>
  );
}

export default App;
