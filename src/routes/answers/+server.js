import { AnswerData } from "$lib/server/db";
import { bot } from "$lib/server/telegraf";
import { error, json } from "@sveltejs/kit";
import { Markup } from "telegraf";

/** @type {import('../../../.svelte-kit/types/src/routes/posts/[postId]/$types').RequestHandler} */
export async function POST({ url, request }) {
  console.log(url);
  let answerData = await request.json();
  let { id } = await AnswerData.create(answerData);
  answerNotification(id);
  return json({ id });
}

async function answerNotification(answerId) {
  let AVAILABILITY = {
    available: "В НАЛИЧИИ",
    request: "ПОД ЗАКАЗ",
  };

  let answerData = await AnswerData.getById(answerId, {
    Post: { include: { User: true, Car: true } },
    Market: true,
  });
  console.log(answerData);
  if (
    answerData &&
    answerData.Post &&
    answerData.Post.User &&
    answerData.Post.User.telegramId
  )
    bot.telegram.sendMessage(
      answerData.Post.User.telegramId,
      `
<b>${answerData.price} РУБ ${AVAILABILITY[answerData.availability]} 
${answerData.Market.name}</b>
Сообщение: ${answerData.message}
Номер телефона: ${answerData.Market.phoneNumber}

Ваш запрос: ${answerData.Post.content}
Для авто: 🚘 ${answerData.Post.Car.brand} ${answerData.Post.Car.model} ${
        answerData.Post.Car.year || ""
      }
`,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Все ответы",
                web_app: {
                  url: `https://fixcar-bot.netlify.app/answers/${answerData.Post.id}`,
                },
              },
            ],
          ],
        },
      }
    );
}
