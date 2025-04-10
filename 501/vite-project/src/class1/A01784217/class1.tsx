/*
* Nicole Dávila Hernández
* A01784217
* Class 1 - Arrow function component with destructuring 
*/

interface RenderImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
}

const RenderImage = ({ src, alt, width = '150px', height = '150px' }: RenderImageProps) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            style={{ width, height }}
        />
    );
};

export default RenderImage;