import BlurredCard from '../components/Card';

function Dashboard() {
  return (
    <div
      style={{
        backgroundColor: '#191B1F',
        height: '100vh',
      }}
    >
      <BlurredCard style={{ width: '200px' }}>
        <p style={{color:'white'}}>Hi Hello How are you</p>
      </BlurredCard>
      <BlurredCard style={{ width: '200px' }}>Hi Hello How are you</BlurredCard>
    </div>
  );
}

export default Dashboard;
