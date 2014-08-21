//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 770;
    }
if (index == 1) {
     return 675;
    }
if (index == 2) {
     return 635;
    }
if (index == 3) {
     return 616;
    }
if (index == 4) {
     return 683;
    }
if (index == 5) {
     return 1075;
    }
if (index == 6) {
     return 760;
    }
if (index == 7) {
     return 730;
    }
if (index == 8) {
     return 717;
    }
if (index == 9) {
     return 726;
    }
if (index == 10) {
     return 737;
    }
if (index == 11) {
     return 1210;
    }
if (index == 12) {
     return 719;
    }
if (index == 13) {
     return 654;
    }
if (index == 14) {
     return 675;
    }
if (index == 15) {
     return 660;
    }
if (index == 16) {
     return 648;
    }
if (index == 17) {
     return 668;
    }
if (index == 18) {
     return 681;
    }
if (index == 19) {
     return 622;
    }
if (index == 20) {
     return 616;
    }
if (index == 21) {
     return 673;
    }
if (index == 22) {
     return 737;
    }
if (index == 23) {
     return 692;
    }
if (index == 24) {
     return 681;
    }
if (index == 25) {
     return 651;
    }
if (index == 26) {
     return 670;
    }
if (index == 27) {
     return 655;
    }
if (index == 28) {
     return 703;
    }
if (index == 29) {
     return 682;
    }
if (index == 30) {
     return 709;
    }
if (index == 31) {
     return 707;
    }
if (index == 32) {
     return 688;
    }
if (index == 33) {
     return 715;
    }
if (index == 34) {
     return 675;
    }
if (index == 35) {
     return 668;
    }
if (index == 36) {
     return 687;
    }
if (index == 37) {
     return 668;
    }
if (index == 38) {
     return 707;
    }
if (index == 39) {
     return 684;
    }
if (index == 40) {
     return 713;
    }
if (index == 41) {
     return 687;
    }
if (index == 42) {
     return 692;
    }
if (index == 43) {
     return 705;
    }
if (index == 44) {
     return 745;
    }
if (index == 45) {
     return 734;
    }
if (index == 46) {
     return 710;
    }
if (index == 47) {
     return 756;
    }
if (index > 47) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1179;
    }
if (index == 1) {
     return 1163;
    }
if (index == 2) {
     return 1160;
    }
if (index == 3) {
     return 1136;
    }
if (index == 4) {
     return 1134;
    }
if (index == 5) {
     return 739;
    }
if (index == 6) {
     return 1187;
    }
if (index == 7) {
     return 1169;
    }
if (index == 8) {
     return 1179;
    }
if (index == 9) {
     return 1181;
    }
if (index == 10) {
     return 1164;
    }
if (index == 11) {
     return 1586;
    }
if (index == 12) {
     return 1147;
    }
if (index == 13) {
     return 1168;
    }
if (index == 14) {
     return 1146;
    }
if (index == 15) {
     return 1146;
    }
if (index == 16) {
     return 1146;
    }
if (index == 17) {
     return 1156;
    }
if (index == 18) {
     return 1150;
    }
if (index == 19) {
     return 1146;
    }
if (index == 20) {
     return 1136;
    }
if (index == 21) {
     return 1146;
    }
if (index == 22) {
     return 1164;
    }
if (index == 23) {
     return 1155;
    }
if (index == 24) {
     return 1155;
    }
if (index == 25) {
     return 1144;
    }
if (index == 26) {
     return 1145;
    }
if (index == 27) {
     return 1146;
    }
if (index == 28) {
     return 1140;
    }
if (index == 29) {
     return 1147;
    }
if (index == 30) {
     return 1131;
    }
if (index == 31) {
     return 1138;
    }
if (index == 32) {
     return 1131;
    }
if (index == 33) {
     return 1136;
    }
if (index == 34) {
     return 1137;
    }
if (index == 35) {
     return 1172;
    }
if (index == 36) {
     return 1161;
    }
if (index == 37) {
     return 1144;
    }
if (index == 38) {
     return 1172;
    }
if (index == 39) {
     return 1147;
    }
if (index == 40) {
     return 1162;
    }
if (index == 41) {
     return 1162;
    }
if (index == 42) {
     return 1159;
    }
if (index == 43) {
     return 1165;
    }
if (index == 44) {
     return 1174;
    }
if (index == 45) {
     return 1171;
    }
if (index == 46) {
     return 1147;
    }
if (index == 47) {
     return 1194;
    }
if (index > 47) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:261_' + imgStr + '/digitalImage';
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
br.bookTitle= "A short account of the Prince of Wales's Island, or Pulo Peenang, in the East Indies : given to Capt. Light by the King of Quedah";
br.bookAuthor= "Trapaud, Elisha";
br.bookPub= "London: J. Stockdale, 1788";
br.bookKeyword= "Pinang<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pinang";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:261';

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
