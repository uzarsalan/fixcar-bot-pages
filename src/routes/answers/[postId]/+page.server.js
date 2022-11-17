import { AnswerData } from "$lib/server/db";
import { error, json } from "@sveltejs/kit";

/** @type {import('../../../../.svelte-kit/types/src/routes/answers/[postId]/$types/../.svelte-kit/types/src/routes/answers/[postId]/$types').PageLoad} */
export async function load({ params }) {
  let answers = await AnswerData.find(
    { postId: +params.postId },
    { Market: true }
  );
  return answers.map((answer) => {
    answer.price = +answer.price;
    return answer;
  });

  //   throw error(404, "Not found");
}
