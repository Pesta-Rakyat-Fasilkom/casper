import { games, members, profiles, teams } from "@/lib/drizzle/schema";
import { JSX } from "react";

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

export interface SidebarWrapperProps {
  Games: (typeof games.$inferSelect)[];
  Navigation: {
    href: string;
    label: string;
    icon: JSX.Element;
    children: {
      href: string;
      label: string;
      icon: JSX.Element;
      className?: string;
    }[];
  };
  selectedGame: typeof games.$inferSelect | null;
  profile: typeof profiles.$inferSelect;
}

export interface SidebarProps extends SidebarWrapperProps {
  isSidebarOpen: boolean;
  onGameSelect: (game: typeof games.$inferSelect) => void;
}
