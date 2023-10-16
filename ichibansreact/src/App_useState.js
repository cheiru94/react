
import "./App";
import "./common.css";
import Conunter from './components/exam2/Conunter_useState';
import ConunterEffect from './components/exam2/Conunter_useEffect';
import Info from './components/exam2/Info_useState'

const App = () => {



  return (<>

    <Conunter count={0} />
    <Conunter count={111} />
    <hr />
    {/* 논리적 오류 발생 : 컴포넌트 별로 관리가 되어 있지 않다.  */}
    <br />
    <Info />
    <hr />

    <ConunterEffect />
  </>)
}

export default App