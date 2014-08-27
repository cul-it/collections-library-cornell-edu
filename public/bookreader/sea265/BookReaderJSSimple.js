//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 835;
    }
if (index == 1) {
     return 832;
    }
if (index == 2) {
     return 747;
    }
if (index == 3) {
     return 683;
    }
if (index == 4) {
     return 769;
    }
if (index == 5) {
     return 626;
    }
if (index == 6) {
     return 770;
    }
if (index == 7) {
     return 687;
    }
if (index == 8) {
     return 701;
    }
if (index == 9) {
     return 698;
    }
if (index == 10) {
     return 673;
    }
if (index == 11) {
     return 642;
    }
if (index == 12) {
     return 667;
    }
if (index == 13) {
     return 622;
    }
if (index == 14) {
     return 663;
    }
if (index == 15) {
     return 591;
    }
if (index == 16) {
     return 679;
    }
if (index == 17) {
     return 646;
    }
if (index == 18) {
     return 673;
    }
if (index == 19) {
     return 652;
    }
if (index == 20) {
     return 688;
    }
if (index == 21) {
     return 670;
    }
if (index == 22) {
     return 684;
    }
if (index == 23) {
     return 622;
    }
if (index == 24) {
     return 727;
    }
if (index == 25) {
     return 637;
    }
if (index == 26) {
     return 696;
    }
if (index == 27) {
     return 642;
    }
if (index == 28) {
     return 675;
    }
if (index == 29) {
     return 666;
    }
if (index == 30) {
     return 721;
    }
if (index == 31) {
     return 602;
    }
if (index == 32) {
     return 680;
    }
if (index == 33) {
     return 558;
    }
if (index == 34) {
     return 728;
    }
if (index == 35) {
     return 589;
    }
if (index == 36) {
     return 716;
    }
if (index == 37) {
     return 565;
    }
if (index == 38) {
     return 679;
    }
if (index == 39) {
     return 567;
    }
if (index == 40) {
     return 699;
    }
if (index == 41) {
     return 568;
    }
if (index == 42) {
     return 642;
    }
if (index == 43) {
     return 720;
    }
if (index > 43) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1313;
    }
if (index == 1) {
     return 1286;
    }
if (index == 2) {
     return 1251;
    }
if (index == 3) {
     return 1269;
    }
if (index == 4) {
     return 1255;
    }
if (index == 5) {
     return 1177;
    }
if (index == 6) {
     return 1256;
    }
if (index == 7) {
     return 1247;
    }
if (index == 8) {
     return 1229;
    }
if (index == 9) {
     return 1231;
    }
if (index == 10) {
     return 1240;
    }
if (index == 11) {
     return 1234;
    }
if (index == 12) {
     return 1243;
    }
if (index == 13) {
     return 1242;
    }
if (index == 14) {
     return 1238;
    }
if (index == 15) {
     return 1239;
    }
if (index == 16) {
     return 1238;
    }
if (index == 17) {
     return 1250;
    }
if (index == 18) {
     return 1236;
    }
if (index == 19) {
     return 1249;
    }
if (index == 20) {
     return 1245;
    }
if (index == 21) {
     return 1247;
    }
if (index == 22) {
     return 1242;
    }
if (index == 23) {
     return 1240;
    }
if (index == 24) {
     return 1251;
    }
if (index == 25) {
     return 1255;
    }
if (index == 26) {
     return 1243;
    }
if (index == 27) {
     return 1264;
    }
if (index == 28) {
     return 1238;
    }
if (index == 29) {
     return 1256;
    }
if (index == 30) {
     return 1235;
    }
if (index == 31) {
     return 1244;
    }
if (index == 32) {
     return 1235;
    }
if (index == 33) {
     return 1240;
    }
if (index == 34) {
     return 1245;
    }
if (index == 35) {
     return 1247;
    }
if (index == 36) {
     return 1271;
    }
if (index == 37) {
     return 1231;
    }
if (index == 38) {
     return 1250;
    }
if (index == 39) {
     return 1235;
    }
if (index == 40) {
     return 1257;
    }
if (index == 41) {
     return 1237;
    }
if (index == 42) {
     return 1168;
    }
if (index == 43) {
     return 1225;
    }
if (index > 43) {
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
    var url = '/fedora/get/seapage:265_' + imgStr + '/digitalImage';
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
br.numLeafs = 44;

// Book title and the URL used for the book title link
br.bookTitle= "A letter from Borneo : with notices of the country and its inhabitants : addressed to James Gardner, esq";
br.bookAuthor= "Brooke, James, Sir";
br.bookPub= "London: L. and C. Seeley, 1842";
br.bookKeyword= "Borneo--Description and travel";
br.bookUrl  = '/catalog/sea:265';

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