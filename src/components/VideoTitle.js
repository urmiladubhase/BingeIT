
const VideoTitle = ({title, overview, onPlay}) => {
  return (
    <div className=" w-screen aspect-video absolute pt-36 px-12 text-white bg-gradient-to-r from-black/30 "> 
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="pt-5 w-1/2 pb-4">{overview}</p>

      <div className="">

      <button onClick={onPlay} className=" bg-black text-white p-4 px-8 mr-3  rounded-lg ">▶ Play</button>
      <button className=" bg-black text-white p-4 px-10 ml-3 bg opacity-50 rounded-lg">ⓘ More Info</button>
      </div>

    
    </div>
  )
}

export default VideoTitle;