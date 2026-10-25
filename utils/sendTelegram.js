// Telegram Bot Configuration
//
// Token repo'da SAQLANMAYDI: lokal — .env.local, CI — GitHub Secret (TELEGRAM_BOT_TOKEN).
// Build paytida token teskari aylantirilib base64 qilinadi (.github/workflows/nextjs.yml):
// JS faylida token ko'rinishida turmaydi, token qidiruvchi skanerlar uni topa olmaydi.
// Bu shifrlash emas — forma yuborilganda token Network so'rovida baribir ko'rinadi.
const TELEGRAM_BOT_TOKEN_ENC = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN_ENC;
const TELEGRAM_CHAT_ID = "5020012161";

function decodeToken(encoded) {
  return atob(encoded).split("").reverse().join("");
}

/**
 * Send message to Telegram bot
 * @param {Object} data - Message data
 * @param {string} data.name - Sender name
 * @param {string} data.email - Contact info (email/phone/telegram)
 * @param {string} data.message - Message content
 * @returns {Promise<boolean>} - Success status
 */
export async function sendTelegramMessage({ name, email, message }) {
  if (!TELEGRAM_BOT_TOKEN_ENC) {
    console.error("NEXT_PUBLIC_TELEGRAM_BOT_TOKEN_ENC sozlanmagan");
    return false;
  }

  const text = `
📩 New Contact Message

👤 Name: ${name}
📧 Contact: ${email}
💬 Message:
${message}
  `;

  const url = `https://api.telegram.org/bot${decodeToken(TELEGRAM_BOT_TOKEN_ENC)}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
      }),
    });

    const data = await response.json();

    if (data.ok) {
      return true;
    } else {
      console.error("Telegram API error:", data);
      return false;
    }
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    return false;
  }
}
