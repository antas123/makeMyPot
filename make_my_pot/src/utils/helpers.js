export const getHeightForComponent = (thoughtCount, component) => {
  const isDashboard = window.location.pathname.includes("financialDashboard");

  if (isDashboard) {
    if (thoughtCount === 0) {
      return "85%";
    } else if (thoughtCount === 1) {
      return component === "main" ? "69%" : "15%";
    }
  } else {
    if (thoughtCount === 1) {
      return component === "main" ? "66%" : "12%";
    } else if (thoughtCount === 2) {
      return component === "main" ? "55%" : "23%";
    }
  }
};

export const isHomePage = () => {
  const isHome = window.location.pathname.includes("home");
  return isHome;
};
