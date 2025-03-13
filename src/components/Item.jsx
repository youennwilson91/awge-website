import '../CSS/Home.css'

export default function Item({ item, onClick }) {

    const handleRockyClick = () => {
        window.location.href = "https://forms.sonymusicfans.com/campaign/asaprocky-dontbedumb/";
      }
      
    return (
        <>
            <img src={item.img} alt={item.text} className="home-menu-content-item" onClick={item.id === 6 ? handleRockyClick : onClick} />
            <p className="item-text" style={{ color: item.color }} onClick={item.id === 6 ? handleRockyClick : onClick}>{item.text}</p>
        </>
    )
}