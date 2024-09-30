
import NavigationElements from "@/components/Navigation/NavigationElements";

import HomeDefaultPage from "@/components/Home/home";

export default function LandingPage(){
  return(
    <div className="overflow-x-hidden">
       <NavigationElements/>
       <HomeDefaultPage/>     
    </div>
  )
}