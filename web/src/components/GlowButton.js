import { Link } from "react-router-dom";

export default function GlowButton({
  to,
  label = "New Button",
  iconClassNames = "fa-solid fa-user",
  color = "gray",
  borderColor = "white",
  px = "3",
}) {
  return (
    <Link className="my-auto" to={to}>
      <div
        className={`flex flex-row items-center bg-${color} border-background border-[1px] hover:border-${borderColor} shadow-none px-${px} py-1 rounded-lg font-bold ease-out transition-all duration-200 hover:shadow-${color} hover:shadow-lg`}
      >
        <i className={iconClassNames}></i>
        <p className="mt-[.2rem] pl-3">{label}</p>
      </div>
    </Link>
  );
}
