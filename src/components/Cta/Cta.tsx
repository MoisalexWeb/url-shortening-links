import './Cta.scss'

type centerCtaType = 'cta--center' | 'cta--centerLeft'

interface PropsType {
    href: string,
    text: string,
    center: centerCtaType
}


export const Cta: React.FC<PropsType> = ({ href, text, center }) => {
    const classname = center ? `cta ${center}` : 'cta'

    return (
        <a href={href} className={classname}>
            {text}
        </a>
    )
}