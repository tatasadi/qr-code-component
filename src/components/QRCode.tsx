export default function QRCode() {
  return (
    <div className="bg-white p-4 w-80 font-outfit text-center rounded-[1.25rem]">
      <div className="bg-blue mb-4 p-16 rounded-[0.625rem] relative overflow-hidden">
        <div className="bg-blueshade w-80 h-80 absolute top-[-50%] left-[-40%] rounded-full z-1"></div>
        <div className="bg-blueshade w-64 h-64 absolute bottom-[-60%] right-[-30%] rounded-full z-1"></div>
        <img src="/images/qrcode.svg" className="z-10 relative" />
      </div>
      <h1 className="text-darknavy mb-6 text-[1.375rem] font-bold">
        Improve your front-end skills by building projects
      </h1>
      <p className="text-gray mb-4 mx-4 text-[0.9375rem] tracking-[0.01175rem]">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  )
}
