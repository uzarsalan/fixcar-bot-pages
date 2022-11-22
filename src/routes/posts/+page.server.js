import { PostData } from "$lib/server/db";

export async function load({ params }) {
  let posts = await PostData.find(
    {},
    {
      Car: { include: { User: { include: { City: true } } } },
      _count: { select: { Answer: true } },
    }
  );
  console.log(posts);
  return posts;

  //   throw error(404, "Not found");
}
