import BrandList from "@/components/BrandList"
import FeaturedProjects from "@/components/FeaturedProjects"
import HeroList from "@/components/HeroList"
import NavBar from "@/components/NavBar"
import SiteFooter from "@/components/SiteFooter"
import Stats from "@/components/Stats"
import Subscribe from "@/components/Subscribe"
import WorkList from "@/components/WorkList"



const page = () => {
  return (
    <div>
      <HeroList />
      <BrandList />
      <WorkList />
      <Stats />
      <FeaturedProjects />
      <Subscribe />
    </div>
  )
}

export default page