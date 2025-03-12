import '../CSS/Home.css'

export default function Item({ item }) {
    
    return (
        <>
            <img src={item.img} alt={item.text} className="home-menu-content-item" />
            <p className="item-text" style={{ color: item.color }}>{item.text}</p>
        </>
    )
}