import { useState } from "react";

function Panel({ title, isActive, handleClick, children }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={handleClick}>Show</button>
      )}
    </section>
  );
}

export default function Accordion() {
  const[activeIndex, setActiveIndex]=useState(1);
  
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive = {activeIndex===1} handleClick={()=>setActiveIndex(1)}>
        With a population of over 2 million, Almaty is Kazakhstan's largest
        city.
      </Panel>
      <Panel title="Etymology" isActive = {activeIndex===2} handleClick={()=>setActiveIndex(2)}>
        The name comes from alma, the Kazakh word for "apple".
      </Panel>

       <Panel title="Bib" isActive = {activeIndex===3} handleClick={()=>setActiveIndex(3)}>
        Something happens here.
      </Panel>
    </>
  );
}
