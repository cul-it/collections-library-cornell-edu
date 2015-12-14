//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 772;
    }
if (index == 1) {
     return 738;
    }
if (index == 2) {
     return 758;
    }
if (index == 3) {
     return 723;
    }
if (index == 4) {
     return 748;
    }
if (index == 5) {
     return 759;
    }
if (index == 6) {
     return 749;
    }
if (index == 7) {
     return 742;
    }
if (index == 8) {
     return 736;
    }
if (index == 9) {
     return 733;
    }
if (index == 10) {
     return 764;
    }
if (index == 11) {
     return 747;
    }
if (index == 12) {
     return 756;
    }
if (index == 13) {
     return 755;
    }
if (index == 14) {
     return 757;
    }
if (index == 15) {
     return 748;
    }
if (index == 16) {
     return 753;
    }
if (index == 17) {
     return 744;
    }
if (index == 18) {
     return 757;
    }
if (index == 19) {
     return 738;
    }
if (index == 20) {
     return 770;
    }
if (index == 21) {
     return 730;
    }
if (index == 22) {
     return 736;
    }
if (index == 23) {
     return 748;
    }
if (index > 23) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1170;
    }
if (index == 1) {
     return 1162;
    }
if (index == 2) {
     return 1188;
    }
if (index == 3) {
     return 1202;
    }
if (index == 4) {
     return 1185;
    }
if (index == 5) {
     return 1195;
    }
if (index == 6) {
     return 1173;
    }
if (index == 7) {
     return 1214;
    }
if (index == 8) {
     return 1198;
    }
if (index == 9) {
     return 1204;
    }
if (index == 10) {
     return 1200;
    }
if (index == 11) {
     return 1188;
    }
if (index == 12) {
     return 1188;
    }
if (index == 13) {
     return 1198;
    }
if (index == 14) {
     return 1200;
    }
if (index == 15) {
     return 1216;
    }
if (index == 16) {
     return 1202;
    }
if (index == 17) {
     return 1206;
    }
if (index == 18) {
     return 1191;
    }
if (index == 19) {
     return 1195;
    }
if (index == 20) {
     return 1202;
    }
if (index == 21) {
     return 1198;
    }
if (index == 22) {
     return 1198;
    }
if (index == 23) {
     return 1206;
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/liber:022_' + imgStr + '/digitalImage';
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
br.bookTitle= "Acts Passed by the Legislature, Republic of Liberia During the Sessions: 1882-83";
br.bookAuthor= "Legislature, Republic of Liberia";
br.bookPub= "Moravia, Liberia: Herald Office, J.C. Minor, 1884";
br.bookKeyword= "Liberia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liberian Law";
br.bookUrl  = '/liberian/catalog/liber:022';

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
