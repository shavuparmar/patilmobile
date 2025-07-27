// import Loading from "../assets/loading.gif";
import Loading from "../assets/loading.gif";

export default function Loding() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <img src={Loading} alt="Loading..." className="w-92 h-92" />
    </div>
  );
}
