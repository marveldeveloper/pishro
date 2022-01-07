import notification from "./_notification";

function username({
  value = "",
  label = "نام کاربری",
  showNotification = true,
}) {
  const check = value.length > 0;
  if (!check && showNotification) {
    notification({ text: `${label} را وارد کنید.` });
  }
  return check;
}

function email({ value = "", label = "ایمیل", showNotification = true }) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = value.length > 0 && regex.test(value);
  if (!check && showNotification) {
    notification({ text: `${label} نامعتبر است.` });
  }
  return check;
}

function password({ value = "", label = "رمز عبور", showNotification = true }) {
  // const regex = /^(?=.*[\w])(?=.*[\W])[\w\W]{6,20}$/;
  const regex =
    // eslint-disable-next-line
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{6,20}/;
  const check = regex.test(value);
  if (!check && showNotification) {
    notification({
      text: `${label} باید بین 6 تا 20 حرف باشد و شامل یک حرف بزرگ ، یک حرف کوچک ، یک رقم و یک حرف خاص باشد.`,
    });
  }
  return check;
}

function mobile({
  value = "",
  label = "شماره موبایل",
  showNotification = true,
}) {
  const check = value.length === 11 && value.substring(0, 2) === "09";
  if (!check && showNotification) {
    notification({ text: `${label} نادرست است.` });
  }
  return check;
}

function tel({
  value = "",
  showNotification = true,
  label = "شماره تلفن ثابت",
}) {
  const check = String(value).length === 11 && value.substring(0, 1) === "0";
  if (!check && showNotification) {
    notification({ text: `${label} نادرست است.` });
  }
  return check;
}

function nationalCode({
  value = "",
  showNotification = true,
  label = "کد ملی",
}) {
  const check = value.length === 10 && /^\d+$/.test(value);
  if (!check && showNotification) {
    notification({ text: `${label} نادرست است.` });
  }
  return check;
}

function postalCode({
  value = "",
  showNotification = true,
  label = "کد پستی",
}) {
  const check = value.length === 10 && /^\d+$/.test(value);
  if (!check && showNotification) {
    notification({ text: `${label} نادرست است.` });
  }
  return check;
}

function checkLen({
  value = "",
  showNotification = true,
  label = "",
  minLen = 1,
}) {
  const checkLen = String(value).length > 0;
  const checkMinLen = String(value).length >= minLen;
  if (showNotification) {
    !checkLen && notification({ text: `لطفا ${label} را وارد کنید.` });
    checkLen &&
      !checkMinLen &&
      notification({
        text: `تعداد کاراکترهای فیلد ${label} کمتر از مقدار مجاز است.(مقدار مجاز‌ ${minLen})`,
      });
  }
  return checkLen && checkMinLen;
}

function persianText({ value = "", showNotification = true, label = "" }) {
  const regex = /^[\u0600-\u06FF\s]+$/;
  const check = regex.test(value);
  if (!check && showNotification) {
    notification({ text: `لطفا ${label} را فقط با کاراکترهای فارسی پر کنید.` });
  }
  return check;
}

const isValidations = {
  username,
  password,
  email,
  mobile,
  tel,
  persianText,
  nationalCode,
  checkLen,
  postalCode,
};

export default isValidations;
