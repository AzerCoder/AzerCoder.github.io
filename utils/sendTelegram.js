// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = "8314226753:AAFBCufO4C0ZVqAaUa0WTPgagCWH7AePrGc";
const TELEGRAM_CHAT_ID = "5020012161";

/**
 * Send message to Telegram bot
 * @param {Object} data - Message data
 * @param {string} data.name - Sender name
 * @param {string} data.email - Contact info (email/phone/telegram)
 * @param {string} data.message - Message content
 * @returns {Promise<boolean>} - Success status
 */
export async function sendTelegramMessage({ name, email, message }) {
  const text = `
📩 New Contact Message

👤 Name: ${name}
📧 Contact: ${email}
💬 Message:
${message}
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

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
