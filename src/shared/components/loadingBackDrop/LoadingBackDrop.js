import './loadingBackDrop.css';

const LoadingBackDrop = ({title}) => {
    return (
        <div className='backdrop-container'>
            <div className='backdrop-content'>
                {title}
            </div>
        </div>
    )
}
export default LoadingBackDrop;
