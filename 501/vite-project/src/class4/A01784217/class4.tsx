/*
* Nicole Dávila Hernández
* A01784217
* Class 4 - Custom hook and travel request list
*/

import { useState, useEffect } from 'react';

export const useFetchTravelRequests = () => {
    const [travelRequests, setTravelRequests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // Simulate fetching with timeout (mock data)
        setTimeout(() => {
            try {
                const mockData = [
                    { id: 1, destination: 'Tokyo, Japan' },
                    { id: 2, destination: 'Paris, France' },
                    { id: 3, destination: 'New York, USA' }
                ];
                setTravelRequests(mockData);
                setLoading(false);
            } catch (err: any) {
                setError(err);
                setLoading(false);
            }
        }, 1000);
    }, []);

    return { travelRequests, loading, error };
};

export const TravelRequestList = ({ onBack }: { onBack: () => void }) => {
    const { travelRequests, loading, error } = useFetchTravelRequests();

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Travel Requests</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {travelRequests.map((req) => (
                    <li key={req.id} style={{ margin: '10px 0' }}>
                        ✈️ {req.destination}
                    </li>
                ))}
            </ul>
            <button onClick={onBack}>Back to Home</button>
        </div>
    );
};
