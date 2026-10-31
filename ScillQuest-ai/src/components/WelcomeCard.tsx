type WelcomeCardProps = {
  name: string;
  message: string;
};


function WelcomeCard({ name, message }: WelcomeCardProps){
  return (
    <div>
      <h1>Welcome,{name}! </h1>
      <p>{message}</p>
      
    </div>
  );
}

export default WelcomeCard;
