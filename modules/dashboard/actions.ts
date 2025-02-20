"use server";

import { db } from "@/lib/drizzle/db";
import { eq, inArray, and } from "drizzle-orm";
import { teams, members, games } from "@/lib/drizzle/schema";
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

export const fetchAllGames = async () => {
  try {
    const allGames = await db.select().from(games);
    return allGames;
  } catch (error) {
    return [];
  }
};

export const createTeamAndMembers = async (formData: FormData) => {
  try {
    const terms = formData.get("terms");
    if (terms !== "on") {
      return;
    }

    const ign = formData.get("ign") as string;
    const gameId = formData.get("gameId") as string;
    const userId = formData.get("userId") as string;
    if (!ign || !gameId || !userId) {
      return;
    }

    let role = null;
    let rank = null;
    let teamName: string | null = formData.get("teamName") as string;

    const registrationType = formData.get("registrationType");
    if (registrationType === "solo") {
      role = formData.get("role") as string;
      rank = formData.get("rank") as string;
    } else if (registrationType === "captain" || !!teamName) {
    } else {
      teamName = null;
    }
    const member = await db.transaction(async (tx) => {
      const [team] = await tx
        .insert(teams)
        .values({ name: teamName, game_id: gameId, status: "not_verified" })
        .returning({ insertedId: teams.id });
      const [member] = await tx
        .insert(members)
        .values({
          team_id: team.insertedId,
          profile_id: userId,
          in_game_name: ign,
          is_captain: true,
        })
        .returning({ insertedId: members.team_id });

      const [result] = await tx
        .select()
        .from(members)
        .where(
          and(
            eq(members.team_id, team.insertedId),
            eq(members.team_id, member.insertedId),
          ),
        );
      return result;
    });

    if (!member) {
      return { message: "Gagal mendaftarkan tim!", status: 400 };
    }
    return { message: "Berhasil mendaftarkan tim!", status: 201 };
  } catch (error) {
    return;
  }
};
