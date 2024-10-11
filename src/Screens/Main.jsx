import Content from "../Component/Content"
import OnlyFans from "../Component/OnlyFans"
import PersonelInfo from "../Component/PersonelInfo"
import Photo from "../Component/Photo"
import SocialMedia from "../Component/SocialMedia"
import Work from "../Component/Work"

const Main = () => {
  return (
    <div className="lg:py-10 lg:px-60 ">
      <PersonelInfo />
      <OnlyFans />
      <Content />
      <SocialMedia />
      <Photo />
      <Work />

    </div>
  )
}

export default Main