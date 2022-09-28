import InputShortner from "../inputshortner/InputShortner"
import ShortnerList from "../shortnerList/ShortnerList"

const Home = () => {
  return (
    <div className='homeComponent'>
      <InputShortner />
      <ShortnerList />
    </div>
  )
}

export default Home