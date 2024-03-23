export const sideBarOptions = {
  Home: ["Profile", "About Us"],
  "Your financials": [
    "Your income post tax",
    "Your expenses/month",
    "Your fixed Assets",
    "Your financial Assets",
    "Your liablities",
  ],
  "Financial dashboard": [
    "Financial dashboard",
    "Income and expenses report",
    "Net worth analysis report",
    "Manage your loans",
    "Evaluate and plan goals",
    "Retirement planning",
  ],
};

export const pageToRoute = (page) => {
  if (page === "Home") return "home";
  else if (page === "Your financials") return "yourFinancials";
  else return "financialDashboard";
};

export const getPageFromPath = (path) => {
  if (path.includes("home")) return "Home";
  else if (path.includes("yourFinancials")) return "Your financials";
  else if (path.includes("financialDashboard")) return "Financial dashboard";
};

export const getActiveTabFromPath = (path) => {
  const pathArray = path.split("/");
  return Number(pathArray[pathArray.length - 1]);
};

export const tabOptionToRoute = (page) => {
  if (page === "Home") return 2;
  else return 5;
};
