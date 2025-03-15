import '../CSS/Home.css'

export default function Item({ item, onClick }) {


      
    return (
        <>
            <img src={item.img} alt={item.text} className="home-menu-content-item" onClick={item.id === 6 ? () => window.open("https://forms.sonymusicfans.com/campaign/asaprocky-dontbedumb/", '_blank') : onClick} />
            <p className="item-text" style={{ color: item.color }} onClick={item.id === 6 ? () => window.open("https://forms.sonymusicfans.com/campaign/asaprocky-dontbedumb/", '_blank') : onClick}>{item.text}</p>
        </>
    )
}