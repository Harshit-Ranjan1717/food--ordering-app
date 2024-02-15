import { useState } from "react"

const Section=({title,description,isVisible,setIsVisible})=>{
    // const [isVisible,setIsVisible]=useState(false)
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible?  <button onClick={()=> setIsVisible(false)} className="cursor-pointer bg-purple-300 p-2 m-2 rounded-md">hide</button>:<button onClick={()=> setIsVisible(true)} className="cursor-pointer  bg-purple-300 p-2 m-2 rounded-md">Show</button>
            }
        
            { isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart=()=>{
    const [visibleSection,setVisibleSection]=useState("team")
    return <div>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
       
        <Section isVisible={visibleSection==="about"}  setIsVisible={()=>setVisibleSection("about")} title ={"About Instamart"} description={"This is the about section of Instamar At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "}/>

        <Section  isVisible={visibleSection==="team"} setIsVisible={()=>setVisibleSection("team")}  title={"Team Instamart"} description={"This is the team section of Instamart.The team has 50 memebers  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}/>

        <Section isVisible={visibleSection==="career"} setIsVisible={()=>setVisibleSection("career")}  title ={"Career"} description={"This is the career section of Instamart.The team has 50 memebers At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}/>

        
        {/* <AboutInstaMart></AboutInstaMart>
        <DetailsOfInstaMart></DetailsOfInstaMart>
        <TeamInstaMart></TeamInstaMart>
        <Product></Product>
        <Careers></Careers> */}

    </div>
}

export default Instamart