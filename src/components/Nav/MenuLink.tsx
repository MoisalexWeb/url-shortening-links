interface Props {
    href: string
    text: string
    onClick: () => void
}

export const MenuLink: React.FC<Props> = ({ href, text, onClick }) => {
    return (
        <li>
            <a
                href={href}
                className="nav__links__ul-link"
                onClick={onClick}
            >
                {text}
            </a>
        </li>
    )
}