import Link from "next/link";

export default function NavLink(prop){
    return (<>
            <li className="nav-item mx-4 " {...(prop.active && { active: "true" })}>
              <Link href={prop.href}>
                <a className="nav-link">{prop.title}</a>
              </Link>
            </li>
            </>)
  }