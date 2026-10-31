type XPCardProps = {
  xp: any;
  onEarnXP: any;
};

function XPCard({ xp, onEarnXP }: XPCardProps) {
  return (
    <div>
      <h2>Total XP: {xp}</h2>

      <button onClick={onEarnXP}>Earn 50 XP</button>
    </div>
  );
}

export default XPCard;
