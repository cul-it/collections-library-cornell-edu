//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 618;
    }
if (index == 1) {
     return 614;
    }
if (index == 2) {
     return 620;
    }
if (index == 3) {
     return 618;
    }
if (index == 4) {
     return 616;
    }
if (index == 5) {
     return 620;
    }
if (index == 6) {
     return 616;
    }
if (index == 7) {
     return 618;
    }
if (index == 8) {
     return 620;
    }
if (index == 9) {
     return 616;
    }
if (index == 10) {
     return 624;
    }
if (index == 11) {
     return 618;
    }
if (index == 12) {
     return 618;
    }
if (index == 13) {
     return 618;
    }
if (index == 14) {
     return 616;
    }
if (index == 15) {
     return 620;
    }
if (index == 16) {
     return 620;
    }
if (index == 17) {
     return 616;
    }
if (index == 18) {
     return 620;
    }
if (index == 19) {
     return 614;
    }
if (index == 20) {
     return 618;
    }
if (index == 21) {
     return 618;
    }
if (index == 22) {
     return 616;
    }
if (index == 23) {
     return 618;
    }
if (index == 24) {
     return 618;
    }
if (index == 25) {
     return 616;
    }
if (index == 26) {
     return 620;
    }
if (index == 27) {
     return 616;
    }
if (index == 28) {
     return 620;
    }
if (index == 29) {
     return 618;
    }
if (index == 30) {
     return 616;
    }
if (index == 31) {
     return 616;
    }
if (index == 32) {
     return 618;
    }
if (index == 33) {
     return 614;
    }
if (index == 34) {
     return 618;
    }
if (index == 35) {
     return 614;
    }
if (index == 36) {
     return 618;
    }
if (index == 37) {
     return 616;
    }
if (index == 38) {
     return 614;
    }
if (index == 39) {
     return 616;
    }
if (index == 40) {
     return 616;
    }
if (index == 41) {
     return 612;
    }
if (index == 42) {
     return 618;
    }
if (index == 43) {
     return 610;
    }
if (index == 44) {
     return 612;
    }
if (index == 45) {
     return 616;
    }
if (index == 46) {
     return 612;
    }
if (index == 47) {
     return 616;
    }
if (index == 48) {
     return 612;
    }
if (index == 49) {
     return 612;
    }
if (index == 50) {
     return 614;
    }
if (index == 51) {
     return 608;
    }
if (index == 52) {
     return 612;
    }
if (index == 53) {
     return 610;
    }
if (index == 54) {
     return 610;
    }
if (index == 55) {
     return 612;
    }
if (index == 56) {
     return 608;
    }
if (index == 57) {
     return 610;
    }
if (index == 58) {
     return 610;
    }
if (index > 58) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 864;
    }
if (index == 1) {
     return 864;
    }
if (index == 2) {
     return 864;
    }
if (index == 3) {
     return 840;
    }
if (index == 4) {
     return 840;
    }
if (index == 5) {
     return 840;
    }
if (index == 6) {
     return 840;
    }
if (index == 7) {
     return 840;
    }
if (index == 8) {
     return 840;
    }
if (index == 9) {
     return 840;
    }
if (index == 10) {
     return 840;
    }
if (index == 11) {
     return 840;
    }
if (index == 12) {
     return 840;
    }
if (index == 13) {
     return 840;
    }
if (index == 14) {
     return 840;
    }
if (index == 15) {
     return 840;
    }
if (index == 16) {
     return 840;
    }
if (index == 17) {
     return 840;
    }
if (index == 18) {
     return 840;
    }
if (index == 19) {
     return 840;
    }
if (index == 20) {
     return 840;
    }
if (index == 21) {
     return 840;
    }
if (index == 22) {
     return 840;
    }
if (index == 23) {
     return 840;
    }
if (index == 24) {
     return 840;
    }
if (index == 25) {
     return 840;
    }
if (index == 26) {
     return 840;
    }
if (index == 27) {
     return 840;
    }
if (index == 28) {
     return 840;
    }
if (index == 29) {
     return 840;
    }
if (index == 30) {
     return 840;
    }
if (index == 31) {
     return 840;
    }
if (index == 32) {
     return 840;
    }
if (index == 33) {
     return 840;
    }
if (index == 34) {
     return 840;
    }
if (index == 35) {
     return 840;
    }
if (index == 36) {
     return 840;
    }
if (index == 37) {
     return 840;
    }
if (index == 38) {
     return 840;
    }
if (index == 39) {
     return 840;
    }
if (index == 40) {
     return 840;
    }
if (index == 41) {
     return 840;
    }
if (index == 42) {
     return 840;
    }
if (index == 43) {
     return 840;
    }
if (index == 44) {
     return 840;
    }
if (index == 45) {
     return 840;
    }
if (index == 46) {
     return 840;
    }
if (index == 47) {
     return 840;
    }
if (index == 48) {
     return 840;
    }
if (index == 49) {
     return 840;
    }
if (index == 50) {
     return 840;
    }
if (index == 51) {
     return 840;
    }
if (index == 52) {
     return 840;
    }
if (index == 53) {
     return 840;
    }
if (index == 54) {
     return 840;
    }
if (index == 55) {
     return 840;
    }
if (index == 56) {
     return 840;
    }
if (index == 57) {
     return 840;
    }
if (index == 58) {
     return 840;
    }
if (index > 58) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/scott:7034_' + imgStr + '/digitalImage';
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
br.numLeafs = 59;

// Book title and the URL used for the book title link
br.bookTitle= "Patterson v. State; Norris v. State. Brief of appellee. 58 p.";
br.bookAuthor= "Alabama, Supreme Court";
br.bookPub= "Unknown: , 1937";
br.bookKeyword= "Patterson, Haywood<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weems, Charley<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Norris, Clarence<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Powell, Ozzie<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Roberson, Willie<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wright, Andy<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Montgomery, Owen<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scottsboro Trial, Scottsboro, Ala. 1931<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trials (Rape) -- Alabama";
br.bookUrl  = '/scottsboro/catalog/scott:7034';

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
