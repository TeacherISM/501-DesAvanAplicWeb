interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage = ({ name }: WelcomeMessageProps) => {
  return (
    <div className="welcome-message">
      <h1>Welcome, {name}!</h1>
      <p>We are glad to have you here.</p>
    </div>
  );
};

export default WelcomeMessage;