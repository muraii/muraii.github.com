// ==============================================
// Copyright 2004 by CodeLifter.com
// Free for all; but please leave in this header.
// ==============================================

var Quotation=new Array() // do not change this!

// Set up the quotations to be shown, below.
// To add more quotations, continue with the
// pattern, adding to the array.  Remember
// to increment the Quotation[x] index!

Quotation[0] = "&#147;That all men are equal is a proposition which, at ordinary times, no sane individual has ever given his assent.&#148; \<br /\> - \<cite\>Aldous Huxley\</cite\>";
Quotation[1] = "&#147;After silence, that which comes nearest to expressing the inexpressible is music.&#148; \<br /\> - \<cite\>Aldous Huxley\</cite\>";
Quotation[2] = "&#147;Whose trachea do you have to crush with your mind to get a little service around here?&#148; \<br /\> - \<cite\>\<a href = \"http://darthside.blogspot.com\" title = \"The Darth Side\"\>The Darth Side\</a\>\</cite\>";
Quotation[3] = "&#147;I frame no hypotheses; for whatever is not deduced from the phenomena is to be called an hypothesis and hypotheses...have no place in experimental philosophy.&#148; \<br /\> - \<cite\>Sir Isaac Newton\</cite\>";
Quotation[4] = "&#147;I want the sun to forget to appear so I can be in a world of recklessness and fear.&#148; \<br /\> - \<cite\>\<a href = \"http://alienwarfair.com\" title = \"The Missus\"\>The Missus\</a\>\</cite\>";
Quotation[5] = "&#147;Any sufficiently advanced technology is indistinguishable from magic.&#148; \<br /\> - \<cite\>Arthur C. Clarke\</cite\>";
Quotation[6] = "&#147;don't look so \<a href = \"http://dictionary.reference.com/wordoftheday/archive/2005/05/10.html\" title = \"Dictionary.com Word of the Day for 10 May 2005\"\>wayworn\</a\> \<br /\>it's only five blocks to the \<br /\>methadone clinic.&#148; \<br /\> - \<cite\>\<a href = \"http://www.robweychert.com/haiku/2005/05/10/index.php\" title = \"Daily Haiku: \'Wayworn\'\"\>Rob Weychert\</a\>\</cite\>";
Quotation[7] = "&#147;Love the river's &#145;beauty&#146;, but live on a hill.&#148; \<br /\> - \<cite\>Anonymous\</cite\>";
Quotation[8] = "&#147;To err is human, to forgive, divine, but holy shit, if you fuck this up one more fucking time I'm gonna rip the eyes out of your fucking head and piss into your dead skull.&#148; \<br /\> - \<cite\>\<a href = \"http://www.shrovetuesdayobserved.com/cliche.html\" \>Shrove Tuesday Observed\</a\>\</cite\>";
Quotation[9] = "&#147;Most prophets resisted the calling; but Phil...he was just being a dick.&#148; \<br /\> - \<cite\>\<a href = \"http://www.bearskinrug.co.uk\" title = \"Bearskinrug\"\>Bearskinrug\</a\>\</cite\>";
Quotation[10] = "&#147;Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did.  So throw off the bowlines.  Sail away from the safe harbor.  Catch the trade winds in your sails.  Explore.  Dream.  Discover.&#148; \<br /\> - \<cite\>Mark Twain\</cite\>";
Quotation[11] = "&ldquo;When the world gives you lemons&mdash;well, you know, shoot that fucker.&rdquo; \<br /\> - \<cite\>\<a href = \"http://www.erectlocution.com/boxing/\" title = \"Me\"\>Boxing Jewels\</a\>\</cite\>";
Quotation[12] = "&ldquo;There's really not much to say about a denim potato that hasn't already been said a thousand times.&rdquo; \<br /\> - \<cite\>\<a href = \"http://www.graphpaper.com\" title = \"Look in the sketchbook.\"\>graphpaper.com\</a\>\</cite\>";
Quotation[13] = "If you would like to send in a quote for display on this site, that would pretty much rock because I'm unfortunately not very clever and stuff.  So, just, like, \<a href = \"mailto:muraii@yahoo.com\" title = \"ALL YOUR QUOTES ARE BELONG TO US!\"\>send me something\</a\> already.";
Quotation[14] = "&ldquo;In spite of decades of egregious poaching, there are too many monkeys to ever pick just one.&rdquo; \<br /\> - \<cite\>\<a href = \"http://www.erectlocution.com/boxing/\" title = \"Me\"\>Boxing Jewels\</a\>\</cite\>";
Quotation[15] = "&ldquo;Legolas told me that a shadow and a threat had been growing in his mind.  I think Legolas might be kinda gay.&rdquo; \<br /\> - \<cite\>\<a href = \"http://www.ealasaid.com/misc/vsd/aragorn.html\" title = \"The Very Secret Diary of Aragorn, Son of Arathorn\"\>The Very Secret Diary of Aragorn, Son of Arathorn\</a\>\</cite\>";


// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
function showQuotation(){document.write(Quotation[whichQuotation]);}


