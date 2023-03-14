import { INavLinkType } from "@/types/app";
import Link from "next/link";
import React from "react";

const headerLinks: INavLinkType[] = [
  { id: 1, txt: "для дома", link: "/" },
  { id: 2, txt: "для бизнеса", link: "/" },
  { id: 3, txt: "технология", link: "/" },
  { id: 4, txt: "контакты", link: "/" },
];

const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex flex-row text-txtColor uppercase gap-x-14 text-base font-bold tracking-wider">
        {headerLinks.map((e) => (
          <li className="hover:text-black" key={e.id}>
            <Link href={e.link}>{e.txt}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
