export default function Loading() {
  return (
    <div className="flex justify-center items-center gap-3 h-screen">
      <p className="text-lg font-bold text-black">Loading</p>
      <div className="flex justify-center items-center gap-2 h-screen">
        <span className="w-4 h-4 rounded-full bg-red-800 animate-bounce"></span>
        <span className="w-4 h-4 rounded-full bg-red-700 animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]"></span>
      </div>
    </div>
  );
}
