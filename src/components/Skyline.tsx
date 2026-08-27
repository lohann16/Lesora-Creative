export default function Skyline({ className = "" }: { className?: string }) {
  return (
    <img
      src="/Skyline.png"
      alt=""
      aria-hidden="true"
      className={`w-full h-auto translate-y-[20%] ${className}`}
    />
  );
}