import Image from "next/image";

export default function Home() {
  return (
    //Container
    <main className="flex justify-center h-screen mt-2 mx-2  ">
      <div className="w-full grid grid-cols-4 gap-2 ">
        {/* item Column Backlog */}
        <div className=" bg-slate-800  rounded-xl p-2 ">
          <div className=" text-cyan-50 text-left mx-2 mt-2  ">
            <h1 className="text-3xl font-semibold tracking-wide">Backlog</h1>
          </div>
          <div className="mt-2 mx-1">Cards</div>
        </div>

        {/* item Column To do */}
        <div className=" bg-slate-800  rounded-xl p-2 ">
          <div className=" text-cyan-50 text-left mx-2 mt-2  ">
            <h1 className="text-3xl font-semibold tracking-wide">To do</h1>
          </div>
          <div className="mt-2 mx-1">Cards</div>
        </div>

        {/* item Column In progress */}
        <div className=" bg-slate-800  rounded-xl p-2 ">
          <div className=" text-cyan-50 text-left mx-2 mt-2  ">
            <h1 className="text-3xl font-semibold tracking-wide">
              In progress
            </h1>
          </div>
          <div className="mt-2 mx-1">Cards</div>
        </div>

        {/* item Column Designed */}
        <div className=" bg-slate-800  rounded-xl p-2 ">
          <div className=" text-cyan-50 text-left mx-2 mt-2  ">
            <h1 className="text-3xl font-semibold tracking-wide">Designed</h1>
          </div>
          <div className="mt-2 mx-1">Cards</div>
        </div>
      </div>
    </main>
  );
}
