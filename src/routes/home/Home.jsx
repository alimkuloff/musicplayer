import TopMixes from '../../components/top-mixes/TopMixes';
import MadeForYou from '../../components/made-for-you/MadeForYou';
import RecentPlayed from '../../components/recent-played/RecentPlayed';
import JumpBackIn from '../../components/jump-back-in/JumpBackIn';

const Home = () => {
  return (
    <div>
      <TopMixes />
      <MadeForYou />
      <RecentPlayed />
      <JumpBackIn />
    </div>
  );
}

export default Home;