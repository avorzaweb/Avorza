import type { NavigateFunction } from "react-router-dom";

/**
 * Navigates to a section on the home page ("#id") from anywhere in the app.
 * If already on "/", it smooth-scrolls directly. If on another route
 * (e.g. /termos), it routes to "/" first and scrolls after the page mounts.
 */
export function goToSection(
  id: string,
  pathname: string,
  navigate: NavigateFunction
) {
  const scroll = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (pathname === "/") {
    scroll();
  } else {
    navigate("/");
    window.setTimeout(scroll, 60);
  }
}
