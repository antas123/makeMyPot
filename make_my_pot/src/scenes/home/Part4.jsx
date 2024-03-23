import React from "react";
import pigimg from "./homeimages/pigimg.png";

const Part4 = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 50px",
        backgroundColor: "#FFFAF4",
        marginTop: "50px",
      }}
    >
      <div style={{ width: "70%", margin: "auto", color: "#6B3500" }}>
        {" "}
        <h2>How MakeMyPot can be your financial friend?</h2>
        <p>
          At Money Pottery, we believe in empowering you to take control of your
          financial journey. Our platform offers a suite of powerful tools and
          reports to help you understand, plan, and grow your wealth. Here's a
          glimpse of what you can do with Money Pottery:
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          marginTop: "45px",
        }}
      >
        <div
          style={{
            height: "42px",
            width: "20%",
            backgroundColor: "#F9B572",
            border: "2px solid #F9B572",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#6B3500",
          }}
        >
          <p>Insighful financial reports</p>
        </div>
        <div
          style={{
            height: "42px",
            width: "20%",
            border: "2px solid #F9B572",
            borderRight: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#6B3500",
          }}
        >
          {" "}
          <p>Secure Your Future</p>{" "}
        </div>
        <div
          style={{
            height: "42px",
            width: "20%",
            border: "2px solid #F9B572",
            borderRight: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#6B3500",
          }}
        >
          {" "}
          <p>Wealth Growth Visualization</p>{" "}
        </div>
        <div
          style={{
            height: "42px",
            width: "20%",
            border: "2px solid #F9B572",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#6B3500",
          }}
        >
          {" "}
          <p>Retirement Planning</p>{" "}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80vw",
          margin: "auto",
          padding: "30px",
          marginTop: "30px",
        }}
      >
        <img style={{ width: "40vw", height: "40vh" }} src={pigimg} alt="" />
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <p style={{ color: "#6B3500" }}>
            {" "}
            <span style={{ fontWeight: "bolder" }}>
              {" "}
              Income & Expense Report:{" "}
            </span>
            Track your money inflow and outflow effortlessly. Our intuitive
            interface breaks down your spending habits, making it easy to
            identify areas for improvement.
          </p>
          <p style={{ color: "#6B3500" }}>
            {" "}
            <span style={{ fontWeight: "bolder" }}>Net Worth Report:</span>{" "}
            Watch your wealth evolve over time. Get a comprehensive view of your
            assets and liabilities, providing a clear snapshot of your financial
            health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Part4;
