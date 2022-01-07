export default function setToken(value = "") {
    const token = `Bearer ${value}`;
    localStorage.setItem("token", token);
    return token;
  }
  