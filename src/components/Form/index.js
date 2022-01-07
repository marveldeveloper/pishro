import "./index.scss";
export default function Form({
  onSubmit = () => {},
  className = "",
  children,
}) {
  const submit = (e) => {
    e.preventDefault();
    onSubmit();
    // let check = false;
    // for (let i = 0; i < e.target.length; i++) {
    //   const element = e.target[i];
    //   const rulesString = element.getAttribute("rules") ?? "()=>true";
    //   const rules = rulesString.split(",");
    //   for (let i in rules) {
    //     const rule = rules[i];
    //     const func = new Function(`return (${rule})`)();
    //     const funcValue = func(element.value) === true;
    //     funcValue
    //       ? element.classList.remove("error")
    //       : element.classList.add("error");
    //     if (funcValue) {
    //       check = true;
    //     } else {
    //       return;
    //     }
    //   }
    // }
    // check === true && onSubmit();
  };
  return (
    <form onSubmit={submit} className={className}>
      {children}
    </form>
  );
}
