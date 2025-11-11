import { useState } from "react";
import toast from "react-hot-toast";

export default function Homepage() {
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    if (!msg.trim()) {
      toast.error("Please pour your heart into verse before submitting.", {
        icon: "📝",
      });
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
        toast.success("Your poetry has been immortalized! ✨", {
          icon: "🎭",
        });
        setMsg("");
      } else {
        toast.error(`Error: ${data.error}`, {
          icon: "💔",
        });
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      toast.error("Failed to submit poetry. Please try again.", {
        icon: "🌹",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col mt-100 ml-20 gap-2">
          <textarea
            className="rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 p-6 w-[35%] h-48
                       border-3 border-amber-600 shadow-2xl font-serif text-lg text-gray-800
                       focus:outline-none focus:ring-4 focus:ring-amber-400/50 focus:border-amber-500
                       placeholder-amber-600/70 resize-none
                       hover:shadow-amber-400/30 transition-all duration-300
                       backdrop-blur-sm"
            placeholder="Let your soul spill onto parchment... Write verses that dance with moonlight, sing with the wind, and whisper secrets of the heart. Pour forth your poetry here... 🌙✨"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
          <button
            className="cursor-pointer w-[12%] bg-gradient-to-r from-amber-700 to-amber-800 
                       hover:from-amber-600 hover:to-amber-700 text-amber-100 font-bold
                       rounded-xl px-6 py-3 text-lg font-serif
                       border-2 border-amber-600 hover:border-amber-400
                       shadow-lg hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300 hover:shadow-amber-400/40
                       flex items-center justify-center gap-2"
            onClick={handleSubmit}
          >
            <span>📜</span>
            <span>Submit Poetry</span>
          </button>
        </div>
      </div>
    </>
  );
}
