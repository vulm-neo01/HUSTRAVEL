import "./propertyList.css"
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
    const {data, loading, error} = useFetch("/hotels/countByType");

    const images = [
        "http://du-lich.chudu24.com/f/m/2206/15/khach-san-nesta-da-nang.png",
        "https://rhotelgeelong.com.au/wp-content/uploads/2021/03/R-Hotel-Geelong-1-Bedroom-8-scaled.jpg",
        "https://file4.batdongsan.com.vn/2021/06/17/JGcIp0rf/20210617172417-2f9e.jpg",
        "https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg",
        "https://pictures.lodgix.com/media/gallery/property-75953/i018511_preview.jpg"
    ]

    return (
        <div className="pList">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data && images.map((img, i) => (
                        <div className="pListItem" key={i}>
                            <img src= {img}
                            alt=""
                            className="pListImg"/>
                            <div className="pListTitle">
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                            </div>
                        </div>
                    ))}
                </>)
            }
        </div>
    )
}

export default PropertyList