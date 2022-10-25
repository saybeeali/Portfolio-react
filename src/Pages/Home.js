import '../App.css'
import { Link } from "react-router-dom";

function Home(props){
    return (
        <div class ='home'>
        
        <section id="hero-area">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="block wow fadeInUp" data-wow-delay=".3s">

          
          <section class="cd-intro">
            <h1 class='name'>
              <span>HI, MY NAME IS Sohaib &amp; I AM A</span><br/>
              Software Engineer
             
              
            </h1>
          </section>
         
          <h2 class="intro">
          I'm a Software Engineer who is dedicated to learn new things to <br/> 
          develop my software skills to produce the best product possible.
          </h2>
          
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!--/#main-slider-->

<!--
==================================================
About Section Start
================================================== --> */}
<section id="about">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <div class="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2 class = 'abouth2'>
            ABOUT ME
          </h2>

        <img src='https://i.imgur.com/dwNr1Vy.jpg' class ='pfp'/>
          <p class ='aboutp'>
            From building single page games to full-stack websites, I'm a Software Engineer who is dedicated to learn new things and develop my software skills to produce the best product possible. <br/>
            I'm effective and driven about working solo and in teams and my skill set includes Python, JavaScript,Node.js and React.

          </p>
          
        </div>

      </div>
      <div class="col-md-6 col-sm-6">
        <div class="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="images/about/about.jpg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</section> 


{/* <!--
==================================================
Portfolio Section Start
================================================== --> */}
<section id="works" class="works">
  <div class="container">
    <div class="section-heading">
      <h1 class="latest">Latest Works</h1>
      <p class="projects">
        Check out all my projects!
        <h2 id='link-to-proj'><Link to="/Projects">
          PROJECTS
        </Link> </h2> 

      </p>
      <div class = 'projects'>
<h1>projects</h1>
<section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 ">GetFit</h1>
          <h2 class="subtitle">A fitness website to track your routine <br/> and browse different workouts.</h2>
          <a href="https://github.com/saybeeali/GetFit" class="button is-white is-medium is-inverted">Check it out here&ensp;<i class="fad fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
    <section id="parallax-1" class="hero is-large ">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-offset-6">
              <h1 class="bravado is-1 ">Bravado</h1>
              <hr class="content-divider"/>
              <h2 class="bravado">A fullstack web application where people share interview experience as well as knowledge about the interview process that will allow others to study or use as reference for how to ace their own upcoming interviews. </h2>
               <a href="#" class="button is-white is-inverted">Next&ensp;<i class="fad fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="parallax-2" class="hero is-large ">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <h1 class="title is-1 ">AnimeDB</h1>
              <hr class="content-divider"/>
              <p class="subtitle">AnimeDB is a site where anime fans can come and find information on all the top anime, watch trailers and post and read reviews.</p>
               <a href="#" class="button is-white is-inverted">Next&ensp;<i class="fad fa-chevron-right"></i></a> 
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
       
          
      
    </div>
  </div>
</section> 




            {/* </div>
          </div>
        </div>
      </div>

    </section> */}



        </div>

    )
}
export default Home