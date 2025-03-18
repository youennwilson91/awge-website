

export default function Item({ item, onClick }) {


      
    return (
        <>
            <div className="flex justify-center items-center w-full">
                <img 
                    src={item.img} 
                    alt={item.text} 
                    className="h-[4rem] z-[12] cursor-pointer" 
                    onClick={item.id === 6 ? () => window.open("https://forms.sonymusicfans.com/campaign/asaprocky-dontbedumb/", '_blank') : onClick} 
                />
            </div>
            <p 
                className="mt-[20px] text-shadow text-center w-full" 
                style={{ color: item.color }} 
                onClick={item.id === 6 ? () => window.open("https://forms.sonymusicfans.com/campaign/asaprocky-dontbedumb/", '_blank') : onClick}
            >
                {item.text}
            </p>
        </>
    )
}
    