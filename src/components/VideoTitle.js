
const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-12 "> 
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="pt-5 w-1/2 pb-4">{overview}</p>

      <div className="">

      <button className=" bg-black text-white p-4 px-8 mr-3  rounded-lg ">▶ Play</button>
      <button className=" bg-black text-white p-4 px-10 ml-3 bg opacity-50 rounded-lg">ⓘ More Info</button>
      </div>

    
    </div>
  )
}

export default VideoTitle;