import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {
    const {data, loading, error} = useFetch("/hotels/countByCity?cities=hanoi,hcm,danang")
    
    console.log(data);

    return (
        <div className="featured">
            {loading ? ("Loading please wait"
            ) : (<><div className="featuredItem">
                    <img className='featuredImg' src="https://images.unsplash.com/photo-1554357475-accb8a88a330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="Place 1" />
                    <div className="featuredTitle">
                        <h1>Hà Nội</h1>
                        <h2>{data[0]} properties!</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImg' src="https://images.unsplash.com/photo-1554357475-accb8a88a330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="Place 1" />
                    <div className="featuredTitle">
                        <h1>TP.HCM</h1>
                        <h2>{data[1]} properties!</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImg' src="https://images.unsplash.com/photo-1554357475-accb8a88a330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="Place 1" />
                    <div className="featuredTitle">
                        <h1>Đà Nẵng</h1>
                        <h2>{data[2]} properties!</h2>
                    </div>
                </div></>)
            }
        </div>
    )
}

export default Featured