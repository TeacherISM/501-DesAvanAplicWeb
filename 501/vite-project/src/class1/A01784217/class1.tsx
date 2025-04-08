// arrow function component that renders an image, called in app.tsx

const RenderImage = () => {
    return (
        <img 
            src="https://i.pinimg.com/736x/61/56/1a/61561ac8460bc39acd0e751e5cad7b4d.jpg" 
            alt="dog" 
            style={{ width: '150px', height: '150px' }}
        />
    );
};

export default RenderImage;