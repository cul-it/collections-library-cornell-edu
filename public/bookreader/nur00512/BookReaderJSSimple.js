//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 585;
    }
if (index == 1) {
     return 573;
    }
if (index == 2) {
     return 533;
    }
if (index == 3) {
     return 564;
    }
if (index == 4) {
     return 567;
    }
if (index == 5) {
     return 583;
    }
if (index == 6) {
     return 580;
    }
if (index == 7) {
     return 581;
    }
if (index == 8) {
     return 586;
    }
if (index == 9) {
     return 574;
    }
if (index == 10) {
     return 565;
    }
if (index == 11) {
     return 587;
    }
if (index == 12) {
     return 578;
    }
if (index == 13) {
     return 576;
    }
if (index == 14) {
     return 560;
    }
if (index == 15) {
     return 572;
    }
if (index == 16) {
     return 569;
    }
if (index == 17) {
     return 555;
    }
if (index == 18) {
     return 544;
    }
if (index == 19) {
     return 575;
    }
if (index == 20) {
     return 549;
    }
if (index == 21) {
     return 568;
    }
if (index == 22) {
     return 559;
    }
if (index == 23) {
     return 551;
    }
if (index == 24) {
     return 566;
    }
if (index == 25) {
     return 577;
    }
if (index == 26) {
     return 560;
    }
if (index > 26) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 857;
    }
if (index == 1) {
     return 786;
    }
if (index == 2) {
     return 792;
    }
if (index == 3) {
     return 826;
    }
if (index == 4) {
     return 792;
    }
if (index == 5) {
     return 808;
    }
if (index == 6) {
     return 820;
    }
if (index == 7) {
     return 755;
    }
if (index == 8) {
     return 752;
    }
if (index == 9) {
     return 758;
    }
if (index == 10) {
     return 756;
    }
if (index == 11) {
     return 761;
    }
if (index == 12) {
     return 760;
    }
if (index == 13) {
     return 762;
    }
if (index == 14) {
     return 759;
    }
if (index == 15) {
     return 773;
    }
if (index == 16) {
     return 772;
    }
if (index == 17) {
     return 769;
    }
if (index == 18) {
     return 767;
    }
if (index == 19) {
     return 765;
    }
if (index == 20) {
     return 779;
    }
if (index == 21) {
     return 772;
    }
if (index == 22) {
     return 779;
    }
if (index == 23) {
     return 774;
    }
if (index == 24) {
     return 773;
    }
if (index == 25) {
     return 773;
    }
if (index == 26) {
     return 770;
    }
if (index > 26) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00512_' + imgStr + '/digitalImage';
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
br.numLeafs = 28;

// Book title and the URL used for the book title link
br.bookTitle= "Calendar of German History 1918-1944: With Special Reference to the National Socialist Party and the Principal Defendants Indicted by the International Military Tribunal ";
br.bookAuthor= "Dr. Kellerman";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-11-14";
br.bookKeyword= "German History; Nazi Party; Hitler putsch; Mein Kampf; NSDAP; Persecution of Jews; Pogrom; Reichstag fire; SA; SS; Anti-Comintern Pact; Axis; Occupation; Three Power Pact";
br.bookUrl  = '/nuremberg/catalog/nur:00512';

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
