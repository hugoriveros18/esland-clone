import Link from "next/link"

interface MenuItem {
    title: string
    slug: string
}

interface FooterMenuProps {
    title: string
    items: MenuItem[]
}

export default function FooterMenu({
    title,
    items
}:FooterMenuProps) {

    // JSX
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                {title}
            </h2>
            <ul className="flex flex-col gap-2 font-medium text-gray-400">
                {
                    items.map(item => {
                        return (
                            <li
                                key={item.title}
                            >
                                <Link
                                    href={item.slug}
                                    className="hover:underline hover:text-[#fde047] duration-300"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
