interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage = ({ name }: WelcomeMessageProps) => {
  return (
    <div className="welcome-message">
      <h1>Welcome, {name}!</h1>
      <p>Is always nice to see you here.</p>
    </div>
  );
};

export default WelcomeMessage;