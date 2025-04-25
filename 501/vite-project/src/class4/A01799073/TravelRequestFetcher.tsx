import React, { useState, useEffect } from 'react';
import '../../class5/A01799073/styles/neonform.css';

interface TravelRequest {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

type FetcherProps = {
  render: (args: { travelRequests: TravelRequest[], loading: boolean, error: any }) => React.ReactNode;
};

const TravelRequestFetcher: React.FC<FetcherProps> = ({ render }) => {
  const [travelRequests, setTravelRequests] = useState<TravelRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setTravelRequests([
        { id: 1, destination: "TOKIO", startDate: "2023-05-01", endDate: "2023-05-07", purpose: "Conference" }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return <>{render({ travelRequests, loading, error })}</>;
};

export default TravelRequestFetcher;
