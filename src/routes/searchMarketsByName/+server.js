import { MarketData } from "$lib/server/db";
import { error, json } from "@sveltejs/kit";

export async function GET({ url }) {
  const q = url.searchParams.get("q");

  let markets = await MarketData.find({
    name: {
      contains: q,
      mode: "insensitive",
    },
  });

  return json(markets);
}
