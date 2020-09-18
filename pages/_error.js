const CustomError = ({statusCode}) => {
    if(statusCode === 404){
        return <div>This is an error</div>
    }
    return <h1>Oops! Something went wrong...</h1>
    
}

CustomError.getInitialProps = ({ err, res}) => {
    return { statusCode: res ? res.statusCode : err ? err.statusCode : 404} 
}

export default CustomError