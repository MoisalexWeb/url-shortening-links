import './LinkShortened.scss'
import { useId } from 'react'

interface Props {
    originalLink: string
    shortenedLink: string
}

export const LinkShortened: React.FC<Props> = ({ originalLink, shortenedLink }) => {
    const idShortenedLink = useId()

    const copyToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
        const shortenedLink = document.getElementById(idShortenedLink) as HTMLSpanElement
        const btn = event.target as HTMLButtonElement

        if (shortenedLink) {
            navigator.clipboard.writeText(shortenedLink.innerText)
                .then(() => {
                    btn.textContent = 'copied!'
                    btn.classList.add('btn-copied')
                }).
                catch(error => {
                    btn.textContent = 'Failed to copy'
                    btn.classList.add('error-copy')
                    console.log(error)
                });

            setTimeout(() => {
                btn.textContent = 'copy'
                btn.classList.remove('btn-copied')
                btn.classList.remove('error-copy')
            }, 3000)
        }

    }

    
    return (
        <div className="linkShortened">
            <span className="linkShortened-original">{originalLink}</span>

            <div className="linkShortened__content">
                <span
                    className="linkShortened__content-shortened"
                    data-value={shortenedLink} id={idShortenedLink}
                >
                    {shortenedLink}
                </span>

                <button
                    className="linkShortened__content-btn"
                    onClick={copyToClipboard}
                >
                    copy
                </button>
            </div>
        </div>
    )
}
