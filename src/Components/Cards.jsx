import { cardsData, getCardColor } from "../cardsData";
import './Cards.css';

export const Cards = () => {

    return (
        <div className="cards">
            {
                cardsData.map((card, index) => {
                    return <aside className='card' style={{ backgroundColor: getCardColor(index) }}>
                        <div className="cardText">
                            <h4 style={{
                                color: "#000",
                                fontFamily: "Lato",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal"
                            }}>{card.name}</h4>
                            <h2 style={{
                                color: "#000",
                                fontFamily: "Open Sans",
                                fontSize: "24px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal"
                            }}>{card.number}</h2>
                        </div>
                        <div id="cardIcon">
                            <img src={card.image} />
                        </div>
                    </aside>
                })
            }
        </div>
    )
}

export default Cards;