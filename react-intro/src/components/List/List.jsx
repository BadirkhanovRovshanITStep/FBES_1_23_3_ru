export function List({ cards }) {
    return (
        <ul className='list'>
            <li className="list-item">
                <div className='card'>
                    <div className='title'>{cards[0].title}</div>
                    <div className='description'>{cards[0].description}</div>
                </div>
            </li>
            <li className="list-item">
                <div className='card'>
                    <div className='title'>{cards[1].title}</div>
                    <div className='description'>{cards[1].description}</div>
                </div>
            </li>
        </ul>
    )
}