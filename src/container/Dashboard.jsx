import Header from "../components/Header";

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{ backgroundColor: '#f1f1f1', width: '70vw', height: '100vh' }}
      >
        <Header />
      </div>
      <div
        style={{
          backgroundImage: 'url(src/assets/clouds.jpeg)',
          width: '30vw',
          height: '100vh',
        }}
      ></div>
    </div>
  );
}

export default Dashboard;
