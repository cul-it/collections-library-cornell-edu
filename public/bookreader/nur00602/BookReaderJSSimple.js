//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 609;
    }
if (index == 1) {
     return 609;
    }
if (index == 2) {
     return 630;
    }
if (index == 3) {
     return 609;
    }
if (index == 4) {
     return 613;
    }
if (index == 5) {
     return 629;
    }
if (index == 6) {
     return 622;
    }
if (index == 7) {
     return 635;
    }
if (index == 8) {
     return 639;
    }
if (index == 9) {
     return 622;
    }
if (index == 10) {
     return 625;
    }
if (index == 11) {
     return 626;
    }
if (index == 12) {
     return 633;
    }
if (index == 13) {
     return 634;
    }
if (index == 14) {
     return 622;
    }
if (index == 15) {
     return 641;
    }
if (index == 16) {
     return 622;
    }
if (index == 17) {
     return 622;
    }
if (index == 18) {
     return 630;
    }
if (index == 19) {
     return 630;
    }
if (index == 20) {
     return 644;
    }
if (index == 21) {
     return 622;
    }
if (index == 22) {
     return 622;
    }
if (index == 23) {
     return 622;
    }
if (index == 24) {
     return 622;
    }
if (index == 25) {
     return 630;
    }
if (index == 26) {
     return 628;
    }
if (index == 27) {
     return 629;
    }
if (index == 28) {
     return 629;
    }
if (index == 29) {
     return 630;
    }
if (index == 30) {
     return 630;
    }
if (index == 31) {
     return 629;
    }
if (index == 32) {
     return 632;
    }
if (index == 33) {
     return 635;
    }
if (index == 34) {
     return 639;
    }
if (index == 35) {
     return 629;
    }
if (index == 36) {
     return 630;
    }
if (index == 37) {
     return 627;
    }
if (index == 38) {
     return 629;
    }
if (index == 39) {
     return 636;
    }
if (index == 40) {
     return 627;
    }
if (index == 41) {
     return 628;
    }
if (index == 42) {
     return 654;
    }
if (index == 43) {
     return 622;
    }
if (index == 44) {
     return 625;
    }
if (index == 45) {
     return 636;
    }
if (index == 46) {
     return 640;
    }
if (index > 46) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 993;
    }
if (index == 1) {
     return 993;
    }
if (index == 2) {
     return 1006;
    }
if (index == 3) {
     return 993;
    }
if (index == 4) {
     return 1022;
    }
if (index == 5) {
     return 1023;
    }
if (index == 6) {
     return 1019;
    }
if (index == 7) {
     return 1027;
    }
if (index == 8) {
     return 1029;
    }
if (index == 9) {
     return 1019;
    }
if (index == 10) {
     return 1021;
    }
if (index == 11) {
     return 1022;
    }
if (index == 12) {
     return 1025;
    }
if (index == 13) {
     return 1026;
    }
if (index == 14) {
     return 1019;
    }
if (index == 15) {
     return 1031;
    }
if (index == 16) {
     return 1019;
    }
if (index == 17) {
     return 1019;
    }
if (index == 18) {
     return 1024;
    }
if (index == 19) {
     return 1024;
    }
if (index == 20) {
     return 1033;
    }
if (index == 21) {
     return 1019;
    }
if (index == 22) {
     return 1019;
    }
if (index == 23) {
     return 1019;
    }
if (index == 24) {
     return 1019;
    }
if (index == 25) {
     return 1024;
    }
if (index == 26) {
     return 1023;
    }
if (index == 27) {
     return 1023;
    }
if (index == 28) {
     return 1023;
    }
if (index == 29) {
     return 1024;
    }
if (index == 30) {
     return 1024;
    }
if (index == 31) {
     return 1023;
    }
if (index == 32) {
     return 1025;
    }
if (index == 33) {
     return 1027;
    }
if (index == 34) {
     return 1030;
    }
if (index == 35) {
     return 1023;
    }
if (index == 36) {
     return 1024;
    }
if (index == 37) {
     return 1022;
    }
if (index == 38) {
     return 1024;
    }
if (index == 39) {
     return 1028;
    }
if (index == 40) {
     return 1022;
    }
if (index == 41) {
     return 1023;
    }
if (index == 42) {
     return 1038;
    }
if (index == 43) {
     return 1019;
    }
if (index == 44) {
     return 1021;
    }
if (index == 45) {
     return 1027;
    }
if (index == 46) {
     return 1030;
    }
if (index > 46) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00602_' + imgStr + '/digitalImage';
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
br.numLeafs = 48;

// Book title and the URL used for the book title link
br.bookTitle= "Brief on Die Reichsregierung (Reich Cabinet) ";
br.bookAuthor= "Lt. W. S. Kaplan, USNR / Miss Katherine Fite";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, Not dated";
br.bookKeyword= "Reich Cabinet; Reichsregierung; Nazi Party; NSDAP; Reichstag; Secret Cabinet Council; Council of Ministers for the Defense of the Reich; Reich Defense Council";
br.bookUrl  = '/nuremberg/catalog/nur:00602';

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
