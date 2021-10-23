export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return{
        props:{
            data
        }
    }
}

const UrlFetch = ( {data} )=>{   
    return(
        <>
        {
            data.map((item,i)=>{
                return(
                    <div key={i}>
                        <p>{item.id}</p>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                )
            })
        }
            
        </>
    )
}

export default UrlFetch