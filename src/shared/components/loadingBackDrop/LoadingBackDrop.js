import './loadingBackDrop.css';
import Lottie from "lottie-react";
import loading from './loading.json'

const LoadingBackDrop = ({title}) => {
    return (
        <div className='backdrop-container'>
            <div className='backdrop-content'>
                <Lottie animationData={loading} loop={true} style={{width:'100px',height:'100px'}}/>
                {title}
            </div>
        </div>
    )
}
export default LoadingBackDrop;
