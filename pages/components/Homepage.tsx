import { useState } from "react";

export default function Homepage() {
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    if (!msg.trim()) {
      alert("Please enter a message before submitting.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Message saved successfully!");
        setMsg("");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col mt-100 ml-20 gap-2">
          <textarea
            className="rounded-xl bg-amber-400 p-3 w-[20%]"
            placeholder="Enter your thoughts"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
          <button
            className="cursor-pointer w-[7%] bg-white rounded-lg px-2 py-1"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
