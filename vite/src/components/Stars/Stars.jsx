import { Star } from "../Star/Star";
import style from './stars.module.css'

export const Stars = (props) => {
    const { count } = props;

    if (typeof count !== 'number' || count < 1 || count > 5) {
        return null
    }

    const starsArray = Array.from({ length: count }, (_, index) => <Star key={index} />);

    return (
        <>
        <ul className={style["card-body-stars"]}>
            {starsArray}
        </ul>

        </>
    )

}

export default Stars;