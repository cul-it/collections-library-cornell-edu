//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 750;
    }
if (index == 1) {
     return 772;
    }
if (index == 2) {
     return 754;
    }
if (index == 3) {
     return 731;
    }
if (index == 4) {
     return 719;
    }
if (index == 5) {
     return 743;
    }
if (index == 6) {
     return 741;
    }
if (index == 7) {
     return 743;
    }
if (index == 8) {
     return 733;
    }
if (index == 9) {
     return 743;
    }
if (index == 10) {
     return 714;
    }
if (index == 11) {
     return 711;
    }
if (index == 12) {
     return 737;
    }
if (index == 13) {
     return 734;
    }
if (index == 14) {
     return 729;
    }
if (index == 15) {
     return 732;
    }
if (index == 16) {
     return 746;
    }
if (index == 17) {
     return 736;
    }
if (index == 18) {
     return 730;
    }
if (index == 19) {
     return 760;
    }
if (index == 20) {
     return 746;
    }
if (index == 21) {
     return 728;
    }
if (index == 22) {
     return 742;
    }
if (index == 23) {
     return 745;
    }
if (index > 23) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1164;
    }
if (index == 1) {
     return 1148;
    }
if (index == 2) {
     return 1169;
    }
if (index == 3) {
     return 1176;
    }
if (index == 4) {
     return 1181;
    }
if (index == 5) {
     return 1182;
    }
if (index == 6) {
     return 1171;
    }
if (index == 7) {
     return 1188;
    }
if (index == 8) {
     return 1163;
    }
if (index == 9) {
     return 1179;
    }
if (index == 10) {
     return 1181;
    }
if (index == 11) {
     return 1169;
    }
if (index == 12) {
     return 1164;
    }
if (index == 13) {
     return 1186;
    }
if (index == 14) {
     return 1188;
    }
if (index == 15) {
     return 1190;
    }
if (index == 16) {
     return 1175;
    }
if (index == 17) {
     return 1183;
    }
if (index == 18) {
     return 1187;
    }
if (index == 19) {
     return 1188;
    }
if (index == 20) {
     return 1192;
    }
if (index == 21) {
     return 1195;
    }
if (index == 22) {
     return 1188;
    }
if (index == 23) {
     return 1188;
    }
if (index > 23) {
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
    var url = '/fedora/get/liber:013_' + imgStr + '/digitalImage';
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
br.numLeafs = 24;

// Book title and the URL used for the book title link
br.bookTitle= "Acts Passed by the Legislature, Republic of Liberia During the Sessions: 1872-73";
br.bookAuthor= "Legislature, Republic of Liberia";
br.bookPub= "Moravia, Liberia: Herald Office, J.C. Minor, 1874";
br.bookKeyword= "Liberia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liberian Law";
br.bookUrl  = '/liberian/catalog/liber:013';

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
