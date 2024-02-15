const Shimmer=()=>{ //dummy
    return(
    <>
        <div className="restaurant-list">
                {Array(9).fill("").map((e,idx)=> <div key={idx} className="shimmer-card"> </div>)}
        </div>
     </>
    )
}

export default Shimmer