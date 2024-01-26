import './fontello.css';

// <!doctype html>
// <!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
// <!--[if (gte IE 9)|!(IE)]><html lang="en" class="no-js"> <![endif]-->


const head = () => {
  return `
    <!-- Basic -->
	<title>Florida Technology Summit | Home</title>
    
    <!-- Define Charset -->
	<meta charset="utf-8">
    
    <!-- Responsive Metatag -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <!-- Page Description and Author -->
    <meta name="description" content="Florida Technology Summit">
    <meta name="author" content="Machaon">
  
    <!-- Favicon -->
    <link rel="shortcut icon" href="https://technologysummit.net/images/Machaon_Emblem_Logo.gif">
    
    <!-- Favicon -->
    <link rel="shortcut icon" href="https://technologysummit.net/images/Machaon_Emblem_Logo.gif">
    
    
    <!-- Bootstrap CSS  -->
	<link rel="stylesheet" href="https://technologysummit.net/css/bootstrap.css" type="text/css" media="screen">
  
    <!-- Revolution Banner CSS -->
    <link rel="stylesheet" type="text/css" href="https://technologysummit.net/css/settings.css" media="screen" />
  
    <!-- Vella CSS Styles  -->
	<link rel="stylesheet" type="text/css" href="https://technologysummit.net/css/style.css" media="screen">
  
    <!-- Responsive CSS Styles  -->
	<link rel="stylesheet" type="text/css" href="https://technologysummit.net/css/responsive.css" media="screen">
    
    <!-- Css3 Transitions Styles  -->
	<link rel="stylesheet" type="text/css" href="https://technologysummit.net/css/animate.css" media="screen">
  
    <!-- Color CSS Styles  -->
    <link rel="stylesheet" type="text/css" href="https://technologysummit.net/css/colors/blue.css" media="screen" />
  
    <!-- Fontello Icons CSS Styles  -->
    // <link rel="stylesheet" type="text/css" href="https://technologysummit.net/css/fontello.css" media="screen">
    // <link rel="stylesheet" type="text/css" href="https://technologysummit.net/css/fontello.css" media="screen">
    
    <!-- Fontawesome Icon font 
	    <link rel="stylesheet" href="https://technologysummit.net/css/font-awesome.min.css">-->
    
    <!-- form stylesheet -->
	    <link rel="stylesheet" href="https://technologysummit.net/css/elements/form.css">

	    <!-- animate stylesheet -->
	    <link rel="stylesheet" href="https://technologysummit.net/css/elements/animate.css">

	    <!-- modal stylesheet -->
	    <link rel="stylesheet" href="https://technologysummit.net/css/elements/modal.css">
    
    <!--[if IE 7]><link rel="stylesheet" href="https://technologysummit.net/css/fontello-ie7.css"><![endif]-->
    
    

    <!-- Vella JS  -->
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.min.js"></script>
	<script type="text/javascript" src="https://technologysummit.net/js/jquery.migrate.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/modernizrr.js"></script>
	<script type="text/javascript" src="https://technologysummit.net/js/bootstrap.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.fitvids.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/owl.carousel.min.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/nivo-lightbox.min.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.isotope.min.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.appear.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/count-to.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.textillate.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.lettering.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.easypiechart.min.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.nicescroll.min.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.parallax.js"></script>
    <script type="text/javascript" src="https://technologysummit.net/js/jquery.themepunch.plugins.min.js"></script>
	<script type="text/javascript" src="https://technologysummit.net/js/jquery.themepunch.revolution.min.js"></script>
	<script type="text/javascript" src="https://technologysummit.net/js/script.js"></script>

	<!--[if IE 8]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->` 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head dangerouslySetInnerHTML={{__html: head()}} />
      {children}
    </html>
  )
}
