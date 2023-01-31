import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {
    const {data, loading, error} = useFetch("/hotels/countByCity?cities=Hà Nội,HCM,Đà Nẵng")
    
    console.log(data);

    return (
        <div className="featured">
            {loading ? ("Loading please wait"
            ) : (<><div className="featuredItem">
                    <img className='featuredImg' src="https://uploads.nguoidothi.net.vn/content/28c65c35-0585-4fd7-b0b5-503162207deb.jpg" alt="Hà Nội" />
                    <div className="featuredTitle">
                        <h1>Hà Nội</h1>
                        <h2>{data[0]} chỗ nghỉ!</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImg' src="https://images.wallpaperscraft.com/image/single/city_aerial_view_buildings_191753_1024x768.jpg" alt="TP.HCM" />
                    <div className="featuredTitle">
                        <h1>TP.HCM</h1>
                        <h2>{data[1]} chỗ nghỉ!</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImg' src="https://hanoitourist.com.vn/images/destination/2018/11/30/original/danang_1543552135.jpeg" alt="Đà Nẵng" />
                    <div className="featuredTitle">
                        <h1>Đà Nẵng</h1>
                        <h2>{data[2]} chỗ nghỉ!</h2>
                    </div>
                </div></>)
            }
        </div>
    )
}

export default Featured