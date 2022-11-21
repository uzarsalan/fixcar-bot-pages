import { AnswerData } from "$lib/server/db";
import { error, json } from "@sveltejs/kit";

/** @type {import('../../../.svelte-kit/types/src/routes/posts/[postId]/$types').RequestHandler} */
export async function POST({ url, request }) {
  console.log(url);
  let answerData = await request.json();
  console.log(answerData);
  let { data } = await AnswerData.create(answerData);
  return json(data);
}
