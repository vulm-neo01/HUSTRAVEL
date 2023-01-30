import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {
    const {data, loading, error} = useFetch("")

    return (
        <div className="featured">
            <div className="featuredItem">
                <img className='featuredImg' src="https://images.unsplash.com/photo-1554357475-accb8a88a330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="Place 1" />
                <div className="featuredTitle">
                    <h1>Ha Noi</h1>
                    <h2>Great Place!</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://images.unsplash.com/photo-1554357475-accb8a88a330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="Place 1" />
                <div className="featuredTitle">
                    <h1>TP.HCM</h1>
                    <h2>VIP for you</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://images.unsplash.com/photo-1554357475-accb8a88a330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="Place 1" />
                <div className="featuredTitle">
                    <h1>Thanh Hoa</h1>
                    <h2>Nem chua so 1</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured