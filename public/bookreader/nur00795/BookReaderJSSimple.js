//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 657;
    }
if (index == 1) {
     return 653;
    }
if (index == 2) {
     return 671;
    }
if (index == 3) {
     return 648;
    }
if (index == 4) {
     return 651;
    }
if (index == 5) {
     return 657;
    }
if (index == 6) {
     return 669;
    }
if (index == 7) {
     return 662;
    }
if (index == 8) {
     return 663;
    }
if (index == 9) {
     return 663;
    }
if (index == 10) {
     return 675;
    }
if (index == 11) {
     return 649;
    }
if (index == 12) {
     return 667;
    }
if (index == 13) {
     return 667;
    }
if (index == 14) {
     return 678;
    }
if (index == 15) {
     return 650;
    }
if (index == 16) {
     return 659;
    }
if (index == 17) {
     return 656;
    }
if (index == 18) {
     return 676;
    }
if (index == 19) {
     return 659;
    }
if (index == 20) {
     return 649;
    }
if (index == 21) {
     return 649;
    }
if (index == 22) {
     return 661;
    }
if (index == 23) {
     return 661;
    }
if (index == 24) {
     return 649;
    }
if (index == 25) {
     return 656;
    }
if (index == 26) {
     return 655;
    }
if (index == 27) {
     return 649;
    }
if (index == 28) {
     return 654;
    }
if (index == 29) {
     return 651;
    }
if (index == 30) {
     return 667;
    }
if (index == 31) {
     return 656;
    }
if (index == 32) {
     return 649;
    }
if (index == 33) {
     return 652;
    }
if (index == 34) {
     return 660;
    }
if (index == 35) {
     return 655;
    }
if (index == 36) {
     return 652;
    }
if (index == 37) {
     return 657;
    }
if (index == 38) {
     return 666;
    }
if (index == 39) {
     return 655;
    }
if (index == 40) {
     return 666;
    }
if (index == 41) {
     return 653;
    }
if (index == 42) {
     return 666;
    }
if (index == 43) {
     return 655;
    }
if (index > 43) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1016;
    }
if (index == 1) {
     return 1013;
    }
if (index == 2) {
     return 989;
    }
if (index == 3) {
     return 972;
    }
if (index == 4) {
     return 1012;
    }
if (index == 5) {
     return 1016;
    }
if (index == 6) {
     return 1023;
    }
if (index == 7) {
     return 993;
    }
if (index == 8) {
     return 979;
    }
if (index == 9) {
     return 981;
    }
if (index == 10) {
     return 920;
    }
if (index == 11) {
     return 1011;
    }
if (index == 12) {
     return 969;
    }
if (index == 13) {
     return 963;
    }
if (index == 14) {
     return 975;
    }
if (index == 15) {
     return 973;
    }
if (index == 16) {
     return 979;
    }
if (index == 17) {
     return 986;
    }
if (index == 18) {
     return 974;
    }
if (index == 19) {
     return 1017;
    }
if (index == 20) {
     return 897;
    }
if (index == 21) {
     return 897;
    }
if (index == 22) {
     return 1000;
    }
if (index == 23) {
     return 1001;
    }
if (index == 24) {
     return 993;
    }
if (index == 25) {
     return 998;
    }
if (index == 26) {
     return 996;
    }
if (index == 27) {
     return 993;
    }
if (index == 28) {
     return 996;
    }
if (index == 29) {
     return 994;
    }
if (index == 30) {
     return 1022;
    }
if (index == 31) {
     return 1015;
    }
if (index == 32) {
     return 1010;
    }
if (index == 33) {
     return 1012;
    }
if (index == 34) {
     return 1017;
    }
if (index == 35) {
     return 1014;
    }
if (index == 36) {
     return 1012;
    }
if (index == 37) {
     return 1015;
    }
if (index == 38) {
     return 1021;
    }
if (index == 39) {
     return 1014;
    }
if (index == 40) {
     return 1021;
    }
if (index == 41) {
     return 1013;
    }
if (index == 42) {
     return 1021;
    }
if (index == 43) {
     return 1014;
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00795_' + imgStr + '/digitalImage';
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
br.bookTitle= "Trial Brief / The Spoliation of Belgium";
br.bookAuthor= "The author's name is not given.";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, Not dated";
br.bookKeyword= "War crimes; Crimes against humanity; Spoliation; German war economy; Goods Offices; Total war; Hague Regulations; Levies; Occupation charges; Church bells; Black market; Roges company; Pimitex; Clearing agreement; German-Belgian clearing; Food supply; Forced loans; Foreign stocks; Belgian colonial stock; Emission Bank; Belgian National Bank; Belgian gold reserves; Ministry of Economics; Ministry of Armaments and Munitions; Speer Ministry; Ministry of Armaments and War Production";
br.bookUrl  = '/nuremberg/catalog/nur:00795';

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
