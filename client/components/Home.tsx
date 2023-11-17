import EventList from "./EventList"

function Home() {
  // GET DB FUNCTION
  return (
    <>
    <h2 className="page-title">
      Find like-minded people doing cool things for the <em>whenua</em> in your
      hapori!
    </h2>
    
    <EventList />
    </>
  )
}

export default Home
