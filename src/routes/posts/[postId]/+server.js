import { PostData } from "$lib/server/db";
import { error, json } from "@sveltejs/kit";

export async function GET({ params }) {
  console.log(params);

  let post = await PostData.getById(+params.postId, {
    Answer: { include: { Market: true } },
    User: { include: { City: true } },
  });

  return json(post);
}
