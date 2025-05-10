import React from 'react';

// Define the props interface for the image component
interface RenderingImageProps {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
}

// This is a reusable image component that uses destructuring and default values
const RenderingImage = ({
    src,
    alt = 'Image',
    width = '100%',
    height = '100vh',  // Ensure the image covers the full height of the page
}: RenderingImageProps) => {
    return (
        <div
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',  // Make sure the image covers the full container
                backgroundPosition: 'center',  // Center the image
                width: width,  // Apply width from props or default to 100%
                height: height,  // Apply height from props or default to 100vh
            }}
        >
            <div style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
                <h1>{alt}</h1>  {/* Display alt text on top of the background image */}
            </div>
        </div>
    );
};

export default RenderingImage;