//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1043;
    }
if (index == 1) {
     return 934;
    }
if (index == 2) {
     return 913;
    }
if (index == 3) {
     return 943;
    }
if (index == 4) {
     return 939;
    }
if (index == 5) {
     return 978;
    }
if (index == 6) {
     return 963;
    }
if (index == 7) {
     return 967;
    }
if (index == 8) {
     return 960;
    }
if (index == 9) {
     return 901;
    }
if (index == 10) {
     return 894;
    }
if (index == 11) {
     return 923;
    }
if (index == 12) {
     return 874;
    }
if (index == 13) {
     return 911;
    }
if (index == 14) {
     return 879;
    }
if (index == 15) {
     return 920;
    }
if (index == 16) {
     return 908;
    }
if (index == 17) {
     return 900;
    }
if (index == 18) {
     return 901;
    }
if (index == 19) {
     return 905;
    }
if (index == 20) {
     return 874;
    }
if (index == 21) {
     return 892;
    }
if (index == 22) {
     return 874;
    }
if (index == 23) {
     return 845;
    }
if (index == 24) {
     return 827;
    }
if (index == 25) {
     return 934;
    }
if (index > 25) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1432;
    }
if (index == 1) {
     return 1381;
    }
if (index == 2) {
     return 1372;
    }
if (index == 3) {
     return 1376;
    }
if (index == 4) {
     return 1352;
    }
if (index == 5) {
     return 1382;
    }
if (index == 6) {
     return 1377;
    }
if (index == 7) {
     return 1422;
    }
if (index == 8) {
     return 1356;
    }
if (index == 9) {
     return 1396;
    }
if (index == 10) {
     return 1356;
    }
if (index == 11) {
     return 1380;
    }
if (index == 12) {
     return 1354;
    }
if (index == 13) {
     return 1396;
    }
if (index == 14) {
     return 1342;
    }
if (index == 15) {
     return 1378;
    }
if (index == 16) {
     return 1371;
    }
if (index == 17) {
     return 1382;
    }
if (index == 18) {
     return 1339;
    }
if (index == 19) {
     return 1413;
    }
if (index == 20) {
     return 1384;
    }
if (index == 21) {
     return 1388;
    }
if (index == 22) {
     return 1372;
    }
if (index == 23) {
     return 1351;
    }
if (index == 24) {
     return 1367;
    }
if (index == 25) {
     return 1390;
    }
if (index > 25) {
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
    var url = '/fedora/get/seapage:134_' + imgStr + '/digitalImage';
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
br.numLeafs = 26;

// Book title and the URL used for the book title link
br.bookTitle= "Siam 250 years ago. A description of the kingdom of Siam, written in 1636";
br.bookAuthor= "Schouten, Joost";
br.bookPub= "Bangkok: Bang'olem Press, 1889";
br.bookKeyword= "Thailand--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thailand--History--Sources";
br.bookUrl  = '/catalog/sea:134';

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
