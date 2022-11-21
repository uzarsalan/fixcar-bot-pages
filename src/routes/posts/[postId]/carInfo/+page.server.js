import { CarData, PostData } from "$lib/server/db";

export async function load({ params }) {
  let cars = await CarData.find({ Post: { some: { id: +params.postId } } });
  console.log(cars);
  return cars[0] || {};

  //   throw error(404, "Not found");
}
