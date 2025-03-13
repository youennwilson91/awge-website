import '../CSS/Home.css'

export default function Item({ item, onClick }) {
    
    return (
        <>
            <img src={item.img} alt={item.text} className="home-menu-content-item" onClick={onClick} />
            <p className="item-text" style={{ color: item.color }} onClick={onClick}>{item.text}</p>
        </>
    )
}