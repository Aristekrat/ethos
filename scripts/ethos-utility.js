$(document).ready(function() { 

/*** Homepage ***/ 

$('.mainNavBox').css('opacity', '0.0');
$('#mainIconBuild').animate({
	opacity : 1
}, 1000);
$('#mainIconDesign').animate({
	opacity : 1
}, 2000);
$('#mainIconPerformance').animate({
	opacity : 1
}, 3000);
$('#mainIconFind').animate({
	opacity : 1
}, 4000);
// End Homepage 

/*** Affordability / Chinese Dinner Page ***/ 

function leftLamp() {
	$("#Lamp1").css('backgroundPosition', '0% 5%');
	$("#Lamp2").css('backgroundPosition', '50% 109%');
	$("#Lamp3").css('backgroundPosition', '100% 109%');	
	$(".lampText").html(htmlFragmentLeft).addClass("lampLeft").removeClass("lampCenter").removeClass("lampRight");
}

function centerLamp() {
	$("#Lamp1").css('backgroundPosition', '0% 109%');
	$("#Lamp2").css('backgroundPosition', '50% 7%');	//Lit
	$("#Lamp3").css('backgroundPosition', '100% 109%');
	$(".lampText").html(htmlFragmentCenter).removeClass("lampLeft").addClass("lampCenter").removeClass("lampRight"); 
}

function rightLamp() {
	$("#Lamp1").css('backgroundPosition', '0% 109%');
	$("#Lamp2").css('backgroundPosition', '50% 109%');
	$("#Lamp3").css('backgroundPosition', '100% 6%');	//Lit
	$(".lampText").html(htmlFragmentRight).removeClass("lampLeft").removeClass("lampCenter").addClass("lampRight"); 
}  

var htmlFragmentLeft = '<h3>Only What You Need</h3><p>If you choose a large web design firm you end up paying for a lot of services you don\'\
t need. Large firms spend a lot of money on advertising, promotion, sales, and support staff. They have to make up that cost somewhere, and that somewhere is your bill. </p><p>Ethos is a three member partnership with complementary web development and online marketing skills. If you choose Ethos, you only pay for the services you receive.</p>';
var htmlFragmentCenter = '<h3>No Attorney Premium</h3><p>Many legal web design firms charge more for their services than firms providing the exact same service to non-attorneys. However, creating a legal website is not any more difficult than creating a website for other small businesses.</p> <p>Therefore, other firms must be charging an extra attorney premium. Because Ethos does not add that extra markup, it can save you a lot of money to choose us.</p>';
var htmlFragmentRight = '<h3>The Benefits of Specialization</h3><p>By focusing on the needs of the legal profession, Ethos reduces costs for you. Because we specialize in designing and optimizing legal websites we can do it faster, and therefore, cheaper.</p><p>That can mean a big cost savings for your firm if you choose Ethos instead of a generic web design firm.</p>';

var carouselPosition = 0;
(function lampCarousel() {
	var timerSpeed = 6000; 
	if (carouselPosition === 0) {
		setTimeout(lampCarousel,0);
	} else {
		setTimeout(lampCarousel,timerSpeed);
	}	//This code prevents setTimeout from delaying initial page load. 
	switch(carouselPosition) {
		case 1:
			leftLamp();
			break;
		case 2: 
			centerLamp();
			break; 
		case 3: 
			rightLamp(); 
			break; 
		case 4: 
			carouselPosition = 1; 
			leftLamp(); 
			break; 
		case 5: 
			break; 
	}	carouselPosition++;  
}());

$(".lamp").click(function() {
	carouselPosition = 5; 
}); 
 
$("#Lamp1").click(function() {
	leftLamp(); 
});

$("#Lamp2").click(function() {
	centerLamp(); 
});

$("#Lamp3").click(function() {
	rightLamp(); 
});

// End Affordability Page 

/*** Denver, CO / Lightning Page ***/ 
var stormCloud = $('<div class="theClouds" id="stormCloud"><span id="theLightning"></span></div>'),
	happyCloud1 = $('<div class="theClouds" id="happyCloud1"></div>'),
	happyCloud2 = $('<div class="theClouds" id="happyCloud2"></div>'); 
	
var spawnClouds = setInterval(createClouds, 10000); 
function createClouds() {
	var cloudTypeSwitch = Math.floor(Math.random() * 3 + 1),
		cloudType = "";
	switch(cloudTypeSwitch) {
		case 1: 
			cloudType = happyCloud1; 
			break; 
		case 2: 
			cloudType = happyCloud2; 
			break; 
		case 3: 
			cloudType = stormCloud; 
			break;
		};
	$(".lightningContainer").append(cloudType); 
	$(".theClouds").animate({
		left: "+=1000", 
	}, 100000, "linear", function() {
		$(this).css("left","14%").remove();
	}); 
} 
createClouds(); 
	
(function CloudStrike(){
	var lightningImageSrcIndex = Math.floor(Math.random() * 3 + 1);
	$("#stormCloud").html('<img src="./images/denver-page/Lightning' + lightningImageSrcIndex + '.png" id="theLightning"/>');
	$("#theLightning").toggle("pulsate",{times: 5.5});
	strikeDuration = lightningImageSrcIndex * 1000 + 4000;
	setTimeout(CloudStrike,strikeDuration);
})();
// End Lightning Page

/*** Professional Web Design / Pocketwatch Page ***/

if(document.documentElement.clientWidth < 650) {
	var clock = [
		'<div class="clockWrapper">',
		'<img id="clock" src="./images/professional-page/clockSmall.jpg" />',
		'<img id="hours" src="./images/professional-page/HourHandSmall.png" />',
		'<img id="minutes" src="./images/professional-page/MinuteHandSmall.png" />',
		'<img id="seconds" src="./images/professional-page/SecondHandSmall.png" />',
		'</div>'
	].join('');
} else {
	var clock = [
		'<div class="clockWrapper">',
		'<img id="clock" src="./images/professional-page/clock.jpg" />',
		'<img id="hours" src="./images/professional-page/HourHand.png" />',
		'<img id="minutes" src="./images/professional-page/MinuteHand.png" />',
		'<img id="seconds" src="./images/professional-page/SecondHand.png" />',
		'<figcaption id="noFigCaption">A symbol of quality craftsmanship<span id="cannotTransform">, that can accurately tell the time wherever you are.</span></figcaption>',
		'</div>'
	].join('');
}	// Setting the HTML through the JS is necessary to keep the watch responsive. Classic responsive techniques broke down at too many viewports. 

$("#qualityPage aside").fadeIn().append(clock); 

(function Clock(){
    var date = new Date().getDate(),
		hours = new Date().getHours(),
        minutes = new Date().getMinutes(),
		seconds = new Date().getSeconds(),
		hrotate = hours * 30 + (minutes / 2),
		mrotate = minutes * 6,
		srotate = seconds * 6,
		jQueryHook,
		rotateVar; 

	$("#date").html(date);
    
    function Rotate(jQueryHook, rotateVar) {
    	$(jQueryHook).css({
    		'transform'	:  'rotate('+ rotateVar +'deg)',
			'-moz-transform'	:'rotate('+ rotateVar +'deg)',
			'-webkit-transform'	:'rotate('+ rotateVar +'deg)',
			'-ms-transform' : 'rotate(' + rotateVar + 'deg)'
    	})
    }
    Rotate("#hours", hrotate); 
    Rotate("#minutes", mrotate);
    Rotate("#seconds", srotate);
	setTimeout(Clock,1000);
})();

// 	End Pocketwatch / Professional Web Design Page

/*** Website for Law Firms / Tie & Dressing Room Page ***/ 

	$("#Tie1").click(function() {
		$("#siteBuildingTextContainer").html("<div> \
		<h2 id='siteBuildingh2Simple'>Simple, Functional, Affordable</h2> \
		<p>With this option, we will give you a menu of legal website templates that we have <span>hand selected as being among the best</span>. Then, we will tailor the template to your firm, and we will do so <span>competently</span>, which can be far too rare when it comes to templates. </p> \
		<p>Template websites do not look as distinctive as custom websites, but they have <span>a lot of power</span>. They are built on 'content management systems', which make it extremely easy to add a vast array of functionality to your site. They also can look quite attractive despite not being as distinctive. </p> \
		<b><p>Price: $475</p></b> \
		</div>");
	});
	$("#Tie2").click(function() {
		$("#siteBuildingTextContainer").html("<div> \
		<h2 id='siteBuildingh2Custom'>Custom Made, Just for You</h2> \
		<p>When potential clients search for legal help online, they are sifting through many options. You have a <span>big competitive advantage</span> if you have a website that <span>stands out</span>.</p> \
		<p>With this option, <span>we will create a website that is made to fit your firm</span>: it's practice areas, it's personality, and it's competitive strengths.</p> \
		<p>In addition to a custom design, you also get quite a few added features included for free: full on-page <span>SEO optimization, full browser compatibility, blogging capabilities, analytics, and 'responsive' coding practices</span>, which will make it cheap and easy to polish your site for mobile devices.</p> \
		<b><p>Price: $975</p></b> \
		</div>");
	});
	$("#Tie3").click(function() {
		$("#siteBuildingTextContainer").html("<div> \
		<h2 id='siteBuildingh2Amazing'>The Top 1%</h2> \
		<p>When you want to invest in a website that will amaze your peers, your clients, and yourself - this is a great option. If you select this choice, we give you everything.</p> \
		<ul class='crazyPants'><li>Do you want a website that looks professional, distinctive, and contemporary? Done.</li> \
		<li>Do you want a website that looks great on everything from modern smartphones to ancient browsers? No problem.</li> \
		<li>In fact, wouldn't it be nice to have a website that's 'future proof', that won't need to be updated anytime soon? You can have that.</li> \
		<li>Do you want a website that is fully SEO optimized, conversion optimized, easy to build on, and easy for you to manage? You can have that.</li> \
		</ul> \
		<p>With this option, we keep going until we get it exactly right. In fact, this choice is backed by our 'Gorgeous Guarantee.' It is not hard to build a website that will beat the pants off virtually all other legal websites. It is just a question of talent and time. We will put both at your disposal, and we guarantee you excellence at the end.</p> \
		<b><p>Price: $2,795</p></b> \
		</div>");
	});

// END Websites for Law Firms / Tie & Dressing Room Page

/*** Email Form Functionality ***/

function isValidEmail(element) {
	var emailRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!emailRegex == ($(element).val())) {
  		$(element).focus();
  		return false;
  	} else {
  		return true;
  	}	
}

function notEmpty(element) {
	var comparVar = $(element).val(); 
	if(!comparVar) {
		$(element).focus(); 
		return false;
	} else {
		return true; 
	}
}

$(".contactFormDiv form").submit(function(event) {
	event.preventDefault();
	$("#submitButton").attr("disabled");
	var emailCheck = isValidEmail($("input[name=yourEmail]")); 
	var formCheck = notEmpty($("input[name=yourMessage]"));
	console.log(formCheck); 
	if(emailCheck && formCheck === true) {
		$.ajax({
			url: "../includes/mail-functionality.php",
			type: "post",
			data: $(".contactFormDiv form").serialize()
		}).done(function(jqxhr){
			console.log(jqxhr);
			$("#submitButton").attr("disabled", false).html("Submit");
			$(".contactFormDiv").html("<h3>Thank You For Your Message</h3><br/><p>We will get back to you soon.</p>");
		}).fail(function(){
			$("#submitButton").attr("disabled", false).html("Submit");
			$(".contactFormDiv").html("<h3>Error</h3><br/><p>Our Apologies, something went wrong. We'll fix that ASAP.</p>");
		});
	}
}) 

})