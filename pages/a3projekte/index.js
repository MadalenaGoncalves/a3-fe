import Link from 'next/link';

const HausverwaltungPage = () => (
  <div>
    <span>Logo</span>
    
    <h1>A3 PROJEKTE GMBH</h1>
    <h2>PROJEKTENTWICKLUNG <br /> HAUSVERWALTUNG </h2>

    <div>
      Auguststraße 27
      <br /> 
      10117 Berlin
      <br /> 
      T 030/28 30 35 0
      <br /> 
      F 030/28 30 35 35
      <br />
    </div>

    <div><a href="mailto:a3@a3projekte.eu">a3@a3projekte.eu</a></div>
    
    <div>
      HRB 67659
      <br />
      AG Charlottenburg
    </div>

    <div>
      <Link href="/a3projekte/datenschutz"><a title="Datenschutzerklärung">DATENSCHUTZ</a></Link>
    </div>

  </div>
);

export default HausverwaltungPage;