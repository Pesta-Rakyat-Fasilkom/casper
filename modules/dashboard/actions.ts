"use server";

import { db } from "@/lib/drizzle/db";
import { eq, inArray } from "drizzle-orm";
import { teams, members, users } from "@/lib/drizzle/schema";
import { FormattedTeam } from "./interface";

export const fetchUserTeams = async (
  userId: string,
): Promise<FormattedTeam[]> => {
  try {
    // Step 1: Get the teams where the user is a member
    const memberTeams = await db
      .select({ team_id: members.team_id })
      .from(members)
      .where(eq(members.profile_id, userId));

    const teamIds = memberTeams.map((m) => m.team_id);
    if (teamIds.length === 0) return [];

    // Step 2: Fetch teams and members
    const teamsList = await db
      .select()
      .from(teams)
      .where(inArray(teams.id, teamIds as string[]));

    const membersList = await db
      .select()
      .from(members)
      .where(inArray(members.team_id, teamIds as string[]));

    // Step 3: Merge members into their respective teams
    return teamsList.map((team) => ({
      ...team,
      members: membersList.filter((member) => member.team_id === team.id),
    }));
  } catch (error) {
    console.error("Error fetching teams and members:", error);
    return [];
  }
};
