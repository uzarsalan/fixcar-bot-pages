import { MarketData, UserData } from "$lib/server/db";
import { error, json } from "@sveltejs/kit";

export async function GET({ params }) {
  let user = await UserData.getById(params.userId, { City: true });

  return json(user);
}
