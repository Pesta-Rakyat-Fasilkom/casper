import { members, teams } from "@/lib/drizzle/schema";

export type FormattedTeam = typeof teams.$inferSelect & {
  members: (typeof members.$inferSelect)[];
};

export interface Member {
  id: string;
  profile_id: string;
  team_id: string;
  role: string;
  in_game_name: string;
  is_captain: boolean;
  created_at: string;
}
