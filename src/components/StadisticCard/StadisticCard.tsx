import './StadisticCard.scss'

interface Props {
    title: string
    text: string
    image: string
    alt: string
}

export const StadisticCard: React.FC<Props> = ({ image, title, text, alt }) => {
    return (
        <div className='stadisticCard'>
            <figure className="stadisticCard__figure">
                <img src={image} alt={alt} className="stadisticCard__figure-img" />
            </figure>

            <h3 className="stadisticCard-title">{title}</h3>

            <p className="stadisticCard-text">{text}</p>
        </div>
    )
}
