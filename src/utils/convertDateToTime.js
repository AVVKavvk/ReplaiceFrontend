export function formatMessageTime(date) {
  const validDate = date ? new Date(date) : new Date();
  return validDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
