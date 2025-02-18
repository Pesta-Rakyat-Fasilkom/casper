export interface Team {
  id: string;
  name: string;
  status: string;
  competition_id: string;
  created_at: string;
  members: Member[];
}

export interface Member {
  id: string;
  profile_id: string;
  team_id: string;
  role: string;
  in_game_name: string;
  is_captain: boolean;
  created_at: string;
}
