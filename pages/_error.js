import CustomHead from "../components/Shared/CustomHead";
import InnerHero from "../components/Shared/InnerHero";

function Error({ statusCode }) {
    return (
        <>
            <CustomHead
                title="404"
                metades="This is 404"
            />
            
            <InnerHero
                pageTitle="404 (Not Found)"
            />
            <p>
                {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
            </p>
        </>
      
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
export default Error
  