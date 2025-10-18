export default function Homepage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col mt-100 ml-20 gap-2">
          <textarea
            className="rounded-xl bg-amber-400 p-3 w-[20%]"
            placeholder="Enter your thoughts"
          ></textarea>
          <button className="cursor-pointer w-[7%] bg-white rounded-lg px-2 py-1">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
