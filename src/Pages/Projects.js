import '../App.css'
import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css';

function Projects(){
    return(
    <div class = 'projects'>

<section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 ">GetFit</h1>
          <h2 class="subtitle">A fitness website to track your routine <br/> and browse different workouts.</h2>
          <a href="https://github.com/saybeeali/GetFit" class="button is-white is-medium is-inverted">Check it out here&ensp;<i class="fad fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
    <section id="parallax-1" class="hero is-medium ">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-7 is-offset-6">
              <h1 class="bravado-title is-1 ">Bravado</h1>
              <hr class="content-divider"/>
              <h2 class="bravado">A fullstack web application where people share interview experience as well as knowledge about the interview process that will allow others to study or use as reference for how to ace their own upcoming interviews. </h2>
               <a href="https://github.com/javenegas1/Bravado" class="button is-white is-inverted">Github and Website here!&ensp;<i class="fad fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="parallax-2" class="hero is-large ">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <h1 class="anime-title is-1 ">AnimeDB</h1>
              <hr class="content-divider"/>
              <p class="anime">AnimeDB is a site where anime fans can come and find information on all the top anime, watch trailers and post and read reviews.</p>
               <a href="https://github.com/saybeeali/animedb-front-end" class="button is-white is-inverted">Github and Website here!&ensp;<i class="fad fa-chevron-right"></i></a> 
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
}

export default Projects