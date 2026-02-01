
const VideoTitle = ({title, overview, onPlay}) => {
  return (
    <div className=" w-screen h-screen absolute pt-[20%]  px-24 text-white bg-gradient-to-r from-black/50 to-transparent "> 
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="pt-5 w-1/2 pb-4">{overview}</p>

      <div className="">

      <button onClick={onPlay} className=" bg-white text-black p-4 px-8 mr-3  rounded-lg hover:bg-opacity-50">▶ Play</button>
      <button className=" bg-black text-white p-4  px-10 ml-3 bg opacity-70 rounded-lg">ⓘ More Info</button>
      </div>

    
    </div>
  )
}

export default VideoTitle;