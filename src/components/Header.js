

const Header = () => {
  return (
<header>
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
   <div className="absolute flex justify-between p-4 w-full items-center">
    <div className="w-40">
    <img src=" https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />  
    </div>
    <div className="">
    <button onClick={() => alert("Login Clicked")} className= " p-2 my-2 bg-red-700 text-white w-full rounded">Sign In </button>
    </div>
    </div>
    </header>
  )
}

    //<img src="https://play-lh.googleusercontent.com/j6vz-GIwLT1yRnspp3-x3usIn6cQPeQRTj8Lz_M9NQcEjg89B_xDSdr2drbwWdq0-XI=w480-h960-rw" alt="BingeIT Logo" className="w-20 h-20"/>


export default Header;