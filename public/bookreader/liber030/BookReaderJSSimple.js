//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 716;
    }
if (index == 1) {
     return 722;
    }
if (index == 2) {
     return 740;
    }
if (index == 3) {
     return 713;
    }
if (index == 4) {
     return 738;
    }
if (index == 5) {
     return 701;
    }
if (index == 6) {
     return 707;
    }
if (index == 7) {
     return 719;
    }
if (index == 8) {
     return 725;
    }
if (index == 9) {
     return 758;
    }
if (index == 10) {
     return 718;
    }
if (index == 11) {
     return 734;
    }
if (index == 12) {
     return 695;
    }
if (index == 13) {
     return 731;
    }
if (index == 14) {
     return 736;
    }
if (index == 15) {
     return 733;
    }
if (index == 16) {
     return 742;
    }
if (index == 17) {
     return 729;
    }
if (index == 18) {
     return 734;
    }
if (index == 19) {
     return 744;
    }
if (index == 20) {
     return 753;
    }
if (index == 21) {
     return 702;
    }
if (index > 21) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1241;
    }
if (index == 1) {
     return 1210;
    }
if (index == 2) {
     return 1228;
    }
if (index == 3) {
     return 1217;
    }
if (index == 4) {
     return 1218;
    }
if (index == 5) {
     return 1222;
    }
if (index == 6) {
     return 1209;
    }
if (index == 7) {
     return 1199;
    }
if (index == 8) {
     return 1228;
    }
if (index == 9) {
     return 1226;
    }
if (index == 10) {
     return 1235;
    }
if (index == 11) {
     return 1228;
    }
if (index == 12) {
     return 1215;
    }
if (index == 13) {
     return 1225;
    }
if (index == 14) {
     return 1218;
    }
if (index == 15) {
     return 1231;
    }
if (index == 16) {
     return 1233;
    }
if (index == 17) {
     return 1243;
    }
if (index == 18) {
     return 1235;
    }
if (index == 19) {
     return 1246;
    }
if (index == 20) {
     return 1218;
    }
if (index == 21) {
     return 1250;
    }
if (index > 21) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/liber:030_' + imgStr + '/digitalImage';
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
br.numLeafs = 22;

// Book title and the URL used for the book title link
br.bookTitle= "Acts Passed by the Legislature, Republic of Liberia During the Sessions: 1880-91";
br.bookAuthor= "Legislature, Republic of Liberia";
br.bookPub= "Moravia, Liberia: Herald Office, J.C. Minor, 1892";
br.bookKeyword= "Liberia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liberian Law";
br.bookUrl  = '/liberian/catalog/liber:030';

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
