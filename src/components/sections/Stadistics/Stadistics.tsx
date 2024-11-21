import './Stadistics.scss'
import { StadisticCard } from '../../StadisticCard/StadisticCard.tsx'
import iconRecognition from '/images/icon-brand-recognition.svg'
import iconRecord from '/images/icon-detailed-records.svg'
import iconCustomizable from '/images/icon-fully-customizable.svg'

export const Stadistics = () => {
    return (
        <section className="stadistics">
            <div className="stadistics__container container">
                <h2 className="stadistics-title">advanced stadistics</h2>
                <p className="stadistics-text">Track how your links are performing across the web with our advanced statistics dashboard.</p>

                <div className="stadistics__cards">
                    <StadisticCard
                        title='Brand Recognition'
                        text='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
                        image={iconRecognition}
                        alt='Brand Recognition'
                        key={iconRecognition}
                    />
                    <StadisticCard
                        title='Detailed Records'
                        text='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
                        image={iconRecord}
                        alt='Detailed Records'
                        key={iconRecord}
                    />
                    <StadisticCard
                        title='Fully Customizable'
                        text='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
                        image={iconCustomizable}
                        alt='Fully Customizable'
                        key={iconCustomizable}
                    />
                </div>
            </div>
        </section>
    )
}
