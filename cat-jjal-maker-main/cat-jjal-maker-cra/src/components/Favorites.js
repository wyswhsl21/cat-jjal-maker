function Favorites({ favorites }) {

    if (favorites.length === 0) {
        return <div>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</div>
    }
    return (
        <ul className="favorites">
            {favorites.map(cat => <CatItem img={cat} key={cat} />)}

            <CatItem img='https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript' />
        </ul>
    )
};

export default Favorites