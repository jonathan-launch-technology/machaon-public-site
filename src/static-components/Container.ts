export default class Container implements StaticComponent {
    render(): string {
        return `
        
            <!-- Start Header -->
        <div class="hidden-header"></div>
            <header class="clearfix">
                
                <!-- Start Top Bar -->
            <div class="top-bar">
            <div class="container">
                <div class="row">
                <div class="col-md-6">
                                <!-- Start Contact Info -->
                    <ul class="contact-details">
                                    <li><a href="skype:machaoncorp"><i class="icon-phone-1"></i> (480) 409-4601</a></li>
                                    <li><a href="mailto:info@machaoncorp.com"><i class="icon-mail-1"></i> info@machaoncorp.com</a></li>
                                </ul>
                                <!-- End Contact Info -->
                </div>
                <div class="col-md-6">
                                <!-- Start Social Links -->
                    <ul class="social-list">
                    
                    <li>
                        <a href="https://twitter.com/machaonsummit?lang=en" title="Twitter" target="new" class="twitter sh-tooltip" data-placement="bottom"><i class="icon-twitter-2"></i></a>
                    </li>
                                    <li>
                        <a href="https://www.linkedin.com/company/texas-technology-summit---machaon-corporation" title="Linkedin" target="new" class="linkdin sh-tooltip" data-placement="bottom"><i class="icon-linkedin"></i></a>
                    </li>
                                    
                    
                    </ul>
                                <!-- End Social Links -->
                </div>
                </div>
            </div>
            </div>
                <!-- End Top Bar -->
                
            <!-- Start Header ( Logo & Naviagtion ) -->
            <div class="navbar navbar-default navbar-top">
            <div class="container">
                <div class="navbar-header">
                            <!-- Stat Toggle Nav Link For Mobiles -->
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <i class="icon-menu-1"></i>
                </button>
                            <!-- End Toggle Nav Link For Mobiles -->
                <a class="navbar-brand" href="index.html"><img alt="" src="https://technologysummit.net/images/Florida-62ph.gif"></a>
                </div>
                <div class="navbar-collapse collapse">
                            <!-- Stat Search -->
                            <div class="search-side">
                                <a href="#" class="show-search"><i class="icon-search-1"></i></a>
                                <div class="search-form">
                                    <form autocomplete="off" role="search" method="get" class="searchform" action="#">
                                        <input type="text" value="" name="s" id="s" placeholder="Search the site...">
                                    </form>
                                </div>
                            </div>
                            <!-- End Search -->
                            <!-- Start Navigation List -->
                <ul class="nav navbar-nav navbar-right">
                    <li>
                    <a href="http://machaon.us/index.html">Home</a>
                    </li>
                                <li><a class="content_top_link_bold" href="#sponsors">Sponsors</a></li>
                        <li><a class="content_top_link_bold" href="#agenda">Agenda</a></li>
                <li><a class="content_top_link_bold" href="#exhibitors">Exhibitors</a></li>
                <li><a class="content_top_link_bold" href="#governingbody">Governing Body</a></li>
                    <li><a href="https://machaon.us/about.html">About Machaon</a></li>
                                <li><a href="https://machaon.us/contact.html">Contact</a></li>
                                <li>
                    <a class="active" href="#">Summits</a>
                    <ul class="dropdown">
                                        
                                    <li><a href="https://technologysummit.net/texas.html">Texas Technology Summit</a></li>
                                    <li><a href="https://technologysummit.net/atlanta.html">Atlanta Technology Summit</a></li>
                                    <li><a href="https://technologysummit.net/rocky.html">Rocky Mountain Technology Summit</a></li>
                                    <li><a href="https://technologysummit.net/virginia.html">Virginia Technology Summit</a></li>
                                    <li><a href="https://technologysummit.net/arizona.html">Arizona Technology Summit</a></li>
                                    <li><a href="https://technologysummit.net/california.html">California Technology Summit</a></li>
                    </ul>
                    </li>
                    <li>
                    <a href="https://technologysummit.net/register.html">Register</a>
                    
                    </ul>
                </ul>
                            <!-- End Navigation List -->
                </div>
            </div>
            </div>
                <!-- End Header ( Logo & Naviagtion ) -->
                
        </header>
        <!-- End Header -->
            
            
            
            
            <!-- Start Home Slider -->
        <div id="slider">
            
                <!-- START REVOLUTION SLIDER 3.1 rev5 fullwidth mode -->
                <div class="fullwidthbanner-container">
                    <div class="fullwidthbanner" >
                        <ul>
                        
                            <!-- SLIDE 1 -->
                            <li data-transition="fade" data-slotamount="7" data-masterspeed="300" >
                                <!-- MAIN IMAGE -->
                                <img src="https://technologysummit.net/images/FloridaBanner.gif" data-fullwidthcentering="on" alt="slidebg1"  data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat">
                                
                                <!-- LAYER NR. 1 -->
                                <div class="tp-caption uppercase big_font_size boldest_font_weight dark_font_color sft start"
                                    data-x="540"
                                    data-y="125"
                                    
                                    data-speed="300"
                                    data-start="1600"
                                    data-easing="easeOutExpo"><span class="accent-color">WELCOME TO THE</span><br>
                                    Florida Technology Summit
                                </div>
                                
                                <!-- LAYER NR. 2 -->
                                <div class="tp-caption medium_font_size regular_font_weight dark_font_color sfl start"
                                    data-x="540"
                                    data-y="208"
                                    
                                    data-speed="300"
                                    data-start="1900"
                                    data-easing="easeOutExpo">REGIONAL IT &amp; SECURITY <br>
                                CONFERENCE IN TAMPA</div>
                                
                                <!-- LAYER NR. 3 -->
                                <div class="tp-caption mini_font_size light_font_weight gray_font_color sfr start"
                                    data-x="540"
                                    data-y="250"
                                    
                                    data-speed="300"
                                    data-start="2200"
                                    data-easing="easeOutExpo"><span class="accent-color"><br>
                                </span><br/>
                                </div>
                                
                                <!-- LAYER NR. 4 -->
                                <div class="tp-caption sfb start"
                                    data-x="540"
                                    data-y="340"
                                    
                                    data-speed="300"
                                    data-start="2500"
                                    data-easing="easeOutExpo"><a href="https://technologysummit.net/register.html" target="new" class="btn-system btn-medium">Register Now</a> 
                                </div>
                                
                                <!-- LAYER NR. 5 -->
                                <div class="tp-caption sfl start"
                                    data-x="180"
                                    data-y="bottom"
                                    
                                    data-speed="1000"
                                    data-start="1000"
                                    data-easing="Power1.easeOut"><img src="https://technologysummit.net/images/Floridamanreplacement.png" alt="" />
                                </div>
                                
                            </li>
                            
                            <!-- SLIDE 3  -->
                            <li data-transition="fade" data-slotamount="7" data-masterspeed="300" >
                                <!-- MAIN IMAGE -->
                                <img src="https://technologysummit.net/images/VacationBanner30.gif" data-fullwidthcentering="on" alt="slidebg3"  data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat">
                                
                                <!-- LAYER NR. 1 -->
                                <div class="tp-caption uppercase big_font_size boldest_font_weight dark_font_color sft start"
                                    data-x="center"
                                    data-y="140"
                                    
                                    data-speed="300"
                                    data-start="1000"
                                    data-easing="easeOutExpo">WIN THE DREAM VACATION YOU ALWAYS WANTED</div>
                                
                                <!-- LAYER NR. 2 -->
                                <div class="tp-caption medium_font_size regular_font_weight dark_font_color sfb start"
                                    data-x="center"
                                    data-y="182"
                                    
                                    data-speed="300"
                                    data-start="1300"
                                    data-easing="easeOutExpo">Attend our Conference to Enter our Grand Prize</div>
                                
                                <!-- LAYER NR. 3 -->
                                <div class="tp-caption small_font_size light_font_weight white_font_color text-center sfb start"
                                    data-x="center"
                                    data-y="220"
                                    
                                    data-speed="300"
                                    data-start="1600"
                                    data-easing="easeOutExpo"><span class="accent-color"><strong>All of our attendees can get the chance to win a free trip & other giveaways!</strong></span>
                                </div>
                                
                                <!-- LAYER NR. 4 -->
                                <div class="tp-caption sfr start"
                                    data-x="center"
                                    data-y="292"
                                    data-hoffset="84"
                                    
                                    data-speed="600"
                                    data-start="2000"
                                    data-easing="easeOutExpo"><a href="https://technologysummit.net/register.html" target="new" class="btn-system btn-medium">Register Now</a> 
                                </div>
                                
                                <!-- LAYER NR. 5 -->
                                <div class="tp-caption sfl start"
                                    data-x="center"
                                    data-y="292"
                                    data-hoffset="-84"
                                    
                                    data-speed="600"
                                    data-start="2000"
                                    data-easing="easeOutExpo"><a href="http://machaon.us/contact.html" target="new" class="btn-system btn-medium btn-gray">Be a Sponsor</a>
                                </div>
                        </ul> 
                    </div>
                </div>
                
                <!-- THE SCRIPT INITIALISATION -->
                <!-- LOOK THE DOCUMENTATION FOR MORE INFORMATIONS -->
                <script type="text/javascript">
                    var revapi;
                    jQuery(document).ready(function() {
                revapi = jQuery('.fullwidthbanner').revolution({
                
                delay:9000,
                startwidth:1140,
                startheight:450,
                hideThumbs:200,
                
                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:3,
                
                navigationType:"none",
                navigationArrows:"solo",
                navigationStyle:"round",
                
                touchenabled:"on",
                onHoverStop:"on",
                
                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,
        
                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,
        
                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,
                    
                shadow:0,
                fullWidth:"on",
                fullScreen:"off",
                lazyLoad:"on",
        
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
        
                shuffle:"off",
                
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0,	
                        });
                    });
                </script>
                        
            </div>
            <!-- End Home Slider -->
            
            
            
        
        <!-- Start Content -->
        <div id="content">
            <div class="container">
            <div class="page-content">
                    
                    <!-- Classic Heading -->
                    <h4 class="classic-title"><span>Overview</span></h4>
                    
                        <p><strong>The 5th Annual Florida Technology Summit will be held on November 12th, 2024 at the Tampa Marriott Water Street (505 Water Street, Tampa, Florida, 33602) from 8am-4pm.</strong></p>
                        
                    
                        <p>This B-B event is targeted for the Technology and Security community.  Attendees consist of IT/IS Executives and Direct reports across all verticals within the state of Florida interested in Networking, Researching/Learning, Career Advancement, and Purchasing. Attend the Florida Technology Summit to get the right tools and make vital connections to best prepare your company for the broad spectrum of ever-changing technology trends.
                        <p>
                        <a id="governingbody" name="governingbody">
                    <!-- Divider -->
                    <div class="hr1" style="margin-top:20px; margin-bottom:20px;"></div>
                        <!-- Start Clients Carousel -->
                        <div class="our-clients">
                            
                            <!-- Classic Heading -->
                        <h4 class="classic-title"><span>Governing Body Members</span></h4>
                    <div class="row"> 
                        <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/GlenArmes.gif" alt="" width="120" height="120">
                        <p><strong>Glen Armes</strong><br>
                                CISO<br>
                                Old Republic International Corporation</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/WilsonBautistaJr.gif" alt="" width="120" height="120">
                        <p><strong>Wilson Bautista Jr.</strong><br>
                            Founder &amp; CEO<br>
                            Jün Cyber</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            <!-- Start Governing Body Box --><!--
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/LarryBlakely.gif" alt="" width="120" height="120">
                        <p><strong>Larry Blakely</strong><br>
                                VP/Director of IT<br>
                            
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                                <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/KeyvanBohlooli.gif" alt="" width="120" height="120">
                        <p><strong>Keyvan Bohlooli</strong><br>
                                SVP, Chief Digital & Innovation Officer<br>
                                Berkshire Hathaway Energy Montana, LLC</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                                <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Speaker Heads/Surendra.gif" alt="" width="120" height="120">
                        <p><strong>Surendra Reddy Challapalli</strong><br>
                                Vice President - Technology<br>
                                Citi</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                                <!-- Start Governing Body Box --><!--
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/DennisDevlin.gif" alt="" width="120" height="120">
                        <p><strong>Dennis Devlin</strong><br>
                                Consumer Security Advocate<br>
                                Gryphon Online Safety, Inc.</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                                <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/JamesJJFarrell.gif" alt="" width="120" height="120">
                        <p><strong>James J.J. Farrell</strong><br>
                                Senior Director of IT and Security Audit<br>
                                Blue Cross Blue Shield</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                                <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/RickGranzow.gif" alt="" width="120" height="120">
                        <p><strong>Rick Granzow</strong><br>
                                CTO<br>
                                Rock Solid Consulting</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                            </div>
                        <div class="row"> 
        
                                <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/ChrisHallNEW.gif" alt="" width="120" height="120">
                        <p><strong>Chris Hall</strong><br>
                                Owner and Principal Consultant<br>
                                MH3 Consulting, LLC</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                                                        <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/RussellHaupert.gif" alt="" width="120" height="120">
                        <p><strong>Russell Haupert</strong><br>
                                CIO/CTO, Director of Technology & Innovation<br>
                                City of Tampa</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/RenataKobylinkski.gif" alt="" width="120" height="120">
                        <p><strong>Renata Kobylinkski</strong><br>
                                VP, IT Infrastructure and Support Services<br>
                                Generali Global Assistance</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/Sridhar_Kocharlakota.gif" alt="" width="120" height="120">
                        <p><strong>Sridhar Kocharlakota</strong><br>
                                IT Director<br>
                                Energy Insurance Mutual</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                    
                    <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/RaminKouzehkanani.gif" alt="" width="120" height="120">
                        <p><strong>Ramin Kouzehkanani</strong><br>
                                Executive Team Member and Chief Information & Innovation Officer<br>
                                Hillsborough County Government</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                        
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/JoeKwo.gif" alt="" width="120" height="120">
                        <p><strong>Joe Kwo</strong><br>
                                USF Graduate Mentor<br>
                                University of South Florida</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                                </div>
                        <div class="row">
                            
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/RayMoore.gif" alt="" width="120" height="120">
                        <p><strong>Ray Moore</strong><br>
                                Cybersecurity Program Manager<br>
                                United States Special Operations Command</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                                
                        
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Speaker Heads/CharlesPayne.gif" alt="" width="120" height="120">
                        <p><strong>Charles Payne</strong><br>
                                CTO/CISO<br>
                                Neptune Media</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/ChrisRamos.gif" alt="" width="120" height="120">
                        <p><strong>Chris Ramos</strong><br>
                                Information System Security Manager<br>
                                Invictus International Consulting</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                                <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/RickR.gif" alt="" width="120" height="120">
                        <p><strong>Rick Rampersad</strong><br>
                                CIO<br>
                                Early Learning Coalition of Hillsborough County</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/Marcus-Session.gif" alt="" width="120" height="120">
                        <p><strong>Marcus Session</strong><br>
                                VP, Information Technology Services<br>
                                Hillsborough County Aviation Authority</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/AndySwenson.gif" alt="" width="120" height="120">
                        <p><strong>Andy Swenson</strong><br>
                                CEO<br>
                                Delbridge Group</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                                </div>
                        <div class="row">
                            
                                <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/RexTolman.gif" alt="" width="120" height="120">
                        <p><strong>Rex Tolman</strong><br>
                                CISO - VP Enterprise Security<br>
                                Kforce Inc.</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                            
                            
                        
                                <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/KriziTrivisani.gif" alt="" width="120" height="120">
                        <p><strong>Krizi Trivisani</strong><br>
                                Former CISO<br>
                                American Red Cross</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                        
                                
                                
                            <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Governing Body Members/FTS/MelissaWykle.gif" alt="" width="120" height="120">
                        <p><strong>Melissa Wykle</strong><br>
                                Executive Digital Transformation Center<br>
                                Integris Group</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                            
                            
                        
                                <!-- Start Governing Body Box -->
                        <div class="col-md-2 service-box service-center">
                                <div class="service-icon" align="center"> <img src="https://technologysummit.net/images/Speaker Heads/LisaYoung.gif" alt="" width="120" height="120">
                        <p><strong>Lisa Young</strong><br>
                                Senior GRC Metrics Engineer<br>
                                Netflix and ISC2 Board Member</p>
                        </div>
                    </div>
                            <!-- End Governing Body Box -->
                        </div>
                    
                    <!-- End Services Icons --> 
                    
                    </div>
                    
                    <!-- Classic Heading -->
                    <h4 class="classic-title"><span>Sponsors</span></h4>
                            <p>We would like to thank all of our sponsors for being a part of this year's Florida Technology Summit. From being a sponsor, you will be recognized for the education and mission your company contributes to our tradeshow, panels, and sessions. Many of our sponsors have been a part of our annual summit for many years and we are proud to support them. See below for a list of our present and past sponsors.               	
                            
                    <!-- Divider -->                </p>
                    <a id="sponsors" name="sponsors">
                    
                        <!-- Start Platinum Sponsor Section -->
        
                    
                        
                        <!-- Classic Heading -->
                        <h4 class="classic-title"><span>Platinum Sponsors</span></h4>
                        <div class="row">      
                                            
        
        <!-- Start Sponsor Box -->
                        <div class="col-md-12 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://threatlocker.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Threatlocker.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://threatlocker.com/" target="_new"><strong>https://threatlocker.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>ThreatLocker® is a global cybersecurity leader, providing enterprise-level cybersecurity tools to improve the security of servers and endpoints. ThreatLocker’s combined Application Whitelisting, Ringfencing™, Storage Control and Privileged Access Management solutions are leading the cybersecurity market towards a more secure approach of blocking unknown application vulnerabilities. To learn more about ThreatLocker visit: www.threatlocker.com</p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->                 
                            
                                
                    </div>
                    
                    <!-- End Platinum Sponsor section -->
                    
                        <!-- Start Gold Sponsor Section -->
        
                    
                        
                        <!-- Classic Heading -->
                        <h4 class="classic-title"><span>Gold Sponsors</span></h4>
                        <div class="row">      
                            
                <!-- Start Sponsor Box -->
                            <div class="col-md-12 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.paloaltonetworks.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/PaloAltoNetworks.gif" alt="" width="150" height="100"></a>
                    
                                </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.paloaltonetworks.com/" target="_new"><strong>https://www.paloaltonetworks.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Palo Alto Networks is the world’s cybersecurity leader. We innovate to outpace cyberthreats, so organizations can embrace technology with confidence. We provide next-gen cybersecurity to thousands of customers globally, across all sectors. Our best-in-class cybersecurity platforms and services are backed by industry-leading threat intelligence and strengthened by state-of-the-art automation. Whether deploying our products to enable the Zero Trust Enterprise, responding to a security incident, or partnering to deliver better security outcomes through a world-class partner ecosystem, we’re committed to helping ensure each day is safer than the one before. It’s what makes us the cybersecurity partner of choice. For more information, visit www.paloaltonetworks.com.
        </p>
                                </div>
                                
                                </div>
                            </div>
                            <!-- End Sponsor Box -->               
        
        
            <!-- Start Sponsor Box -->
                        <div class="col-md-12 service-box service-center">
                                <div class="service-icon"><a href="https://www.unitrends.com" target="new"><img src="https://technologysummit.net/images/Sponsors/UnitrendsNEW.gif" alt="" width="150" height="100"></a></div><div class="service-content" align="center">
                                
                                <p><A href="https://www.unitrends.com/" target="_new"><strong>www.unitrends.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Unitrends Unified BCDR enables our customers with a platform to address the challenges of today with a complete and agile solution designed to backup, secure, and recover all workloads. The platform encompasses protection for traditional data center infrastructure as well as cloud-based workloads, SaaS data, and the data being generated on endpoint devices such as laptops and remote PCs. Purposeful integrations with security tools provide end-to-end protection against cybercrime and human error, inject automation and artificial intelligence to simplify complex systems and provide a unified experience with visibility across a complete backup infrastructure.</p>
        </div>
                                
                                </div>
                        </div>
        <!-- End Sponsor Box -->                       
                            
                                
                    </div>
                    
                    <!-- End Gold Sponsor section -->
                    <!-- Start Lunch and Learn Sponsor Section -->
        
                    
                        
                        <!-- Classic Heading -->
                        <h4 class="classic-title"><span>Lunch and Learn Sponsors</span></h4>
                    
                        <div class="row"> 
                        
                        
                        
                            
                            
                        <!-- Start Sponsor Box --><!--
                            <div class="col-md-6 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.couchbase.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Couchbase.gif" alt="" width="150" height="100"></a>
                    
                                </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.couchbase.com/" target="_new"><strong>https://www.couchbase.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>At Couchbase, we believe data is at the heart of the enterprise. We empower developers and architects to build, deploy, and run their mission-critical applications. Couchbase delivers a high-performance, flexible and scalable modern database that runs across the data center and any cloud. Many of the world’s largest enterprises rely on Couchbase to power the core applications their businesses depend on.
        </p>
                                </div>
                                
                                </div>
                            </div>
                            <!-- End Sponsor Box -->
                        
                            
                            <!-- Start Sponsor Box -->
                            <div class="col-md-12 service-box service-center">
                                <div class="service-icon"><a href="https://cyberfox.com" target="new"><img src="https://technologysummit.net/images/Sponsors/CyberFOX.gif" alt="" width="150" height="100"></a></div><div class="service-content" align="center">
                                
                                <p><A href="https://cyberfox.com" target="_new"><strong>https://cyberfox.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>CyberFOX is a global cybersecurity solutions provider focused on identity access management (IAM) for IT professionals. Our two flagship products – Password Boss for password management and AutoElevate for privilege access management – supply two critical elements of a comprehensive IAM security strategy. This ability to monitor, manage and mitigate risks by controlling user access to critical information ensures organizations can tighten security defenses for themselves and their end-users. Built for the unique needs of today’s IT professionals, CyberFOX solutions simplify and improve the end-user experience by providing affordable, practicable security. To learn more about how CyberFOX helps protect businesses in more than 175 countries, visit www.cyberfox.com.
        </p>
                                </div>
                                
                                </div>
                            </div>
                            <!-- End Sponsor Box -->
                            
                                <!-- Start Sponsor Box -->
                            <div class="col-md-12 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://onetrust.com" target="new"><img src="https://technologysummit.net/images/Sponsors/OneTrust.gif" alt="" width="150" height="100"></a>
                    
                                </div><div class="service-content" align="center">
                                
                                <p><A href="https://onetrust.com" target="_new"><strong>https://onetrust.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>As society redefines risk and opportunity, OneTrust empowers  tomorrow&rsquo;s leaders to succeed through trust and impact with the Trust  Intelligence Platform. The market-defining Trust Intelligence Platform from  OneTrust connects privacy, GRC, ethics, and ESG teams, data, and processes, so  all companies can collaborate seamlessly and put trust at the center of their operations  and culture by unlocking their value and potential to thrive by doing what&rsquo;s  good for people and the planet. </p>
        </div>
                                
                                </div>
                            </div>
                            <!-- End Sponsor Box -->  
                            
                            <!-- Start Sponsor Box -->
                            <div class="col-md-12 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://tpx.com" target="new"><img src="https://technologysummit.net/images/Sponsors/TPx.gif" alt="" width="150" height="100"></a>
                    
                                </div><div class="service-content" align="center">
                                
                                <p><A href="https://tpx.com" target="_new"><strong>https://tpx.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>TPx is a leading managed services provider, redefining the way enterprises grow, compete and communicate. Offering a full suite of managed IT, unified communications, network connectivity and security services, TPx has the experience and know-how to solve even the most complicated IT challenges. TPx’s team of experts help businesses simplify operations, optimize networks, improve productivity, reduce costs and keep environments secure. TPx makes IT easy.</p>
        </div>
                                
                                </div>
                            </div>
                            <!-- End Sponsor Box -->  
                            
                            
                                    
                    </div>
                    
                    <!-- End Lunch and Learn Sponsor section -->
                    
                    <!-- Start Reception Sponsors Section -->
        
                    
                        
                        <!-- Classic Heading -->
                        <h4 class="classic-title"><span>Happy Hour Sponsor</span></h4>
                        <div class="row">      
                            
                        
                                
                            
                                                    
                        <!-- Start Sponsor Box -->
                        <div class="col-md-12 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://sophos.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Sophos.gif" alt="" width="150" height="100"></a>
                                    <a href="https://disrv.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/DataIntegrity.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://sophos.com/" target="_new"><strong>https://sophos.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Sophos and Data Integrity Services proudly partner to  deliver superior cybersecurity outcomes by protecting companies of all sizes  from the most advanced cyberthreats. We use industry leading solutions like,  managed detection and response (MDR), firewall, email, endpoint, cloud  protection and synchronized security. Data Integrity is proud to have received  the Sophos North American Partner of the Year award four times, highlighting  their steadfast devotion to delivering unrivalled service and innovative solutions. </p>
        </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                    </div>
                    
                    <!-- End Reception Sponsors section -->
                    
                    <!-- Start Beverage Sponsor Section -->
        
                    
                        
                        <!-- Classic Heading -->
                        <h4 class="classic-title"><span>Beverage Sponsor</span></h4>
                    
                        <div class="row"> 
                            <!-- Start Sponsor Box --><!--
                        <div class="col-md-6 service-box service-center">
                                <div class="service-icon"> <a href="https://milestonetech.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/MILESTONE.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://milestonetech.com/" target="_new"><strong>https://milestonetech.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>An HPE Gold/HPI Platinum partner and woman-owned business headquartered in Castle Rock, CO, Milestone is a global IT procurement experience curator and solution provider. We specialize in enterprise and cloud services, hardware refresh and e-solution development and deployment. Relationship-focused and solution-driven, we give customers and partners unrivaled end-to-end solutions that integrate into their business processes—every time. Our expert team is comprised of solution engineers, procurement professionals, product creators and financial way-makers. We build innovative technologies and strategies that make life easier for customers—customized for one but globalized to many.</p>
                            </div>
                            </div>
                            </div>
                            <!-- End Sponsor Box -->
                            
                                    <!-- Start Sponsor Box -->
                        <div class="col-md-12 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://nasuni.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Nasuni.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://sophos.com/" target="_new"><strong>https://nasuni.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                
                                <p>Nasuni® is a file services platform built for the cloud, powered by the world’s only global file system, UniFS®. Nasuni consolidates Network Attached Storage (NAS) and file server silos in cloud storage, delivering infinite scale, built-in backup, global file sharing, and local file server performance, all at half the cost of traditional file infrastructures.</p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                            
                            <!-- Start Sponsor Box --><!--
                        <div class="col-md-6 service-box service-center">
                                <div class="service-icon"> <a href="https://sterling.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Sterling.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://sterling.com/" target="_new"><strong>https://sterling.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Sterling is an award-winning technology solutions provider specializing in Digital Workspace, Modern Infrastructure, Connectivity, Security, Cloud, and Services. Representing over 1,800 product lines and digital brands, with top-level certifications from the industry’s best manufacturers. Sterling delivers a transformative IT experience that is ethical, consistent, transparent, and predictable.</p>
                            </div>
                            </div>
                            </div>
                            <!-- End Sponsor Box -->
                                
                                    
                    </div>
                    
                    </div>
                    <!-- End Beverage Sponsor section -->
                    
                    <!-- Start Silver Sponsors Section -->
        
                    
                        
                        <!-- Classic Heading -->
                        <h4 class="classic-title"><span>Silver Sponsors</span></h4>
                        <div class="row">      
                            
                            
                            
                                <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://blinkops.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/BlinkOps.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://blinkops.com/" target="_new"><strong>www.blinkops.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                
                                <p>Blink is the first security hyperautomation copilot, backed by the largest library of pre-built workflows. With generative-AI in Blink, now anyone can generate an automated workflow to handle repetitive tasks or enforce security policies – simply by typing a prompt. 
        </p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                            
                            <!-- Start Sponsor Box -->
                            <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.catonetworks.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/CatoNetworks.gif" alt="" width="150" height="100"></a>
                    
                                </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.catonetworks.com/" target="_new"><strong>https://catonetworks.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Cato provides the world&rsquo;s most robust single-vendor SASE  platform, converging Cato SD-WAN and a complete cloud-native security service  edge, Cato SSE 360, including Zero Trust Network Access (ZTNA), Secure Web  Gateway (SWG), Cloud Access Security Broker (CASB), Data Loss Prevention (DLP),  and Firewall as a Service (FWaaS) into a global cloud service. Cato. Ready for  Whatever&rsquo;s Next.</p>
        </div>
                                
                                </div>
                            </div>
                            <!-- End Sponsor Box -->
                            
                                    <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://pixel.google/business" target="new"><img src="https://technologysummit.net/images/Sponsors/Google.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://pixel.google/business" target="_new"><strong>https://pixel.google/business</strong></A></p>
                                <div class="service-content" align="left">
                                
                                
                                <p>"Simply put, our vision is to build a more helpful Google for everyone, no matter who you are, where you live, or what you’re hoping to accomplish.” 
        
        Pixel for Business. Empowering businesses to reimagine work. With its advanced security features, long-term software support, and seamless collaboration capabilities, Pixel for Business can help your business stay productive and secure. 
        </p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                            
                            
                            
                                <!-- Start Sponsor Box --><!--
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://nix-united.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Nix.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://nix-united.com/" target="_new"><strong>https://nix-united.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>NIX is a global software development company that delivers services to leading brands from different business verticals. Since 1994, we have created software solutions that boost companies, transforming business capabilities into tangible advantages and measurable values and efficiently addressing present-day business challenges across technologies, data, and processes. Our main differentiating factor is a holistic, detail-oriented approach to product creation, which has evolved into a precise and reliable mechanism over the years of experience. It focuses primarily on achieving clients' strategic goals and contributing to their business growth and prosperity rather than simply performing tasks. In each particular case, we identify the most suitable solution and select the most appropriate technology stacks and approaches to cover the client's needs and requirements.
        
        </p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                        
                        
                                        
                                <!-- Start Sponsor Box --><!--
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.zadara.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Zadara_NEW2020.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.zadara.com/" target="_new"><strong>https://www.zadara.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                
                                <p>Since 2011, Zadara’s Cloud Platform (ZCP) simplifies operational complexity through automated end-to-end infrastructure provisioning of compute, storage and network resources. Backed by an industry-best NPS rating of 71, Zadara Edge Cloud users are supported by Zadara’s team of battle-tested cloud experts and backed by our 100% SLA guarantee. With solutions available on-premises and through cloud and colocation providers, Zadara’s turnkey hardware/software, combined with its pay-only-for-what-you-use model, helps companies gain agility without sacrificing the features and functionality that enterprise IT teams demand. Zadara operates worldwide, including clouds in hundreds of data centers at public- and private-cloud partners, with an expert team that provides follow-the-sun services and support and is the official cloud supplier of Alfa Romeo Racing ORLEN in the Formula One world championship. Zadara is headquartered in Irvine, California with locations in Cirencester (UK), Tokyo, Tel Aviv, Yokneam (Israel), Bangalore and Brazil.</p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                            
                        </div>
                        <div class="row">     
                            
                
                    
                    <!-- End Silver Sponsors section -->
                    
                    <!-- Start Presentation Sponsor Section -->
        
                        <!-- Classic Heading -->
                        <h4 class="classic-title"><span>Presentation Sponsors</span></h4>
                        <div class="row"> 
                        
                        
                            
                            <!-- Start Sponsor Box --><!--
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.cohesity.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Cohesity.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.cohesity.com/" target="_new"><strong>https://cohesity.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Cohesity radically simplifies data management. Easily protect, manage, and derive value from data -- across the data center, edge, and cloud. Utilize a suite of services, consolidated on one multicloud data platform, and eliminate mass data fragmentation. Cohesity can be delivered as a service, self-managed, or provided by a Cohesity-powered partner.
        
        </p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                            
                            
                    
                    <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.cloudflare.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Cloudflare.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><a href="https://www.cloudflare.com/" target="_new"><strong>https://cloudflare.com</strong></a></p>
                                <div class="service-content" align="left">
                                
                                <p>Cloudflare, Inc. is on a mission to help build a  better Internet. Cloudflare&rsquo;s suite of products protect and accelerate any  Internet application online without adding hardware, installing software, or  changing a line of code. Internet properties powered by Cloudflare have all web  traffic routed through its intelligent global network, which gets smarter with  every request.</p>
                                <p>.</p>
                            </div> 
                                </div>
                            </div>
                            <!-- End Sponsor Box -->
                            
                            <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.cradlepoint.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Cradlepoint2023.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><a href="https://www.cradlepoint.com/" target="_new"><strong>https://cradlepoint.com</strong></a></p>
                                <div class="service-content" align="left">
                                
                                <p>IT Professionals rely on Cradlepoint and its Cellular Intelligence to build a reliable, secure network for fixed and temporary sites, vehicles, IoT devices, and remote employees — anywhere. A pioneer in Wireless WAN, Cradlepoint offers advanced 4G and 5G routers and adapters — controlled through Cradlepoint NetCloudTM. </p>
                                <p>.</p>
                            </div> 
                                </div>
                            </div>
                            <!-- End Sponsor Box -->
                            
                    <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.darktrace.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Darktrace.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><a href="https://www.darktrace.com/" target="_new"><strong>https://darktrace.com</strong></a></p>
                                <div class="service-content" align="left">
                                
                                <p>Darktrace (DARK.L), a global leader in cyber  security artificial intelligence, delivers complete AI-powered solutions in its  mission to free the world of cyber disruption. Breakthrough innovations from  the Darktrace Cyber AI Research Centre in Cambridge, UK and its R&amp;D centre  in The Hague, The Netherlands have resulted in over&nbsp;145&nbsp;patent  applications filed and significant research published to contribute to the  cyber security community. Darktrace&rsquo;s technology continuously learns and  updates its knowledge of 'you' for an organization and applies that  understanding to achieve an optimal state of cyber security. It is delivering  the first ever Cyber AI Loop, fuelling a continuous end-to-end security  capability that can autonomously prevent, detect, and respond to novel,  in-progress threats in real time. Darktrace employs over 2,200 people around  the world and protects c.8,800&nbsp;organizations globally from advanced  cyber-threats. It was named one of TIME magazine&rsquo;s &lsquo;Most Influential Companies&rsquo;  in 2021.</p>
        </div> 
                                </div>
                            </div>
                            <!-- End Sponsor Box -->
                            
                            </div>
                            <div class="row">
                            
                            
                            <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.deepwatch.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Deepwatch.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><a href="https://www.deepwatch.com/" target="_new"><strong>https://deepwatch.com</strong></a></p>
                                <div class="service-content" align="left">
                                
                                <p>Deepwatch is securing the digital economy by tenaciously protecting enterprise networks - everywhere, everyday.  Our team, many of the most technically astute minds in cybersecurity, serves an impressive list of Fortune 500/Global 2000 companies. Deepwatch’s cloud security platform backed by exceptional engineers, developers and security experts is changing the modern SOC.  </p>
                            </div> 
                                </div>
                            </div>
                            <!-- End Sponsor Box -->
                            
                                
                            
                            
                            <!-- Start Sponsor Box --><!--
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://imperiumdata.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Imperium.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://imperiumdata.com/" target="_new"><strong>https://imperiumdata.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Imperium Data is an award-winning provider of IT solutions, talent, and engineering services for businesses, governments, and education. We offer our clients Pre-Sales Engineering, Post-Sales Support, IT Staff Augmentation, and Lifetime Warranties on Network Hardware and as-a-Service offerings that help organizations extend their lifecycle of their IT equipment.</p>
                            </div>
                            </div>
                            </div>
                            <!-- End Sponsor Box -->
                    
                            
        <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.juniper.net/us/en/" target="new"><img src="https://technologysummit.net/images/Sponsors/JuniperMist.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.juniper.net/" target="_new"><strong>https://juniper.net</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Juniper Networks challenges the inherent complexity that comes with networking in the multicloud era. We do this with products, solutions and services that transform the way people connect, work and live. We simplify the process of transitioning to a secure and automated multicloud environment to enable secure, scalable, AI-driven networks that connect the world.</p>
                            </div>
                            </div>
                            </div>
                            <!-- End Sponsor Box -->
                            
                            
                            
                            <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.mainline.com" target="new"><img src="https://technologysummit.net/images/Sponsors/Mainline.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.mainline.com" target="_new"><strong>https://mainline.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Mainline is an IT solution provider serving clients across the United States and across industries. With a national team of 400+ resources, we act as an independent advisor to find the best solution for your business needs and strategy. 30+ Years of experience; 1000+ customers, 280+ IT professionals. Partnerships with best of breed solution providers. Accredited by the International Enterprise Architecture Institute (iEAi). Awards from top technology companies including IBM, Dell Technologies, NetApp, Infinidat, Red Hat, and Broadcom, and industry accolades including CRN Tech Elite 250, CRN MSP 500 Elite 150, Florida Trends Best Company, CIO Review Top Company, and more. Recipient of the State of Florida Governor’s Business Ambassador Award for creating jobs and providing opportunities for Florida families..</p>
                            </div>
                            </div>
                            </div>
                            <!-- End Sponsor Box -->
                            
                                </div>
                            <div class="row">
                            
                            <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.netskope.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Netskope.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.netskope.com/" target="_new"><strong>https://netskope.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Netskope, a global cybersecurity leader, is redefining cloud, data, and network security. The Netskope Intelligent Security Service Edge (SSE) platform secures people, devices, and data anywhere they go.</p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                            
                            
                            
                            
                            
                            
                                    <!-- Start Sponsor Box --><!--
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.scalecomputing.com" target="new"><img src="https://technologysummit.net/images/Sponsors/ScaleComputing_NEWEST.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.scalecomputing.com" target="_new"><strong>https://scalecomputing.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Scale Computing integrates storage, servers, and virtualization software into an all-in-one appliance based system that is scalable, self-healing and as easy to manage as a single server. The result is a data center solution that reduces operational complexity, allows a faster response to business issues, and dramatically reduces costs.</p></TD>
                                    
                            </div>
                                
                                </div>
                            </div>
        <!-- End Sponsor Box -->
        
                            
                                <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://splunk.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Splunk.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://splunk.com/" target="_new"><strong>https://splunk.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>Splunk helps make organizations more resilient. Leading organizations use our unified security and observability platform to keep their digital systems secure and reliable. Organizations trust Splunk to prevent security, infrastructure, and application issues from becoming major incidents, absorb shocks from digital disruptions and accelerate digital transformation. 
        
        </p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                            
                                <!-- Start Sponsor Box -->
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://suse.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/SUSE.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://suse.com/" target="_new"><strong>https://suse.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>SUSE is a global leader in innovative, reliable, secure enterprise-grade open source solutions, relied upon by more than 60% of the Fortune 500 to power their mission-critical workloads. We specialize in Business-critical Linux, Enterprise Container Management and Edge solutions, and collaborate with partners and communities to empower our customers to innovate everywhere – from the data center, to the cloud, to the edge and beyond. SUSE puts the “open” back in open source, giving customers the agility to tackle innovation challenges today and the freedom to evolve their strategy and solutions tomorrow.</p>
                            </div>
                                
                                </div>
                        </div>
                            <!-- End Sponsor Box -->
                                
                                
                        
                            
                        
                            
                    
                        
                                <!-- Start Sponsor Box --><!--
                
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://tpx.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/TPx.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://tpx.com/" target="_new"><strong>https://tpx.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>TPx (tpx.com) is the premier national managed services provider, offering Unified Communications, Managed IT and security, managed connectivity and more nationwide – all with guaranteed performance.<A href="http://www.tpx.com/" target="_new"></A></p>
                            </div>
                            
                            </div>
                            </div>
        
                            <!-- End Sponsor Box -->   
                            
                
                            
                            <!-- Start Sponsor Box --><!--
                        <div class="col-md-4 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.veeam.com/" target="new"><img src="https://technologysummit.net/images/Sponsors/Veeam.gif" alt="" width="150" height="100"></a>
                    
                            </div><div class="service-content" align="center">
                                
                                <p><A href="https://www.veeam.com/" target="_new"><strong>https://veeam.com</strong></A></p>
                                <div class="service-content" align="left">
                                
                                <p>	
        Veeam® is the leader in backup solutions that deliver Cloud Data Management™. Veeam Availability Platform™ is the most complete backup solution for helping customers on the journey to achieving success in the 5 Stages of Cloud Data Management. Veeam has 355,000+ customers worldwide, including 82% of the Fortune 500 and 67% of the Global 2,000, with customer satisfaction scores at 3.5x the industry 9 average, the highest in the industry. Veeam’s global ecosystem includes 66,000 channel partners; Cisco, HPE, NetApp and Lenovo as exclusive resellers; and 22,500+ cloud and service providers. Headquartered in Baar, Switzerland, Veeam has offices in more than 30 countries. 
        
        <A href="https://www.veeam.com" target="_new"></A></p>
                            </div>
                            
                            </div>
                            </div>
                            <!-- End Sponsor Box --> 
                                
                        </div>      
                    </div>
                    
                    <!-- End Presentation Sponsors section -->
                    
                    <div class="hr1" style="margin-top:25px; margin-bottom:25px;"></div>
                    
                    <!-- Divider -->
                            <div class="hr5" style="margin-top:45px;margin-bottom:45px;"></div>
                        
                        <a id="agenda" name="agenda">
                            <!-- SCHEDULE CONTENT -->
        <div class="row">
            <div class="col-lg-12">
            <div class="schedule content">
        
                
                    <!-- THE FIRST DAY AGENDA TITLE -->
                    <div class="agenda-tittle white-color">
                        <h1 style="color:#fff;">Florida Technology Summit Agenda</h1>
                        <span>
                        <p style="color:#fff;">Tuesday, November 12th, 2024</span>
                    </div>
        
                    <div class="row first-day-agenda">
        
                        
                            
        
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>8:00 - 9:00 AM</strong></span></p>
                                    <p>
                                        <span>Main Stage</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#Keynotetalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">Opening Keynote Address: Transforming  and Securing a $115b Enterprise: Lessons Learned by a State CIO</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                    <p>Jamie Grant, Former CIO, State of Florida<br>
                                    
                                    </p>
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>9:00 - 10:00 AM</strong></span></p>
                                    <p>
                                        <span>Main Stage</span></p>
                                    </div>
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#Unitrendstalk">
        
                                    <!-- Title -->
                                    <h4><A href="#"><strong>Data  Under Siege: Ransomware's Rising Threat</strong></A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                                                    <p>Matthew Brady, Continuity Engineering Manager - Unitrends<br>
                                    <b>Sponsored by: Unitrends</b></p>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    </div> <div class="row">
                                                    
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>9:00 - 10:00 AM</strong></span></p>
                                    <p>
                                        <span>Tech Theater I</span></p>
                                    </div>
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#Cohesitytalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">Closing the Cyber AI Loop: Darktrace HEAL</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                                                    <p>Ryan Schuler, Senior Cyber Technology Specialist - Darktrace<br>
                                    <b>Sponsored by: Darktrace</b><br>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                        
                                                        
                                                        <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>9:00 - 10:00 AM</strong></span></p>
                                    <p>
                                        <span>Tech Theater II</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#Netskopetalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">Securely Leveraging AI for Business Growth: The Role of Security Service Edge (SSE)
        </A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                                                    <p>Michael Ferguson, Global Director for Security Transformation - Netskope<br>
                                    <b>Sponsored by: Netskope</b><br>
        <em>Presentation Giveaway: Wonderbooms Portable Bluetooth Speaker</em>                                                                
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    
                            </div> <div class="row">
                                                
                                                <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>10:00 - 11:00 AM</strong></span></p>
                                    <p>
                                        <span>Main Stage</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#ThreatLocker">
        
                                    <!-- Title -->
                                    <h4><A href="#">LIVE Hack: How to Protect Yourself Against Cyberattacks</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                                                    <p>Craig Stevenson, Director - ThreatLocker<br>
                                        <b>Sponsored by: ThreatLocker</b></p>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                        <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>10:00 - 11:00 AM</strong></span></p>
                                    <p>
                                        <span>Tech Theater I</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#Veeamtalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">Cyber Resiliency and the Data Problem: Cutting Down  the Noise While Solving the Resource-Poor, Data-Rich Challenge</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                                                    <p>Brian Magner, VP, Security Strategy - Deepwatch<br>
                                                                    <p>Joshua Ohana, Senior Security Advisor - Splunk<br>
                                    <b>Sponsored by: Deepwatch &amp; Splunk</b><br>                                                             
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN --> 
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        
                                                    
                                                    
                                                        <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>10:00 - 11:00 AM</strong></span></p>
                                    <p>
                                        <span>Tech Theater II</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#CIOtalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">CIO Forum: Becoming a Positive Impact on the PnL: Bring Your Best Score Card</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                    <p>
        Jamie Grant, Former CIO, State of Florida<br>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    
                                                    
                                                
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>11:00 - 11:30 AM</strong></span></p>
                                    <p>
                                        <span>Exhibit Hall</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#10exh">
        
                                    <!-- Title -->
                                    <h4>Networking / Tour Exhibits</h4>
        
                                    <!-- Short Description -->
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    </div> <div class="row">
                                                        
                                                    
                        
                        <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>11:30 - 12:30 PM</strong></span></p>
                                    <p>
                                        <span>Main Stage</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#ThreatLockertalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">Best of Both Worlds: Privileged Access Management</A> (Lunch Included)</h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                                                    <p>Mark Sokol, Vice President - CyberFOX<br>
                                        <b>Sponsored by: CyberFOX</b></p>
                                                                        <em>Presentation Giveaway: $250 Gift Card</em>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                
                                                    
                                                        <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>11:30 - 12:30 PM</strong></span></p>
                                    <p>
                                        <span>Tech Theater I</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#TPxtalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">SASE is the Future...and the Future is Now!</A> (Lunch Included)</h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                                                    <p>Christopher Rudolph, Product Marketing Manager - Cato Networks<br>
                                        <b>Sponsored by: Cato Networks</b><br>
                                                                        
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    </div> <div class="row">
                                                    
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>11:30 - 12:30 PM</strong></span></p>
                                    <p>
                                        <span>Tech Theater II</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#OneTrusttalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">Future Proofing AI Systems with Data Governance
        </A> (Lunch Included)</h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                    <p>Sam Parker, Senior Engineer Manager - OneTrust<br>
                                                                    <b>Sponsored by: OneTrust</b><br>
                                    </p>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN --> 
                                                    
                                                        <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>12:30 - 1:30 PM</strong></span></p>
                                    <p>
                                        <span>Main Stage</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#Darktracetalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">Manage Your Unmanaged Cloud with Xpanse and Prisma Cloud
        </A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                    <p>Andrew Cassera, Architect - Prisma Cloud<br>
                                                                    <p>Alyssa Ramella, Technical Engineer - Cortex<br>
                                        <b>Sponsored by: Palo Alto Networks</b><br>
                                </p>
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                        <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>12:30 - 1:30 PM</strong></span></p>
                                    <p>
                                        <span>Tech Theater I</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#CyberFOXtalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">Welcome to Connectivity Cloud: The Modern Way to Connect and Protect Your Clouds, Networks, Applications and Users</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                    <p>John Manzano, Senior Engineer - Cloudflare<br>
                                        <b>Sponsored by: Cloudflare</b></p>
        
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>12:30 - 1:30 PM</strong></span></p>
                                    <p>
                                        <span>Tech Theater II</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#CISOtalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">CISO Forum: Today's Risks, and Ways to Solve Them</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                    <p>
                                                                    Wilson Bautista, Founder & CEO - Jun Cyber<br>
                                    </p>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN --> 
                                                    
                                                    </div> <div class="row">
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>1:30 - 2:30 PM</strong></span></p>
                                    <p>
                                        <span>Main Stage</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#Dwayne">
        
                                    <!-- Title -->
                                    <h4><A href="#">Generative AI: The Evolution, the Opportunity, and the Challenge</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                    <p>Dwayne Allen, CTO - Unisys<br>
                                                                    </p>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                        <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>1:30 - 2:30 PM</strong></span></p>
                                    <p>
                                        <span>Tech Theater I</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#ScaleComputingtalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">AI in Action! Leveraging Artificial Intelligence for Next Generation Wireless</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                                                    <p>Rich Korb, Mist Systems Engineer Director - East<br>
                                        <b>Sponsored by: Juniper Networks</b></p>
                                                                        <em>Presentation Giveaway: Heaven Hill Bottled in Bond 7 Year Kentucky Straight Bourbon</em>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>1:30 - 2:30 PM</strong></span></p>
                                    <p>
                                        <span>Tech Theater II</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#Junipertalk">
        
                                    <!-- Title -->
                                    <h4><A href="#">Securing Your Digital Enterprise</A></h4>
        
                                    <!-- Short Description -->
                                    <p class="p-small">
                                    <p>Tony MacDonald, Security Executive - SUSE<br>
                                                                    Noe Ortega, Engineer - SUSE<br>
                                                                    Matthew Likes, Security Architect - Mainline Information Systems<br>
                                                                    <b>Sponsored by: SUSE & Mainline Information Systems</b><br>
                                                                    </p>
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        
                                                            
                                                                                
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>2:30 - 3:00 PM</strong></span></p>
                                    <p>
                                        <span>Exhibit Hall</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#10exh">
        
                                    <!-- Title -->
                                    <h4>Networking / Tour Exhibits</h4>
        
                                    <!-- Short Description -->
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    
                                                        </div> <div class="row"> 
                                                    
                                                    
                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>2:50 - 3:00 PM</strong></span></p>
                                    <p>
                                        <span>Exhibit Hall</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#2exh1">
        
                                    <!-- Title -->
                                    <h4>Vendor Giveaways</h4>
        
                                    <!-- Short Description -->
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->                   
                                                    
                                                    
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>3:00 - 4:00 PM</strong></span></p>
                                    <p>
                                        <span>Main Stage</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="#Paneltalk">
        
                                <!-- Title -->
                                    <h4><A href="#">Panel Discussion: Success Stories Shared</A></h4>
        <br>
                                    <!-- Short Description -->
                                    <p class="p-small">Moderator:<br> Sridhar Kocharlakota, IT Director - Energy Insurance Mutual<br>
                                    
                                        Panelists:<br> Surendra Reddy Challapalli, VP of Technology - Citi<br>
                                                                        Russell Haupert, CIO/CTO, Director of Technology & Innovation - City of Tampa<br>
                                                                        Charles Payne, CISO/CTO - Neptune Media<br>
                                                                        Rick Rampersad, CIO - Early Learning Coalition of Hillsborough County
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    
                                    
                                    
                                                    
                                                    <!-- SCHEDULE DAY #1 LEFT COLUMN -->
                            <div class="col-lg-6">
        
                                <!-- SESSION 1-1 -->
                                <div class="row schedule-event">
                                        
                                    <!-- Event Time -->
                                    <div class="col-sm-3 event-time">
                                    <p><span><strong>4:00  PM</strong></span></p>
                                    <p>
                                        <span>Main Stage</span></p>
                                    </div>	
        
                                    <!-- Event Description -->
                                    <div class="col-sm-9 event-description" data-toggle="modal" data-target="">
        
                                    <!-- Title -->
                                    <h4>Vacation Giveaway &amp; Conference Wrap-Up</h4>
        
                                    <!-- Short Description -->
                                    </p>
        
                                    <hr>
        
                                    </div>
                                                
                                </div>	
                                <!-- END SESSION 1-1 -->
                                                            
                                                            
                                
                            </div>	<!-- END SCHEDULE DAY #1 LEFT COLUMN -->
                                                    
                                                    
                                                    
                                                    <!-- END SCHEDULE start pop-ups below -->
                            
                            <!-- Session 8 Main Stage Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Keynotetalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Keynote Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/JamieGrant.gif" /> <p>A Tampa native, Jamie previously served in the Florida House of Representatives prior to being appointed to the CIO role. He's an entrepreneur with a passion for creating technology solutions for the challenges in an ever-evolving and innovating marketplace. He earned his Bachelor of Business Administration from Auburn University and a law degree from Stetson University College of Law in Gulfport, Florida. Now Jamie is the Co-Founder of RedLeif, a technology, information and media company out of Tallahassee, FL. 
        </p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>More Info Coming Soon.
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 8 Main Stage End -->
                                
                                    <!-- Session 9 Main Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Unitrendstalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/MatthewBrady.gif" /> <p>Matthew is a dynamic, accomplished sales engineering, account management, and project management professional with over 11 years of success building effective and value-driven customer relationships. Results-oriented and goal-minded with a track record of exceeding target objectives and ensuring 100% customer satisfaction. Seasoned technical resource and IT administrator with a strong understanding of the modern IT landscape. Practiced communicator in both internal and external environments possessing advanced oral and written skills. Effective organizer, analyst, and strategist with a keen ability to operate across all organizational levels. Motivating leader with the capacity to instruct and inspire others to improved performance. Highly adaptable with an ability to appropriately prioritize and navigate heavy work flow. Proactive problem solver demonstrating consistency, credibility, and integrity. 
        </p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>2024 is around the corner and the threat of ransomware continues to loom large with a staggering 51% increase year over year in attacks. How confident are you in your current ransomware prevention and protection solutions?  From stretched resources and budgets, to BYOD cultures and large groups of unsophisticated users, today’s hybrid workforce is an ideal target for phishing, malware and ransomware attacks.<br><br>
        Combating the threat of ransomware requires a multifaceted approach, with backup and disaster recovery serving as the last line of defense.  In response to these rampant threats, Unitrends is more focused on securing your backup infrastructure and helping organizations recover than ever before. In this session, we will explore:<br>
        •	The latest trends in AI-enabled attacks<br>
        •	How to protect your data and ensure recovery with Unitrends 5 pillars of defense<br>
        •	Best practices and real-world learnings from our customers
        
        
        
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 9 Main End -->
                                
                                
                                <!-- Session 9 Main Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Cohesitytalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/RyanSchuler.gif" /> <p>Ryan Schuler is a Senior Cyber Technology Specialist at Darktrace, specializing in Attack Surface Management. Based out of New York, Ryan works with leading organizations across the United States in a range of industries to deploy Darktrace’s Self-Learning AI. During Ryan’s tenure at Darktrace, the company has grown to over 7,400 customers and has been the recipient of numerous achievements, including ‘Security Trailblazer’ at the annual Microsoft Security 20/20 Awards and being named one of TIME Magazine’s ‘Most Influential Companies’ 2021. Ryan holds a Bachelor’s degree from Penn State.
        </p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>The growing frequency and sophistication of cyber threats and the desire to remain one step ahead has become even more challenging, leaving organizations to withstand and recover from cyber-attacks. Join this session and learn how AI is being put to practical use with the introduction of Darktrace HEAL to mitigate an active security incident, determine the most effective path to eradicate the threat, and recover to an operational state; therefore, providing a complete lifecycle approach to cyber resilience.</p>
                                                
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 9 Main End -->
                                
                                <!-- Session 9 Tech 1 Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Darktracetalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/AlyssaRamella.gif" /> <p>Alyssa is a Technical Product Enginner with Palo Alto Networks, with a subject matter expert for Cortex Xpanse - Attack Surface Management Solution.</p><br><br><br>
                                                
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/maleavatar.gif" /> <p>Andrew is a Prisma Cloud Solutions Architect with Palo Alto Networks.</p><br>
                                                
                                                
                                                
                                                    
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>Your IT, DevOps and security teams are working as hard as possible, but attackers are watching and waiting for a single mistake to exploit. When teams are overextended and development cycles are rushed, cloud management procedures and crucial gaps get overlooked.<br>
        Cortex® Xpanse™ regularly fills in incomplete risk assessments to ensure security teams can accurately answer:<br>
        • How many cloud workloads are currently live?<br>
        • Are our cloud policies being followed across every workload and cloud subscription?<br>
        
        This presentation will showcase how Xpanse automatically identifies and associates unknown cloud assets and allows command through Prisma® Cloud for complete cloud security and manageable policy enforcement.</p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 9 Tech 1 End -->
                                
                                    <!-- Session 9 VIP Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="CIOtalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Moderator's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/JamieGrant.gif" /> <p>A Tampa native, Jamie previously served in the Florida House of Representatives prior to being appointed to the CIO role. He's an entrepreneur with a passion for creating technology solutions for the challenges in an ever-evolving and innovating marketplace. He earned his Bachelor of Business Administration from Auburn University and a law degree from Stetson University College of Law in Gulfport, Florida. Now Jamie is the Co-Founder of RedLeif, a technology, information and media company out of Tallahassee, FL.</p>
                                                
                                                
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>This roundtable is for attendees for executives with VIP badges ONLY. This session is intended for audience participation so be ready to discuss, receive valuable information, and connect with others for further discussion.</p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 9 VIP End -->
                                
                                <!-- Session 11 SecStart -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Netskopetalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/MichaelFerguson.gif" /> <p>Michael Ferguson is the Global Director for Security Transformation at Netskope. He is a highly customer-focused security professional, having worked in the cyber security industry for over 15 years across the Asia Pacific Region. Michael has been CISSP certified for over 7 years, speaking at various industry events (e.g. Gartner, AusCert, and AISA) on Data Loss Prevention, Zero Trust and Cloud Security Initiatives.  Michael has extensive web, data and cloud security experience, specializing in running DLP, Zero Trust and Insider Threat programs.
        </p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>In today's rapidly evolving digital landscape, businesses are increasingly relying on artificial intelligence (AI) to drive growth and innovation. However, integrating AI into existing systems while maintaining optimal security poses significant challenges. This talk will explore the concept of Security Service Edge (SSE) and its role in safely enabling the use of AI to accelerate business growth without compromising performance or security. We will discuss how SSE acts as a critical security layer at the edge of the network, providing advanced threat protection, data privacy, and secure access controls. Join us to discover practical strategies for leveraging AI while ensuring robust security measures, enabling organizations to harness the power of AI to drive business success.<br>
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 11 Sec End -->
                                    
                                
                                <!-- Session 11 SecStart -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Veeamtalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/BrianMagner.gif" /> <p>Brian has spent the last decade working to help solve security problems and drive security maturity. His career started in GRC and Risk Management consulting where he focused primarily in the healthcare vertical working on implementation and adoption of risk visibly and mitigation practices. From there he shifted into the Network Security world where he led a team focused on helping customers in the financial, technology, manufacturing and healthcare verticals migrate their security technologies and tooling to better support their cloud transformations. Brian is now VP of Security Strategy at Deepwatch where he partners with organizations to help mature their security operations and build cyber resilient security programs.    </p>
                                                
                                                    <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/JoshOhana.gif" /> <p>Josh Ohana Is a Senior Security Advisor and is considered an Elder Statesman of Security, bringing over 45 years of experience in Data, Computer & Cyber Security Technology. From mainframes, to PC’s, to smart phones, Josh has experienced the evolution of Cyber Security from its inception to today’s complex business environment.</p><br>
                                                
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>We've all heard that security is a data problem, leading most companies to become a data rich environment. So how do you solve the real challenge of bringing in more and more data that’s causing organizations a strain on resources?<br>
        In this session we will discuss how to solve the challenge of being data rich but resource poor and take a quick look at how hyper automation will play a role in the future of Cyber Security.</p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 11 Sec End -->
                                
                                
                                    <!-- Session 12 Tech 1 Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="CyberFOXtalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/JohnManzano.gif" /> <p>John is a Senior Solutions engineer with Cloudflare. With industry experience in Networking, Security and app delivery John works daily to further Cloudflare's mission to help build a better internet.</p><br>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>Organizations need a wide variety of services to connect and secure everything in their digital environment. But integrating everything is onerous, and trying to manage it all causes inefficiency and security gaps. Join this session to learn what is a Connectivity Cloud and how this new concept is geared towards solving the challenges faced by modern IT organizations.</p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 12 Tech 1 End -->
                                <!-- Session 12 Tech II Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Nutanixtalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/MarkBenson.gif" /> <p>Mark Benson is a tenured system engineering manager with over twelve years of running large national programs including healthcare at NetApp, Federal Sales at EMC and currently state, local and education at Nutanix. Prior to his sales career Mark was on the customer side for fifteen years at locations such as Florida State University, Florida Dept. of Health and John Deere.<br><br>
        Throughout both phases of Marks career successful project outcome has always been a driving factor. With wide knowledge across the data center stack as well as cloud services, Mark continues to drive innovation into the world of IT through the balance of successful technologies and efficient usage of funds.
        </p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>Today’s hybrid and multi cloud infrastructures heavily utilize virtualization, software-defined infrastructure and automation. This has provided IT teams with more efficiency and agility but has also compounded security risks. These security threats are more acute for State, local, and education agencies as they carry confidential citizen, student and state information. The agencies and institutions face the constant threat of ransomware and other destructive forms of cyberattacks. Do you have the right infrastructure and processes to improve your security posture across the kill-chain?
        
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2022.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 12 Tech II End -->
                                
                                    <!-- Session Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="ThreatLockertalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/MarkSokol.gif" /> <p>Mark is an experienced software and SaaS product and marketing leader who has driven revenue growth at several technology companies, including Trinet, Liongard and ConnectWise. His focus is evangelizing, positioning and creating awareness for CyberFOX. He is known as a creative, pragmatic leader who can find great talent and then develop them into high-performing teams.</p>
                                                
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>As the cybersecurity landscape continues to evolve, protecting organizations from daily cyber threats is becoming increasingly difficult. According to the Verizon Data Breach Investigation Report, over 90% of successful Windows breaches occur due to users having privileged access. To avoid being included in this year's report, it's important to take a major step in cybersecurity planning by removing local Admin rights from end-users. However, this can be challenging as it may result in end-users becoming frustrated when they need to request updates. CyberFOX VP, Mark Sokol, provides a solution called "The Best of Both Worlds", which aims to increase security while reducing end-user frustration. Learn more about this solution and how it can help you protect your organization from cyber threats.</p>
                                                
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 9 Main End -->
                                
                                    <!-- Session Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="ThreatLocker">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/CraigStevenson.gif" /> <p>Craig Stevenson is a cybersecurity expert with over 12 years of industry experience. Craig brings a wealth of knowledge, from teaching Cyber Operations at the John Hopkins Graduate School for Intelligence to his role as Head of the Cyber Exploitation Unit at Raytheon Technologies, where he was responsible for building and teaching custom offensive cybersecurity classes for government agencies and allies overseas. Craig is a Certified Ethical Hacker and also holds a Master of Science in Mathematics from Kent University. He is the founder and former CEO of HyperQube Technologies until its acquisition by global cybersecurity provider, ThreatLocker, where he now serves as the Director of ThreatLocker Ops.</p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>Join ThreatLocker Product Manager Craig Stevenson for a live hacking demonstration to learn about the tools and techniques you need to protect yourself against cyberattacks.</p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 9 Main End -->
                                
                                <!-- Session Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="ScaleComputingtalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/RichKorb.gif" /> <p>Rich Korb is the Systems Engineering Director for the East region at Mist, where he not only manages an incredible team but is also a field SE for the Southeast region. Prior to Mist, Rich was the Director of Systems Engineering of North America for Aerohive Networks. With nearly 2 decades of experience in the industry, Rich has focused the last 10 years on WLAN design and deployment across practically every vertical. He has been instrumental in key customer wins through his technical
        thought leadership.
        
        </p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>Juniper continues investing in its AI foundation, utilizing the AI technology to differentiate as it expands its Mist AI-powered cloud services and applications across the entire campus network. Learn how this solution is leading to REAL business outcomes for many of our customers.<br>
        
        If you haven’t checked us out lately, you may have missed that Juniper Networks has again been named THE Leader, Furthest in Completeness of Vision, and Highest in Ability to Execute, in the 2022 Gartner® Magic Quadrant™ for Enterprise Wired and Wireless LAN Infrastructure.<br>
        
        Join us for this session as you'll learn about new features of Mist and hear about different organizations using it. We'll also show you how our solutions are making a difference in for the guest and staff on your network—and how they can benefit yours too.<br>
        
        During this session, you will learn to reach your network automation goals like:<br>
        - Dropping IT Support tickets by over 90%<br>
        - Configuring 500 sites in less than 5 minutes<br>
        - Reducing technical staff visits to branch locations by 85%<br>
        - Getting real cost savings – up to 78% on your investment
        
        
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 9 Main End -->
                                
                                <!-- Session 9 Tech I Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="TPxtalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/ChrisRudolph.gif" /> <p>Christopher Rudolph is a dynamic and engaging speaker known for his cybersecurity and application networking expertise. With 18 years of experience in the field, he is a thought leader and influencer in the industry. As the Product Marketing Manager for the Americas at Cato Networks, Christopher is responsible for competitive analysis, product positioning, and sales support for the Americas region. His deep understanding of SASE, security, and networking has made him a sought-after speaker at conferences and events. Christopher has a passion for sharing knowledge and helping others navigate the complexities of cybersecurity. His presentations are informative and inspiring, leaving audiences with actionable takeaways and a fresh perspective on SASE and security.</p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>In the ever-evolving networking, security, and connectivity landscape, SASE (Secure Access Service Edge) emerges as the future, and that future is now. SASE revolutionizes how organizations manage their networks by converging security and networking, reducing complexity, and enhancing flexibility. Come and listen in on where SASE came from and where it is going in the future
        
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 9 Main End -->
                                
                                <!-- Session 13 Tech I Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="13tech1">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:275px;" alt="" src="https://technologysummit.net/images/Speaker Heads/AndrewMoore.jpg" /> <p>Andrew Moore has a history of building great operational systems. He has worked in the IT arena for over 17 years and has been instrumental in the successful building of several businesses into multi-million dollar companies.</p><br><br><br>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>Businesses need to be aware of the changing threat to their organizations posed by cyber security criminals. This presentation walks business executives through the current issues facing companies, approaches on how to solve these issues and real world tactics employers can utilize for a safer network.  
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2022.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 13 Tech I End -->
                                
                                <!-- Session 12 Sec Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="OneTrusttalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Moderator's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/SamParker.gif" /> <p>Sam Parker serves as a Senior Manager of Sales Engineering at OneTrust, the Trust Intelligence Platform, unlocking every company’s value and potential to thrive by doing what’s good for people and the planet. OneTrust connects privacy, GRC, ethics, and ESG teams, data, and processes, so all companies can collaborate seamlessly and put trust at the center of their operations and culture. In his role, Sam supports the Trust Intelligence Platform where he leads a team of Sales Engineers to architect solutions across OneTrust’s four cloud offerings. Sam has 8 years of experience in Corporate Governance, Risk Management, Privacy and Third-Party Supply Chain, and earned a Master of Business Administration at Auburn University. He holds 6 professional certifications from the IAPP, ISACA and OCEG.
        </p><br>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>As AI integration becomes more prevalent, understanding the ethical dimensions of data handling is critical. This session will explore key strategies for managing data responsibly, from collection to disposal, ensuring compliance, transparency, and societal benefit. Our expert speaker will offer insights into aligning AI initiatives with ethical guidelines and regulatory frameworks, empowering CIOs and IT professionals to drive innovation while upholding data privacy and integrity. 
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 12 Sec End -->
                                
                                    <!-- Session 12 Sec Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="CISOtalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Moderator's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Governing Body Members/FTS/WilsonBautistaJr.gif" /> <p>Wilons is CEO of Jun Cyber and Executive Director of Cyber Ohana Project. Wilson is a Defense Industrial Base Cybersecurity expert in DFARS , ITAR, CUI, CDI, and other regulatory compliance requirements for federal contractors and their facilities. </p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>This roundtable is for attendees for executives with VIP badges ONLY. This session is intended for audience participation so be ready to discuss, receive valuable information, and connect with others for further discussion.  
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 12 Sec End -->
                                
                                    <!-- Session 12 Sec Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Dwayne">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Moderator's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/DwayneAllen.gif" /> <p>Dwayne Allen is SVP & CTO at Unisys, a global IT services and solutions company. Reporting to the CEO he acts as a catalyst for driving strategic IT and client related efforts for the company.  His top priority currently is orchestrating the company’s approach around Generative AI. He also has responsibility for Innovation, Architecture and Intellectual Property globally.  His career spans across four industries with international breadth, having worked in 15 countries (50+ cities).<br>
        Prior to Unisys he was a Global Digital Strategist at Microsoft, where he worked with major global clients in in eight industries to re-imagine their business and future outcomes through digital innovation and transformation.  Prior to joining Microsoft, he was CIO at Masonite International and at Cummins as CIO of the Components segment.  Preceding a decade in manufacturing, Dwayne held IT leadership roles at Fifth Third Bank in Cincinnati, Wells Fargo in Charlotte, and Marriott International in Washington DC.<br>  
        Dwayne is on the board of directors of Cross Country Healthcare, a market-leading healthcare workforce solutions and advisory firm and past member the board at KPIT, an IT and Engineering company in India He is the 2023 winner Florida of CIO/CTO of the year (known as the ORBIE Award), was a 2023 Finalist for ITSMF Technology Executive of the year, and was named to 2022 Top 50 IT Execs by C-Suite Alumni Spotlight.  Dwayne earned a Bachelor’s degree from the University of Virginia an MBA from George Washington University, and completed the Yale University leadership program.      
        </p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>As the hype around Generative AI reaches a fever pitch, many enterprises remain in the research phase, carefully dissecting the technology’s practical implications, scrutinizing its real-world applications and assessing the underlying value proposition.  Unisys, a global IT services and solutions company, has embarked on a comprehensive Gen AI approach focusing both externally to generate more client value and internally to drive more productivity.  In a session we will thoughtfully cover the following:<br>
        •	The distinctive nature of Generative AI: Unlike its AI predecessors focused on rule-based tasks, Generative AI brings an unparalleled capability for creative reasoning and complex problem-solving. We'll discuss how this allows businesses to go beyond mere automation into innovation previously reserved for human intelligence.<br> 
        •	Unlocking productivity and differentiating outcomes: Investigate emerging opportunties for Generative AI that hold the promise of transformative impacts on operational efficiencies and client outcomes.  Whether it’s automating intricate data analyses or generating high-quality content at scale, the productivity gains are substantial.<br> 
        •	Building blocks for successful implementation: Transitioning from conventional AI technologies to a Generative AI framework necessitates specific foundational elements. Explore the key prerequisites, such as specialized computing infrastructure and data strategies, to ensure seamless implementation and maximum ROI.<br> 
        •	Safeguarding against risks: While Generative AI can be transformative, it also introduces risk, including ethical dilemmas and potential misuse. Explore strategies for identifying and mitigating these risks early in the adoption phase to ensure responsible usage.
        
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 12 Sec End -->
                                
                                <!-- Session 1 Main Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Junipertalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/TonyMacDonald.gif" /><p>Tony MacDonald is a Security Sales Executive with over 20 yrs of software sales experience. Before entering the world of security software sales, he was a security analyst for Wells Fargo. He has also worked as a sales engineer for Symantec, VMware, and Visoncore where his focus was security and compliance.</p><br>
                                                
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/NoeOrtega.gif" /><p>Noe Ortega is a Pre Sales Engineer, helping customers streamline and modernize their IT infrastructure. With a background in software development and a former Release Engineer, he has a passion for helping customers implement solutions that will help reduce complexities in their IT environment.</p><br><br>
                                                
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>Doing business in a digital economy demands agility, and corporate digital infrastructures have changed profoundly in response. But as enterprises race to expand activities across globally distributed digital ecosystems, they must reinvent their security posture to defend an expanding attack surface. From core to cloud to edge, SUSE provides industry-leading security and compliance solutions for the digital enterprise.</p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 1 Main End -->
                                    
                                    <!-- Session 9 Main Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Glasswalltalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/JessicaLynn.gif" /> <p>Jessica Lynn has held various roles in the cybersecurity industry for the past 9 years. Moving from distribution to channel development to enterprise sales – she has a pulse on the threat landscape that businesses face today in the age of digital. She thrives on helping partners and businesses solve their biggest problems. Today Jessi is Director of Partner Sales with UK based cybersecurity company Glasswall and loves her life at home with soon to be husband-to-be, her 13 yr old son, her 2 cats and a dog.
        </p>
        
        <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/GregRhein.gif" /> <p>For the last 5 and a half years Greg Rhein has been one of Glasswall’s Solutions Architects and is currently based out of our Reston VA office.   Prior to this he was Security products Sales Manager and Technical Lead of an Arizona based Distributor. Previously to this he has held positions as an Enterprise Product Manager at HP/Compaq and Contract Product Support lead at Apple Computer.  He has also worked as a Technical lead while consulting for MGM Studios, Sony Pictures Entertainment, Fox Studios, SunAmerica (AIG) as well as a number of Bi-Coastal Law firms.
        </p>
        
        <h4 class="modal-title">Speaker's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/PeteNewman.gif" /> <p>Pete Newman is US Sales Director for Glasswall based in the NYC area and has a background in financial and regulatory technology, software and market data.  As a Sales Executive, Product Manager and software entrepreneur, Pete has helped large investment banks, wealth management firms and leading online brokers solve business problems with best of breed technology solutions.  His company Gotham Software, a provider of compliance solutions for the fixed income market was acquired by Ipreo (IHS Markit) in 2004.
        </p>
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>Real time prevention strategy is key to staying ahead of cyber criminals and to keep up with digital transformation and globalization trends. Come learn about an emerging technology – Content Disarm and Reconstruct (CDR) – which aims to restore trust to digital collaboration and give your security and business operations teams a fighting chance to operate in today’s climate. CDR is the next defacto standard to prevention based cybersecurity strategy by shifting from looking for potential bad to what a known good file content looks like. Trust your files again.
        
        </p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2022.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 9 Main End -->
                                    
                                    
                                <!-- Session 3 Main Stage Start -->
                            <div class="modal tc-modal tc-animation-scale-up" id="Paneltalk">
                    <div class="modal-dialog ">
                        <div class="modal-content modal-padding">
                        <div class="modal-header">
                            <i class="icon-cancel-3 close" data-dismiss="modal"></i>
                            
                                                
                                                <h4 class="modal-title">Sridhar Kocharlokota's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/Sridhar_K.gif" /> <p>Sridhar Kocharlakota brings more than 22 years of hands-on experience Technology Architecture areas specializing in Infrastructure and Security Areas. As the Director of Technology at Energy Insurance Mutual, Sridhar oversees the architecture and implementation of operational and business support systems that the organization uses to operate and manage the business. Sridhar is also the lead technologist for creative and innovative technology solutions at EIM. Over the last two decades Sridhar has spent significant time designing and architecting Content Delivery Networks for AT&T and running Disaster Recovery programs at Obamacare. Sridhar holds a Bachelor's in Mechanical Engineering and holds a Master's in Technology Management from Stevens Institute of Technology, New Jersey. Also, Sridhar is currently in the last semester of a dual master’s program at Stevens working towards his MBA.</p><br>
                                                
                                                <h4 class="modal-title">Surendra Reddy Challapalli's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/Surendra.gif" /> <p>Surendra is a Business Systems and Applications Technology Specialist, particularly within Financial Technology (FinTech) industry. 
        
        By leveraging my expertise in the financial markets landscape, regulatory mandates, and technology; I specialize in developing strategic business systems and innovative solutions that have a positive impact on investors, financial market.</p><br>
        
                                                
                                                <h4 class="modal-title">Russell Haupert's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Governing Body Members/FTS/RussellHaupert.gif" /> <p>With 20+ years of experience as an executive-level leader focused in technology, IT, & strategic business transformation efforts, I have been integral to multi-million-dollar revenue increases. It is my passion to utilize my technology background with SaaS & Cloud infrastructure initiatives, while managing & balancing high-level budgets. As a leader, I have focused on portfolio management while ensuring multi-million dollar projects are coordinated & executed with ease.</p><br>
                                                
                                                <h4 class="modal-title">Charels Payne's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Speaker Heads/CharlesPayne.gif" /> <p>Charles Payne is a dedicated Cybersecurity Executive with more than 25 years of applied experience in Digital Forensics, Governance Risk & Compliance, Penetration Testing, and Vulnerability Management. Charles believes that the correlation of expertise, progressive insights, and preemptive measures enable organizations to limit, reduce, or mitigate risk establishing developmental trust with key stakeholders. Charles also serves on the advisory board of vital organizations, providing business-critical experience to achieve defined business objectives. As a professor, Charles is passionate about fostering the cybersecurity community by teaching in an interactive lab setting and mentoring the next generation of cybersecurity professionals.</p><br>
                                                
                                                        <h4 class="modal-title">Rick Rampersad's Bio</h4>
                        </div>
                        <div class="modal-body">
                            <img class="img-thumbnail image-text" style="float:left; width:150px;" alt="" src="https://technologysummit.net/images/Governing Body Members/RickR.gif" /> <p>Coming Soon</p><br><br>
                                                
                                                
                                                
                                                
        
        
        
                                                <h4 class="modal-title">Synopsis</h4>
                        </div>
                        <div class="modal-body">
                            <p>This panel will discuss the key trends that are currently shaping the workforce. Join our speakers to hear about strategies you can employ to navigate the current environment and make your team more successful. This session will include audience Q&ampA.</p>
                        </div>
                        <div class="modal-footer">
                            &copy; Copyright Machaon 2023.
                        </div>
                        </div>
                    </div>
                            </div>
                            <!-- Session 3 Main Stage End -->	
                                
                                <a id="exhibitors" name="exhibitors">
                    
                    </div>				
                
        
                
        
            </div>
            </div>	
        </div>	 <!-- END SCHEDULE CONTENT -->
                        
                        <!-- Divider -->
                        <div class="hr5" style="margin-top:15px; margin-bottom:45px;"></div>
                        
                        
                        
                        <!-- Classic Heading -->
                        <h4 class="classic-title"><span>Exhibitors</span></h4>
                        <div class="row">
                        
                                                
                                                <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://abacode.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Abacode.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            
                            </div>
                            <!-- End Icon Box -->
                            
                            <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://acarasolutions.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Acara.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            
                            </div>
                            <!-- End Icon Box -->
                                                
                                                <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://accedian.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/AccedianNEW.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            
                            </div>
                            <!-- End Icon Box -->
                            
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://ampiosolutions.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/ampiO.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            
                            </div>
                            <!-- End Icon Box -->
                            
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://arcticwolf.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/ArcticWolf_NEW.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                                
                            </div>
                            <!-- End Icon Box -->
                                                
                                            <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://aspg.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/ASPG.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            
                            </div>
                            <!-- End Icon Box --> 
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://auroracomsystems.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Auroracom.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            
                            </div>
                            <!-- End Icon Box --> 
                            
                                    <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="http://www.b12consulting.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/B12.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="http://www.blinkops.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/BlinkOps.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="http://www.bpktech.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/BPK.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="http://www.c1sttech.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/C1st.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="http://www.catonetworks.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/CatoNetworks.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->        
                            
                                    
                            
                                <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://centracomm.net/" target="new"><img src="https://technologysummit.net/images/Exhibitors/CentraComm.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
                    <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://cloudflare.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Cloudflare.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
                            
                            
                            <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.cohesity.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Cohesity.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                            
                                    <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.commvault.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Commvault2023.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.cradlepoint.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Cradlepoint2023.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                            
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.cyberfox.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/CyberFOX.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                            
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.darktrace.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Darktrace.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                                                
                            
                            
                            
                            <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.datto.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Datto.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.disrv.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/DIS.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.deepwatch.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Deepwatch.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.dgtechllc.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/DGTechnology.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                    <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.ericom.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Ericom.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                    <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://pixel.google/business.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Google.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.heimdalsecurity.com" target="new"><img src="https://technologysummit.net/images/Exhibitors/Heimdal.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.hitachivantara.com/en-us/home.html" target="new"><img src="https://technologysummit.net/images/Exhibitors/HitachiNew.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                            <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.hpe.com/us/en/home.html" target="new"><img src="https://technologysummit.net/images/Exhibitors/Hewlett.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                
        <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://imperiumdata.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Imperium.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://innetworktech.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/InNet.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.juniper.net/us/en/" target="new"><img src="https://technologysummit.net/images/Exhibitors/JuniperMist.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.keetpnetlabs.com" target="new"><img src="https://technologysummit.net/images/Exhibitors/KeepnetLabs.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://mainline.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Mainline.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        
        
        <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://mobidev.biz/" target="new"><img src="https://technologysummit.net/images/Exhibitors/MobiDev.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://moveworks.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Moveworks.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.nasuni.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Nasuni.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->  
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.neat.no/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Neat.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.netapp.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/NetApp.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->  
        
        
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.netskope.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Netskope.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.netwolves.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/NetWolves.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.nextiva.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/NextivaWhite.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://niagaranetworks.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/NiagaraNetworks.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.nix-united.com/en" target="new"><img src="https://technologysummit.net/images/Exhibitors/NixUnited.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.ntgit.com" target="new"><img src="https://technologysummit.net/images/Exhibitors/NTG.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.onetrust.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/OneTrust.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.origina.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Origina.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.paloaltonetworks.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/PaloAltoNetworks.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.quadrantsec.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Quadrant.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.rainnetworks.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/RainNetworks.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->       
            
        <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.professionalintegrations.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/ProInteg.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.scalecomputing.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/SCALE_NEWEST.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.sophos.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Sophos.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.splashtop.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Splashtop.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.splunk.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Splunk.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.suse.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/SUSE2.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.sxipher.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Sxipher.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.tdsynnex.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/TDSynnex.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.threatlocker.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Threatlocker.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.tpx.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/TPx.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.unitrends.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/UnitrendsNEW.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.varonis.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Varonis2.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.wiz.io/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Wiz.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box --><!--
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.veeam.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Veeam.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.zadara.com/" target="new"><img src="https://technologysummit.net/images/Exhibitors/Zadara_2020NEW.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
                        </div>
                    
                    <!-- End Services Icons -->  
                    
                    
                    <!-- Classic Heading -->
                        <h4 class="classic-title">&nbsp;</h4>
                        <h4 class="classic-title"><span>Supporting Sponsors</span></h4>
                        <div class="row">
                        
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://chapters.acp-international.com/greatertampabay" target="new"><img src="https://technologysummit.net/images/Supporting Partners/ACP.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            
                            </div>
                            <!-- End Icon Box -->
                            
                                    <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://cyberflorida.org" target="new"><img src="https://technologysummit.net/images/Supporting Partners/CyberFL.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            
                            </div>
                            <!-- End Icon Box -->
                            
                                <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.cyberohanaproject.org" target="new"><img src="https://technologysummit.net/images/Exhibitors/CyberOhana.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            
                            </div>
                            <!-- End Icon Box -->
                            
                            
                            
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="http://www.hightechconnect.io/" target="new"><img src="https://technologysummit.net/images/Supporting Partners/HighTechConnect.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                                
                            </div>
                            <!-- End Icon Box -->
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://sfl.himsschapter.org/" target="new"><img src="https://technologysummit.net/images/Supporting Partners/HIMSS.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                                
                            </div>
                            <!-- End Icon Box -->
                            
                            
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://tampabay.iiba.org/" target="new"><img src="https://technologysummit.net/images/Supporting Partners/IIBA.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            
                                                    
                            
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://engage.isaca.org/westfloridachapter/home" target="new"><img src="https://technologysummit.net/images/Supporting Partners/ISACA.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://tampaissa.org/" target="new"><img src="https://technologysummit.net/images/Supporting Partners/ISSA.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
                            <!-- End Icon Box -->
                            <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.nigp-tampabay.org/" target="new"><img src="https://technologysummit.net/images/Supporting Partners/NIGP.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.sctecentralfl.org" target="new"><img src="https://technologysummit.net/images/Exhibitors/SCTE.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://chapter.simnet.org/tampabay/home" target="new"><img src="https://technologysummit.net/images/Supporting Partners/SIM.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.tbtla.org" target="new"><img src="https://technologysummit.net/images/Exhibitors/TBTLA.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://www.tampabay.tech" target="new"><img src="https://technologysummit.net/images/Exhibitors/TampaBayTech.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box -->
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://wict.org/florida-chapter" target="new"><img src="https://technologysummit.net/images/Exhibitors/WICT.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        <!-- Start Icon Box -->
                            <div class="col-md-2 service-box service-center">
                                <div class="service-icon">
                                    <a href="https://witi.com/networks/tampa/" target="new"><img src="https://technologysummit.net/images/Supporting Partners/WITI.gif" alt="" width="120" height="80"></a>
                    
                                </div>
                            </div>
        <!-- End Icon Box --> 
        
        
        
                    </div>
                    
                    <!-- End Services Icons -->  
                        
            </div>
            </div>
        </div>
        <!-- End content -->
            
            
        
        
        <!-- Start Footer -->
        <footer>
            <div class="container">
            <div class="row footer-widgets">
                        
                        <!-- Start Contact and Social Media Widget -->
                <div class="col-md-4">
                            <div class="footer-widget contact-widget">
                    <h4>Contact info<span class="head-line"></span></h4>
                    <ul>
                    <li><span>Address: </span>1728 W Canning Dr. Mount Pleasant, SC 29466								</li>
                    <li><span>Phone Number: </span>(480) 409-4601 </li>
                                    <li><span>Fax Number: </span>(866) 219-7524 </li>
                    <li><span>Email: </span><a href="mailto:info@machaoncorp.com">info@machaoncorp.com</a></li>
                                    <li><span>Website:</span> <a href="https://technologysummit.net/florida.html">https://technologysummit.net/florida.html</a></li>
                    </ul>
                                </div>
                                    <div class="footer-widget social-widget">
                    <h4>Follow Us<span class="head-line"></span></h4>
                                <ul class="social-icons">
                    <li>
                        <a href="https://www.facebook.com/machaonsummit" target="new" class="facebook"><i class="icon-facebook-2"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/MachaonSummit?lang=en" target="new" class="twitter"><i class="icon-twitter-2"></i></a>
                    </li>
                                    <li>
                        <a href="https://www.linkedin.com/company/texas-technology-summit---machaon-corporation" target="new" class="linkdin"><i class="icon-linkedin-1"></i></a>
                    </li> 
                                    <li>
                        <a href="https://www.instagram.com/machaonsummit/?hl=en" target="new" class="instagram"><i class="icon-instagramm"></i></a>
                    </li>
                    <li>
                        <a href="skype:machaoncorp" target="new" class="skype"><i class="icon-skype-2"></i></a>
                    </li>
                    </ul>
                </div>
                </div>
                        <!-- End Contact and Social Media Widget -->
                        
                        <!-- Start Twitter Widget -->
                <div class="col-md-4">
                <div class="footer-widget twitter-widget">
                    <h4>Twitter Feed<span class="head-line"></span></h4>
                    <ul>
                    <li>
                        <a class="twitter-timeline" data-width="300" data-height="450" data-theme="dark" href="https://twitter.com/MachaonSummit?ref_src=twsrc%5Etfw">Tweets by MachaonSummit</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </li>
                    </ul>
                </div>
                </div>
                        <!-- End Twitter Widget -->
                        
                <!-- Start Subscribe & Social Links Widget -->
                        <div class="col-md-4">
                <div class="footer-widget mail-subscribe-widget">
                    <h4>Get in touch<span class="head-line"></span></h4>
                    <p>Join our mailing list to stay up to date and get notices about our technology summits!</p>
                    <form class="subscribe">
                    <input type="text" placeholder="info@machaoncorp.com">
                    <input type="submit" class="main-button" value="Send">
                    </form>
                </div>
                            
                            <div class="footer-widget contact-widget">
                    <h4>Previous Florida Technology Summits<span class="head-line"></span></h4>
                    <ul>
                                <li><span><a href="past_events/Florida23.html" target="new">2023 - 4th Annual Show</a></span></li>
                                <li><span><a href="past_events/Florida22.html" target="new">2022 - 3rd Annual Show</a></span></li>
                                <li><span><a href="past_events/Florida21.html" target="new">2021 - 2nd Annual Show</a></span></li>
                                <li><span><a href="past_events/florida19.html" target="new">2019 - Inaugural Show</a></span></li>
                            
                    
                    </ul>
                                </div>   
                            
                </div>
            </div>
                    <!-- End Subscribe & Social Links Widget -->
                    
                    <!-- Start Copyright -->
            <div class="copyright-section">
                <div class="row">
                <div class="col-md-6">
                    <p>© 2024 Machaon Corporation-  All Rights Reserved</p>
                </div>
                <div class="col-md-6">
                    <ul class="footer-nav">
                    <li><a href="documents/FTS23 Floorplan.pdf" target="new">Floor Plan</a></li>
                    <li><a href="http://machaoncorp.com/Old/terms.html" target="new">Privacy Policy</a></li>
                    <li><a href="http://localhost/contact.html">Contact</a></li>
                    </ul>
                </div>						
                </div>
            </div>
                    <!-- End Copyright -->
                    
            </div>
        </footer>
        <!-- End Footer -->
            
        </div>
        <!-- End Container -->
        
        `}
}
 