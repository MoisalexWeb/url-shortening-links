import './Boost.scss'
import { Cta } from '../../Cta/Cta'

export const Boost = () => {
    return (
        <section className="boost">
            <h2 className="boost-title">Boost your links today</h2>

            <Cta
                text='get started'
                href='#'
                center='cta--center'
            />
        </section>
    )
}
