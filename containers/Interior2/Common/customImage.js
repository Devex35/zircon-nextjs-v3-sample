import styled from 'styled-components';
import Image from 'next/image';

export const ImageContainer = styled.div`

    > span{
        position:unset !important;
    }

    .image {
        object-fit: contain;
        width: 100% !important;
        position: relative !important;
        height: unset !important;
    }   
`;

const CustomImageComponent = (props) => {
    return(
    <ImageContainer style={props.containerStyles} className={props.containerClass?props.containerClass:""}>
        <Image 
            src={props.imageSrc}
            layout={props.layout?props.layout:"fill"}
            alt={props.alt?props.alt:""}
            className="image"
        />
    </ImageContainer>
    )
}

export default CustomImageComponent;