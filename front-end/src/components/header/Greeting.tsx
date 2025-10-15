//Great the user based on the time of the day Welcome {Username,}, Good morning, Good afternoon, Good evening
import { useState } from "react";

export default function Greeting() {
  const [time] = useState(new Date().getHours());
  const [username] = useState("Amaziro");  // Add your username here
  //Add icon off morning icon or afternon icon or evening icon
  const morningIcon = "🌞";     
  const afternoonIcon = ""; //StarIcon
  const eveningIcon = ""; //MoonIcon
  const icon = time < 12? morningIcon: time < 18? afternoonIcon: eveningIcon;
  const greeting = time < 12? "Good morning": time < 18? "Good afternoon": "Good evening";

  return (
    <h1 className="py-1 sm:py-2 text-gray-900 dark:text-white">
      Welcome {username}, {greeting}! {icon}
    </h1>
  );
}