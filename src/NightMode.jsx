import React, { useEffect, useState } from "react";
import { Switch } from "antd"; 
const NightMode = () => {
  const [nightMode, setNightMode] = useState(() => {
    return JSON.parse(localStorage.getItem("nightMode")) || false
  });
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    setNightMode(checked)
    
  };
  useEffect(() => {
    localStorage.setItem("nightMode", JSON.stringify(nightMode))
    document.body.classList.toggle("dark-mode", nightMode);
  }, [nightMode])
  return (
    <div className="switch">
      <Switch defaultChecked={false} value={nightMode} onChange={onChange} />
      <p>{nightMode ? "Dark Mode" : "Light Mode"}</p>
    </div>
  );
};
export default NightMode