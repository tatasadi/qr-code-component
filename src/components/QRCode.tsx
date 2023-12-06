export default function QRCode() {
  return (
    <div className="max-w-xs p-4 rounded-2xl bg-white font-['Outfit']">
      <div className="bg-[#2C7DFA] flex justify-center items-center p-12 rounded-xl relative overflow-hidden">
        <div className=" bg-[#3685FF] w-80 h-80 absolute z-0 rounded-full top-[-70%] left-[-44%]"></div>
        <div className=" bg-[#3685FF] w-64 h-64 absolute z-0 rounded-full bottom-[-75%] right-[-30%]"></div>
        <img src="/images/qrcode.svg" alt="qr-code" className="z-10" />
      </div>
      <div className="p-4 text-center">
        <h1 className="font-bold text-[1.375rem] text-[#1F314F] mb-2">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[#7D889E] text-[0.9375rem]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}
