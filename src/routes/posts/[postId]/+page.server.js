import { PostData } from "$lib/server/db";

export async function load({ params }) {
  let post = await PostData.getById(+params.postId, {
    Answer: { include: { Market: true } },
    User: { include: { City: true } },
  });
  console.log(post);
  return post;

  //   throw error(404, "Not found");
}
