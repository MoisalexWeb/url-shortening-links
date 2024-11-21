import './Shortening.scss'
import { useValidInput } from './hook/useValidInput.tsx'
import { useId, useState } from 'react'
import { fetchData } from './service/fetchData.ts'
import { LinkShortened } from '../../LinkShortened/LinkShortened.tsx'

interface LinkData { 
    shortLink: string
    longLink: string
}

interface ApiResult {
    status: boolean
    linkResult: string
    linkOriginal: string
}

export const Shortening = () => {
    const { validURL } = useValidInput()
    const inputId = useId()
    const [flag, setFlag] = useState<boolean | undefined>(undefined);
    const [shortenedLinks, setShortenedLinks] = useState<LinkData[]>([])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const input = document.getElementById(inputId) as HTMLInputElement
        const link = input.value;

        if (validURL(link)) {
            const data: ApiResult = await fetchData(link);

            if (data.status) {
                input.value = '';
                setFlag(true)

                setShortenedLinks((prevLinks) => [
                    ...prevLinks,
                    {
                        shortLink: data.linkResult,
                        longLink: data.linkOriginal
                    }
                ])
            } else {
                alert('The link could not be shortened')
            }
        } else {
            setFlag(false)
        }
    }

    return (
        <section className="shortening">
            <div className="shortening__container container">
                <form className="shortening__form" onSubmit={handleSubmit}>
                    <input type="text" id={inputId} className="shortening__form-input" placeholder='Shorten a link here...' />
                    {
                        (flag === false) && <span className="shortening__form-error">Add a valid link</span>
                    }
                    <input type="submit" className="shortening__form-submit" value="Shorten it!" />
                </form>

                <div className="shortening__links">
                    {
                        (shortenedLinks.length > 0) &&
                        <>
                            <button 
                                className="shortening__links-delete"
                                onClick={() => setShortenedLinks([])}
                            >
                                Delete recents links
                            </button>
                            {
                                shortenedLinks.map((item, index) => {
                                    return (
                                        <LinkShortened
                                            originalLink={item.longLink}
                                            shortenedLink={item.shortLink}
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </>
                    }
                </div>
            </div>
        </section>
    )
}
