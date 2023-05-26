import IImageProps from "../interfaces/IImgae"

const Image = ({imgSRC, imgALT, className}:IImageProps) =>{

    return <img src={imgSRC} alt={imgALT} className={className}/>
}

export default Image;