export async function getServerSideProps({query}){
    const {slug}= query;

    const res = await fetch ("http://localhost:3000/api/services"+slug);
    const post = await res.json();

    return{
        props:{
            post
        }
    }
}



const BlogSinglePage = ({post})=>{
    return(
        <>
            <h1>{post.title}</h1>
        </>
    )
}

export default BlogSinglePage