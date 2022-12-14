import '../App.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import 'bulma/css/bulma.min.css';
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
        <ul>
        <li class= 'px-5'><FontAwesomeIcon icon={solid('phone')} /> 917-257-2225</li>
	<li ><FontAwesomeIcon icon={solid('envelope')} /> saybe.ali0618@gmail.com</li>
	
</ul>
        <div class='icons'>
        <a href='https://www.linkedin.com/in/sohaib-ali-swe/' target='_blank' class ='icon-links has-text-warning-light'><FontAwesomeIcon icon={brands('linkedin')} size='5x' /></a>
       
        </div>
      
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
<hr/>
  <div class="container">
    <div class="section-heading">
      <h1 class="latest">Latest Works</h1>
      <div class='icons'>
        <a href='https://github.com/saybeeali' target='_blank' class ='icon-links has-text-warning-light'><FontAwesomeIcon icon={brands('github')} size='5x' beatFade/></a>
       
        </div>
      <p class="projects">
        Check out all my projects!<br/>
        <h2 class='button is-white is-medium is-inverted'><Link to="/Projects">
          PROJECTS
        </Link> </h2> 

      </p>

       
          
      
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