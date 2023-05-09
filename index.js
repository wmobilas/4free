const SECRET_KEY = "Ваш API key";

function chatGPT(
  prompt,
  max_tokens = 2048,
  temperature = 0.7,
  model = "gpt-3.5-turbo-0301"
) {
  const url = "https://api.openai.com/v1/chat/completions";
  const payload = {
    model,
    max_tokens,
    temperature,
    messages: [{ role: "user", content: prompt }]
  };
  const options = {
    contentType: "application/json",
    headers: { Authorization: "Bearer " + SECRET_KEY },
    payload: JSON.stringify(payload)
  };
  const res = JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  return res.choices[0].message.content.trim();
}
