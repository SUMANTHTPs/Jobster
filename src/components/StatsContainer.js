import React from "react";
import StatItem from "./StatItem";
import { useSelector } from "react-redux";
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer"
const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
  const defaultStats = [
    {
        title: "pending applications",
        count: stats.pending || 0,
        icon: <FaSuitcaseRolling />,
        color: "#e9b949",
        bcg: "#fcefc7",
    },
    {
        title: "interviews scheduled",
        count: stats.interview || 0,
        icon: <FaCalendarCheck />,
        color: "#647acb",
        bcg: "#e0e8f9",
    },
    {
        title: "jobs declined",
        count: stats.declined,
        icon: <FaBug />,
        color: "#d66a6a",
        bcg: "#ffeeee",
    },
  ]
  return <Wrapper>
    {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
    })}
  </Wrapper>;
};

export default StatsContainer;
