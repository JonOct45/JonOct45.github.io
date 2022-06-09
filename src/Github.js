import './Github.css';

export function Github() {
    return (
        <section>
           <h2 class ='github-header' id='github'>GitHub</h2>
           <div class='projects'>
           <article>
          <h3>
            <a href="https://github.com/JonOct45/dormmates-site" target="_blank"> Doormmates Website</a>
          </h3>
          <a href="https://github.com/JonOct45/dormmates-site" target="_blank" class="dormmates-banner">

          </a>
          <p>Dormmates is a portal that links students up with potential land lords based
            on the locations of the institutions they are attending. There are profiles
            for students and profiles for landlords.
          </p>
        </article>

        <article>
          <h3> <a href="https://github.com/JonOct45/NetworkProject" target ="_blank"> Network</a> </h3>
          <section class="network-banner"></section>
          <p>
            Server to Client Networking Project which showcases multiple network technologies
          </p>
        </article>

        <article>
          <h3> FFLogs Discord Bot </h3>
          <section class="fflogs-banner"></section>
          <p>
            Here is where I'll talk about my discord bot!
          </p>
        </article>
               </div> 
        </section>
    );
}