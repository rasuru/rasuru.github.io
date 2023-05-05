import classNames from "classnames";

export function NavBar() {
  const activeNavBarTab = getActiveNavBarTab();

  return (
    <nav className="mx-auto rounded-full py-2 px-3 bg-[rgb(22,22,43)] bg-opacity-60 font-medium backdrop-blur-lg">
      <ul className="flex space-x-2 transition-[font-size] md:space-x-4">
        <li
          className={classNames(
            "nav__link px-4 py-1 rounded-full transition-[padding] bg-opacity-30 backdrop-blur after:content-['/'] after:text-[10px] xs:after:text-xs after:inline-flex after:border-2 after:border-indigo-500 after:rounded-md after:h-5 after:pt-0.5 after:w-5 xs:after:w-6 xs:after:h-6 after:items-center after:justify-center after:ml-2 after:align-middle after:border-opacity-40 after:text-indigo-300",
            activeNavBarTab === NavBarTab.Work && "bg-[rgb(50,50,203)]"
          )}
        >
          <a href="/" className="align-middle">
            Work
          </a>
        </li>
        <li className="nav__link px-4 py-1 rounded-full transition-[padding]">
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

const NavBarTab = {
  Work: "work",
} as const;

type NavBarTab = (typeof NavBarTab)[keyof typeof NavBarTab];

function getActiveNavBarTab(): NavBarTab {
  // Later use window.location.pathname to implement this further
  return NavBarTab.Work;
}
