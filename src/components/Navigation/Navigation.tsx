export const Navigation = () => {
  return (
    <nav className="w-screen py-1 fixed z-10 text-lg bg-main-gray/75">
      <ul className="flex gap-4 justify-center">
        <li>
          <button className="hover:text-main-blue">ABOUT</button>
        </li>
        <li>
          <button className="hover:text-main-blue">EDUCATION</button>
        </li>
        <li>
          <button className="hover:text-main-blue">SKILL</button>
        </li>
        <li>
          <button className="hover:text-main-blue">PROJECT</button>
        </li>
        <li>
          <button className="hover:text-main-blue">CONTACT</button>
        </li>
      </ul>
    </nav>
  );
};
