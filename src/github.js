
import './Github.css';
import React from 'react';

export function Github() {
    return (
        <section>
           <h2 className ='github-header' id='github'>GitHub</h2>
           <div className='projects'>
           <article>
          <h3>
            <a href="https://github.com/JonOct45/dormmates-site" target="_blank"> Doormmates Website</a>
          </h3>
          <a href="https://github.com/JonOct45/dormmates-site" target="_blank" className="dormmates-banner">

          </a>
          <p>Dormmates is a portal that links students up with potential land lords based
            on the locations of the institutions they are attending. There are profiles
            for students and profiles for landlords.
          </p>
        </article>

        <article>
          <h3> <a href="https://github.com/JonOct45/NetworkProject" target ="_blank"> Network</a> </h3>
          <section className="network-banner"></section>
          <p>
            Server to Client Networking Project which showcases multiple network technologies
          </p>
        </article>

        <article>
          <h3> FFLogs Discord Bot </h3>
          <section className="fflogs-banner"></section>
          <p>
            Here is where I'll talk about my discord bot!
          </p>
        </article>
               </div> 
        </section>
    );
}

export default Github;