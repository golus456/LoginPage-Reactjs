

import './App.css';
import BasicForms from './components/basicForms.js';
import Dashboard from './components/dashboard';
import PieChartbasic from './components/piechartbasic';
import Reset from './components/reset'
import Startingpage from './components/startingpage';



function App() {
  return (
    <>
      <Reset />,
      <div>
        <Dashboard />
      </div>
      <Startingpage />
      <div></div>
      {/* <PieChartbasic/>,<BasicForms/> */}
    </>
  );
}

export default App;
