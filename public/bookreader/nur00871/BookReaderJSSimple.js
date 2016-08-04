//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 671;
    }
if (index == 1) {
     return 686;
    }
if (index == 2) {
     return 671;
    }
if (index == 3) {
     return 671;
    }
if (index == 4) {
     return 695;
    }
if (index == 5) {
     return 679;
    }
if (index == 6) {
     return 703;
    }
if (index == 7) {
     return 671;
    }
if (index == 8) {
     return 700;
    }
if (index == 9) {
     return 671;
    }
if (index == 10) {
     return 691;
    }
if (index == 11) {
     return 674;
    }
if (index == 12) {
     return 704;
    }
if (index == 13) {
     return 671;
    }
if (index == 14) {
     return 685;
    }
if (index == 15) {
     return 678;
    }
if (index == 16) {
     return 671;
    }
if (index == 17) {
     return 689;
    }
if (index == 18) {
     return 671;
    }
if (index == 19) {
     return 671;
    }
if (index == 20) {
     return 701;
    }
if (index == 21) {
     return 675;
    }
if (index == 22) {
     return 692;
    }
if (index > 22) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1010;
    }
if (index == 1) {
     return 1020;
    }
if (index == 2) {
     return 1010;
    }
if (index == 3) {
     return 1010;
    }
if (index == 4) {
     return 1026;
    }
if (index == 5) {
     return 1016;
    }
if (index == 6) {
     return 1061;
    }
if (index == 7) {
     return 1041;
    }
if (index == 8) {
     return 1059;
    }
if (index == 9) {
     return 1041;
    }
if (index == 10) {
     return 1054;
    }
if (index == 11) {
     return 1043;
    }
if (index == 12) {
     return 1062;
    }
if (index == 13) {
     return 1041;
    }
if (index == 14) {
     return 1050;
    }
if (index == 15) {
     return 1046;
    }
if (index == 16) {
     return 1041;
    }
if (index == 17) {
     return 1053;
    }
if (index == 18) {
     return 1041;
    }
if (index == 19) {
     return 1041;
    }
if (index == 20) {
     return 1060;
    }
if (index == 21) {
     return 1044;
    }
if (index == 22) {
     return 1055;
    }
if (index > 22) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00871_' + imgStr + '/digitalImage';
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
br.numLeafs = 23;

// Book title and the URL used for the book title link
br.bookTitle= "Trial Brief / The Nazi Conspirators' War of Aggression Against Poland / First Draft";
br.bookAuthor= "Roy H. Steyer, Lt. (jg), USNR";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-11-10";
br.bookKeyword= "Poland; Common plan; Conspiracy; Aggressive war; Crimes against peace; German-Polish relations; Danzig; Polish Corridor; Sudetenland; Fall Weiss; Case White; Military strategy; Preparations for aggressive war; SD; Lebensraum; Propaganda; Gleiwitz radio station; Polish border incidents";
br.bookUrl  = '/nuremberg/catalog/nur:00871';

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
