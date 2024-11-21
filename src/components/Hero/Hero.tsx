import './Hero.scss'
import { Cta } from '../Cta/Cta.tsx'
import heroImage from '/images/illustration-working.svg'

export const Hero = () => {
    return (
        <section className="hero container">
            <figure className="hero__figure">
                <img src={heroImage} alt="Illustration working" className="hero__figure-img" />
            </figure>

            <div className="hero__texts">
                <h1 className="hero__texts-title">More that just shorter links</h1>
                <p className="hero__texts-text">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <Cta
                    text='get started'
                    href='#'
                    center='cta--centerLeft'
                />
            </div>
        </section>
    )
}