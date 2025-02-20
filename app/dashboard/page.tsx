import { Dashboard } from "@/modules/dashboard";
import { getUserWithProfile } from "../actions";
import { fetchAllGames, fetchUserTeams } from "@/modules/dashboard/actions";

const Page = async () => {
  const { user, profile } = await getUserWithProfile();

  if (!user || !profile) {
    return <div>Loading...</div>;
  }

  const allGames = await fetchAllGames();
  const teamsData = await fetchUserTeams(user.id);

  return (
    <Dashboard
      user={user}
      profile={profile}
      allGames={allGames}
      teamsData={teamsData}
    />
  );
};

export default Page;
