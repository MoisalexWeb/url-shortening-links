import './Cta.scss'

type centerCtaType = 'cta--center' | 'cta--centerLeft'

type PropsType = 
    { href: string, text: string, center: centerCtaType }
    | { href: string, text: string }


export const Cta: React.FC<PropsType> = ({ href, text, center }) => {
    const classname = center ? `cta ${center}` : 'cta'
    
    return (
        <a href={href} className={classname}>
            {text}
        </a>
    )
}