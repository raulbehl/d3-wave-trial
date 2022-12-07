import './App.css';
import { WaveGraph } from 'd3-wave';

function App() {
  return (
    <div className="App">
      <script type="text/javascript">
        var svg = d3.select("#wave-graph");
        var waveGraph = new WaveGraph(svg);
        waveGraph.setSizes();
        waveGraph.bindData(JSON.parse(contents));
      </script>
    </div>
  );
}

export default App;
