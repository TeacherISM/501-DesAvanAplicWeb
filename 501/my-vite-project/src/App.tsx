import { useState } from 'react';
import './App.css';

import RenderingImage from './class1/A01784399/class1';
import Button from './class2/A01784399/components/Button';
import Login from './class2/A01784399/pages/Login';
import StatePage from './class3/A01784399/class3';
import Success from './class2/A01784399/pages/Success';

// Define all possible page types
type Page = 'home' | 'login' | 'state' | 'success';

function App() {
    const [currentPage, setCurrentPage] = useState<Page>('home');

    // Central navigation handler
    const navigate = (page: Page) => setCurrentPage(page);

    const backgroundImageUrl = "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_640/https://www.strathornfarm.co.uk/wp-content/uploads/2024/12/bay-3-1024x640.jpg";
    const loginBackgroundImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR582vbcr3CFjAUk-ebhShpLRVvs6u1FJ9Y6w&s";
    const statePageBackgroundImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfAPhttpskZnWUjeGptlUw_hTPSSb6U2fw1Isadg&s"
    const pages = {
        home: (
            <div>
                <RenderingImage 
                    src={backgroundImageUrl}
                    alt="Welcome to the Home Page "
                    width="100%"
                    height="100vh"  
                />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                    
                    <div>
                        <Button label="Login" onClick={() => navigate('login')} />
                        <Button label="Counter" onClick={() => navigate('state')} />
                    </div>
                </div>
            </div>
        ),
        login: (
            <div>
                <RenderingImage 
                    src={loginBackgroundImageUrl}
                    alt="Welcome and Enjoy, Please Login"
                    width="100%"
                    height="100vh"
                />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                    <Login GoBack={() => navigate('home')} onLoginSuccess={() => navigate('success')} />
                </div>
            </div>
        ),
        state: (
            <div>
                <RenderingImage 
                    src={statePageBackgroundImageUrl}
                    alt="Welcome to our Counter Page"
                    width="100%"
                    height="100vh"
                />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                    <StatePage GoBack={() => navigate('home')} />
                </div>
            </div>
        ),
        success: <Success GoBack={() => navigate('home')} />
    };

    return <>{pages[currentPage]}</>;
}

export default App;
