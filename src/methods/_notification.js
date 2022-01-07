export default function notification({
  text = "error",
  type = "danger",
  duration = 5000,
}) {
  const notifications = document.getElementById("Notifications");
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.classList.add(`alert-${type}`);
  alert.innerText = text;
  notifications.appendChild(alert);
  setTimeout(() => {
    alert.classList.add("show");
  }, 0);
  setTimeout(() => {
    alert.classList.remove("show");
    setTimeout(() => {
      notifications.removeChild(alert);
    }, 500);
  }, duration);
}
