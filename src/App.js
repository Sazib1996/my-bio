import logo from './logo.svg';
import './App.css';
import BioData from './component/BioData';

function App() {
  return (
    <div className="App">
      <BioData
        Name="Hm.Sazib Howlader"
        Eamil="hmsazib21@gmail.com"
        Phone="01781471993"
        skills={["js","react","python"]}
        Enterests={["web 3", "NTF"]}
        referencedby="SR Sutu"
      />
      <BioData
        Name="Md Sahin"
        Eamil="hmsahin@gmail.com"
        Phone="01568954565"
        skills={["Html","Css","js","React","python"]}
        Enterests={["web 3", "NTF", "BLACKLINE"]}
        referencedby="Hm Sazib"
      />
    </div>
  );
}

export default App;
