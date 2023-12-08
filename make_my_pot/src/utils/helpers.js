export const getHeightForComponent = (thoughtCount, component) => {
  const isDashboard = window.location.pathname.includes("financialDashboard");

  if (isDashboard) {
    if (thoughtCount === 0) {
      return "85%";
    } else if (thoughtCount === 1) {
      return component === "main" ? "69%" : "15%";
    } else {
      return component === "main" ? "63%" : "22%";
    }
  } else {
    if (thoughtCount === 1) {
      return component === "main" ? "66%" : "12%";
    } else if (thoughtCount === 2) {
      return component === "main" ? "55%" : "23%";
    }
  }
};

export const isNotAuthenticated = () => {
  const { pathname } = window.location;
  const isHome = pathname === "/signin" || pathname === "/login";
  return isHome;
};

export const isHomePage = () => {
  const { pathname } = window.location;
  console.log("path", pathname);
  const isHome =
    pathname === "/signin" || pathname === "/login" || pathname === "/home";
  return isHome;
};

export const formatAmount = (amount) => {
  const absoluteAmount = Math.abs(amount);

  if (absoluteAmount < 1000) {
    return `${amount >= 0 ? "" : "-"}${absoluteAmount.toFixed(2)}`;
  } else if (absoluteAmount < 100000) {
    return `${amount >= 0 ? "" : "-"}${(absoluteAmount / 1000).toFixed(2)} K`;
  } else if (absoluteAmount < 10000000) {
    return `${amount >= 0 ? "" : "-"}${(absoluteAmount / 100000).toFixed(2)} L`;
  } else {
    return `${amount >= 0 ? "" : "-"}${(absoluteAmount / 10000000).toFixed(
      2
    )} Cr`;
  }
};

export const getLoansFromLiabilities = (liabilities) => {
  let result = [];
  Object.keys(liabilities).forEach((liability) => {
    console.log("ueeeeee", liabilities[liability]);
    let newl = liabilities[liability]?.filter((l) => l.amount !== "");
    result = [...result, ...newl];
  });
  return result;
};
