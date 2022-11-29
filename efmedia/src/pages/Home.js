import EnquiryFormShort from "./components/EnquiryFormShort";

const Home = () => {
    return (
    <>
    <div class="fadeInAnimation">
        <div class="container  main-banner">
            <div class="row">
                <div class="col">
                    <h1 id="hero-text">Digital Marketing Agency</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p id="hero-subtext">We are an internationally based digital marketing agency. We develop and execute a digital marketing strategy to enable clients to achieve their business objectives.</p>
                </div>
                <div class="col text-center">
                    <div class="card enquiry-form-short">
                        <EnquiryFormShort/>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="review-panel">
            <div class="row">
                <div class="col text-center">
                    <p>"Yes goood"</p>
                </div>
                <div class="col text-center">
                    <p>"review 2"</p>
                </div>
                <div class="col text-center align-middle">
                    <p>"i like it"</p>
                </div>
            </div>
        </div>
        <div class="panel-right">
            <h5>Services</h5>
            <ul>
                <li data-toggle="collapse" href="#content-marketing-collapse" role="button" aria-expanded="false" aria-controls="content-marketing-collapse">
                    Content Marketing
                </li>
                <div class="collapse" id="content-marketing-collapse">
                    <div class="card card-body">
                        A classic means to bring your product to the man or to the woman, but also in this marketing area a lot has happened. Addressing young people with conventional TV commercials or in the district magazine is rarely successful. Specific advertising for specific audiences on certain media is the modern way to market your product. Whether on social media, websites, TV, radio or even advertising posters. The possibilities are endless, and yet you have to plan exactly which target group addresses which type of advertising.
                    </div>
                </div>
                
                <li data-toggle="collapse" href="#socialmedia-marketing-collapse" role="button" aria-expanded="false" aria-controls="socialmedia-marketing-collapse">
                    Social Media Marketing
                </li>
                <div class="collapse" id="socialmedia-marketing-collapse">
                    <div class="card card-body">
                        The modern social media marketing has it all. Not only is the cost-benefit ratio surprisingly good, but also very precise in order to reach certain target groups and address them through individual strategies and get the most out of their money. There are, of course, many different media channels on social media, and not every medium is suitable for every target audience. Whether Twitter, Instagram or LinkedIn, we are ready to advise you and come up with you on the best medium and the best strategy for your ideas and target groups.
                    </div>
                </div>

                <li>Web Design</li>
                <li>Branding</li>
                <li>SEO (Search Engine Optimisation)</li>
            </ul>
       
        </div>
    </div>
    </>
    )
  };
  
  export default Home;