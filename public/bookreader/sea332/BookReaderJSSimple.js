//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1855;
    }
if (index == 1) {
     return 1866;
    }
if (index == 2) {
     return 1770;
    }
if (index == 3) {
     return 1735;
    }
if (index == 4) {
     return 486;
    }
if (index == 5) {
     return 598;
    }
if (index == 6) {
     return 1742;
    }
if (index == 7) {
     return 1695;
    }
if (index == 8) {
     return 605;
    }
if (index == 9) {
     return 1748;
    }
if (index == 10) {
     return 473;
    }
if (index == 11) {
     return 1731;
    }
if (index == 12) {
     return 457;
    }
if (index == 13) {
     return 1730;
    }
if (index == 14) {
     return 459;
    }
if (index == 15) {
     return 1828;
    }
if (index == 16) {
     return 478;
    }
if (index == 17) {
     return 1867;
    }
if (index == 18) {
     return 595;
    }
if (index == 19) {
     return 1808;
    }
if (index == 20) {
     return 595;
    }
if (index == 21) {
     return 1837;
    }
if (index == 22) {
     return 481;
    }
if (index == 23) {
     return 1827;
    }
if (index == 24) {
     return 611;
    }
if (index == 25) {
     return 1812;
    }
if (index == 26) {
     return 590;
    }
if (index == 27) {
     return 1799;
    }
if (index == 28) {
     return 476;
    }
if (index == 29) {
     return 1770;
    }
if (index == 30) {
     return 598;
    }
if (index == 31) {
     return 1723;
    }
if (index == 32) {
     return 477;
    }
if (index == 33) {
     return 1775;
    }
if (index == 34) {
     return 602;
    }
if (index == 35) {
     return 1727;
    }
if (index == 36) {
     return 601;
    }
if (index == 37) {
     return 1753;
    }
if (index == 38) {
     return 593;
    }
if (index == 39) {
     return 1669;
    }
if (index == 40) {
     return 596;
    }
if (index == 41) {
     return 1790;
    }
if (index == 42) {
     return 591;
    }
if (index == 43) {
     return 1822;
    }
if (index == 44) {
     return 474;
    }
if (index == 45) {
     return 1753;
    }
if (index == 46) {
     return 592;
    }
if (index == 47) {
     return 1779;
    }
if (index == 48) {
     return 597;
    }
if (index == 49) {
     return 1775;
    }
if (index == 50) {
     return 483;
    }
if (index == 51) {
     return 1760;
    }
if (index == 52) {
     return 1687;
    }
if (index == 53) {
     return 1831;
    }
if (index > 53) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1436;
    }
if (index == 1) {
     return 1461;
    }
if (index == 2) {
     return 1367;
    }
if (index == 3) {
     return 1352;
    }
if (index == 4) {
     return 654;
    }
if (index == 5) {
     return 472;
    }
if (index == 6) {
     return 1370;
    }
if (index == 7) {
     return 1366;
    }
if (index == 8) {
     return 476;
    }
if (index == 9) {
     return 1468;
    }
if (index == 10) {
     return 634;
    }
if (index == 11) {
     return 1388;
    }
if (index == 12) {
     return 620;
    }
if (index == 13) {
     return 1378;
    }
if (index == 14) {
     return 617;
    }
if (index == 15) {
     return 1405;
    }
if (index == 16) {
     return 643;
    }
if (index == 17) {
     return 1476;
    }
if (index == 18) {
     return 477;
    }
if (index == 19) {
     return 1410;
    }
if (index == 20) {
     return 468;
    }
if (index == 21) {
     return 1403;
    }
if (index == 22) {
     return 640;
    }
if (index == 23) {
     return 1390;
    }
if (index == 24) {
     return 478;
    }
if (index == 25) {
     return 1413;
    }
if (index == 26) {
     return 476;
    }
if (index == 27) {
     return 1399;
    }
if (index == 28) {
     return 648;
    }
if (index == 29) {
     return 1368;
    }
if (index == 30) {
     return 464;
    }
if (index == 31) {
     return 1381;
    }
if (index == 32) {
     return 644;
    }
if (index == 33) {
     return 1371;
    }
if (index == 34) {
     return 474;
    }
if (index == 35) {
     return 1377;
    }
if (index == 36) {
     return 479;
    }
if (index == 37) {
     return 1374;
    }
if (index == 38) {
     return 461;
    }
if (index == 39) {
     return 1364;
    }
if (index == 40) {
     return 465;
    }
if (index == 41) {
     return 1440;
    }
if (index == 42) {
     return 467;
    }
if (index == 43) {
     return 1423;
    }
if (index == 44) {
     return 649;
    }
if (index == 45) {
     return 1388;
    }
if (index == 46) {
     return 464;
    }
if (index == 47) {
     return 1392;
    }
if (index == 48) {
     return 462;
    }
if (index == 49) {
     return 1374;
    }
if (index == 50) {
     return 652;
    }
if (index == 51) {
     return 1311;
    }
if (index == 52) {
     return 1290;
    }
if (index == 53) {
     return 1431;
    }
if (index > 53) {
    return 1200;
    }
}

// We load the images from archive.org -- you can modify this function to retrieve images
// using a different URL structure
br.getPageURI = function(index, reduce, rotate) {
    // reduce and rotate are ignored in this simple implementation, but we
    // could e.g. look at reduce and load images from a different directory
    // or pass the information to an image server
    var imgStr = (index+1).toString();
    var url = '/fedora/get/seapage:332_' + imgStr + '/digitalImage';
    return url;
}

// Return which side, left or right, that a given page should be displayed on
br.getPageSide = function(index) {
    if (0 == (index & 0x1)) {
        return 'R';
    } else {
        return 'L';
    }
}

// This function returns the left and right indices for the user-visible
// spread that contains the given index.  The return values may be
// null if there is no facing page or the index is invalid.
br.getSpreadIndices = function(pindex) {
    var spreadIndices = [null, null];
    if ('rl' == this.pageProgression) {
        // Right to Left
        if (this.getPageSide(pindex) == 'R') {
            spreadIndices[1] = pindex;
            spreadIndices[0] = pindex + 1;
        } else {
            // Given index was LHS
            spreadIndices[0] = pindex;
            spreadIndices[1] = pindex - 1;
        }
    } else {
        // Left to right
        if (this.getPageSide(pindex) == 'L') {
            spreadIndices[0] = pindex;
            spreadIndices[1] = pindex + 1;
        } else {
            // Given index was RHS
            spreadIndices[1] = pindex;
            spreadIndices[0] = pindex - 1;
        }
    }
    
    return spreadIndices;
}

// For a given "accessible page index" return the page number in the book.
//
// For example, index 5 might correspond to "Page 1" if there is front matter such
// as a title page and table of contents.
br.getPageNum = function(index) {
    return index+1;
}

// Total number of leafs
br.numLeafs = 54;

// Book title and the URL used for the book title link
br.bookTitle= "Pictures from Lotus Land";
br.bookAuthor= "Muriel, Ernest, Mrs.";
br.bookPub= "Rangoon: Rowe, 1900";
br.bookKeyword= "Poetry of places--Burma<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Pictorial works<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Description and travel--Poetry";
br.bookUrl  = '/catalog/sea:332';

// Override the path used to find UI images
br.imagesBaseURL = '../BookReader/images/';

br.getEmbedCode = function(frameWidth, frameHeight, viewParams) {
    return "Embed code not supported in bookreader demo.";
}

// Let's go!
br.init();

// read-aloud and search need backend compenents and are not supported in the demo
$('#BRtoolbar').find('.read').hide();
$('#textSrch').hide();
$('#btnSrch').hide();
