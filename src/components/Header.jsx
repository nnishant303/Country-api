
import { useTheme } from "../../hooks/useTheme";


export default function Header() {
  const [isdark , Setisdark] = useTheme()

  // if (isdark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }
  return (
    <>
      <header className={`header-container ${isdark ? 'dark' : ''}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              Setisdark(!isdark);
              localStorage.setItem("isdark", !isdark);
            }}
          >
            <i className={`fa-solid fa-${isdark ? "sun" : "moon"}`}></i>
            &nbsp;&nbsp;{isdark ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </header>
    </>
  );
}
