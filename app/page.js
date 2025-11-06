import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-[40vh] flex flex-col items-center justify-center text-white gap-3 m-3">
        <div className="flex gap-0 items-center justify-center text-3xl md:text-5xl font-bold">Get Me a Chai <span className="pb-5 md:pb-2.5"><img src="./tea.gif" width={75} alt="" /></span></div>
        <p className="text-center md:text-left text-gray-300">
          A crowdfunding platform for creators to fund their projects.
        </p>
        <p className="text-center md:text-left text-gray-500">
          A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.
        </p>
        <div className="flex gap-3 m-3">
          <Link href="/login"><button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <p className="text-3xl font-bold text-center">Your fans can buy you a chai</p>
        <div className="flex flex-col my-9 gap-9 justify-around md:flex-row">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>
    </>
  );
}
