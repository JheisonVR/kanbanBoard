import { EntryList, NewEntry } from "./ui";

export default function Home() {
  return (
    //Container
    <main className="flex justify-center mt-2 mx-2">
      <div className="w-full grid grid-cols-4 gap-2">
        {/* item Column Backlog */}
        <div className=" bg-[#262626]  rounded-xl p-2 ">
          <div className=" text-cyan-50 text-left mx-2 mt-2 py-2 px-2  ">
            <h1 className="text-3xl font-semibold tracking-wide">Backlog</h1>
            <NewEntry/>
          </div>
          <div className="mt-2 mx-1">
            <EntryList status="Backlog" />
          </div>
        </div>

        {/* item Column To do */}
        <div className=" bg-[#262626]  rounded-xl p-2 ">
          <div className=" text-cyan-50 text-left mx-2 mt-2 py-2 px-2  ">
            <h1 className="text-3xl font-semibold tracking-wide">To do</h1>
          </div>
          <div className="mt-2 mx-1">
            <EntryList status="To do" />
          </div>
        </div>

        {/* item Column In progress */}
        <div className=" bg-[#262626]  rounded-xl p-2 ">
          <div className=" text-cyan-50 text-left mx-2 mt-2 py-2 px-2 ">
            <h1 className="text-3xl font-semibold tracking-wide">
              In progress
            </h1>
          </div>
          <div className="mt-2 mx-1">
            <EntryList status="In progress" />
          </div>
        </div>

        {/* item Column Designed */}
        <div className=" bg-[#262626]  rounded-xl p-2 ">
          <div className=" text-cyan-50 text-left mx-2 mt-2 py-2 px-2  ">
            <h1 className="text-3xl font-semibold tracking-wide">Designed</h1>
          </div>
          <div className="mt-2 mx-1">
            <EntryList status="Designed" />
          </div>
        </div>
      </div>
    </main>
  );
}
