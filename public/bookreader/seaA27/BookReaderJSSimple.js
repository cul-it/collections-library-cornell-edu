//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1099;
    }
if (index == 1) {
     return 1107;
    }
if (index == 2) {
     return 1152;
    }
if (index == 3) {
     return 1053;
    }
if (index == 4) {
     return 1657;
    }
if (index == 5) {
     return 1053;
    }
if (index == 6) {
     return 1153;
    }
if (index == 7) {
     return 1081;
    }
if (index == 8) {
     return 1182;
    }
if (index == 9) {
     return 1182;
    }
if (index == 10) {
     return 1200;
    }
if (index == 11) {
     return 1154;
    }
if (index == 12) {
     return 1200;
    }
if (index == 13) {
     return 1078;
    }
if (index == 14) {
     return 1200;
    }
if (index == 15) {
     return 1080;
    }
if (index == 16) {
     return 1182;
    }
if (index == 17) {
     return 1091;
    }
if (index == 18) {
     return 1176;
    }
if (index == 19) {
     return 1093;
    }
if (index == 20) {
     return 1182;
    }
if (index == 21) {
     return 1077;
    }
if (index == 22) {
     return 1200;
    }
if (index == 23) {
     return 1047;
    }
if (index == 24) {
     return 1125;
    }
if (index == 25) {
     return 1116;
    }
if (index == 26) {
     return 1132;
    }
if (index == 27) {
     return 1019;
    }
if (index == 28) {
     return 1597;
    }
if (index == 29) {
     return 1025;
    }
if (index == 30) {
     return 1172;
    }
if (index == 31) {
     return 1015;
    }
if (index == 32) {
     return 1152;
    }
if (index == 33) {
     return 1097;
    }
if (index == 34) {
     return 1137;
    }
if (index == 35) {
     return 1211;
    }
if (index == 36) {
     return 1632;
    }
if (index == 37) {
     return 1039;
    }
if (index == 38) {
     return 1150;
    }
if (index == 39) {
     return 1036;
    }
if (index == 40) {
     return 1129;
    }
if (index == 41) {
     return 1170;
    }
if (index == 42) {
     return 1141;
    }
if (index == 43) {
     return 1020;
    }
if (index == 44) {
     return 1169;
    }
if (index == 45) {
     return 1073;
    }
if (index == 46) {
     return 1170;
    }
if (index == 47) {
     return 1023;
    }
if (index == 48) {
     return 1118;
    }
if (index == 49) {
     return 1129;
    }
if (index == 50) {
     return 1128;
    }
if (index == 51) {
     return 1112;
    }
if (index == 52) {
     return 1200;
    }
if (index == 53) {
     return 1112;
    }
if (index == 54) {
     return 1152;
    }
if (index == 55) {
     return 1108;
    }
if (index == 56) {
     return 1632;
    }
if (index == 57) {
     return 1044;
    }
if (index == 58) {
     return 1128;
    }
if (index == 59) {
     return 1010;
    }
if (index == 60) {
     return 1671;
    }
if (index == 61) {
     return 1171;
    }
if (index == 62) {
     return 1128;
    }
if (index == 63) {
     return 1025;
    }
if (index > 63) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1656;
    }
if (index == 1) {
     return 1672;
    }
if (index == 2) {
     return 1669;
    }
if (index == 3) {
     return 1675;
    }
if (index == 4) {
     return 1164;
    }
if (index == 5) {
     return 1647;
    }
if (index == 6) {
     return 1656;
    }
if (index == 7) {
     return 1649;
    }
if (index == 8) {
     return 1668;
    }
if (index == 9) {
     return 1680;
    }
if (index == 10) {
     return 1671;
    }
if (index == 11) {
     return 1658;
    }
if (index == 12) {
     return 1671;
    }
if (index == 13) {
     return 1650;
    }
if (index == 14) {
     return 1671;
    }
if (index == 15) {
     return 1678;
    }
if (index == 16) {
     return 1664;
    }
if (index == 17) {
     return 1673;
    }
if (index == 18) {
     return 1666;
    }
if (index == 19) {
     return 1678;
    }
if (index == 20) {
     return 1661;
    }
if (index == 21) {
     return 1680;
    }
if (index == 22) {
     return 1671;
    }
if (index == 23) {
     return 1631;
    }
if (index == 24) {
     return 1664;
    }
if (index == 25) {
     return 1714;
    }
if (index == 26) {
     return 1655;
    }
if (index == 27) {
     return 1633;
    }
if (index == 28) {
     return 1142;
    }
if (index == 29) {
     return 1647;
    }
if (index == 30) {
     return 1657;
    }
if (index == 31) {
     return 1643;
    }
if (index == 32) {
     return 1646;
    }
if (index == 33) {
     return 1700;
    }
if (index == 34) {
     return 1642;
    }
if (index == 35) {
     return 1701;
    }
if (index == 36) {
     return 1157;
    }
if (index == 37) {
     return 1678;
    }
if (index == 38) {
     return 1658;
    }
if (index == 39) {
     return 1661;
    }
if (index == 40) {
     return 1652;
    }
if (index == 41) {
     return 1707;
    }
if (index == 42) {
     return 1666;
    }
if (index == 43) {
     return 1637;
    }
if (index == 44) {
     return 1651;
    }
if (index == 45) {
     return 1702;
    }
if (index == 46) {
     return 1650;
    }
if (index == 47) {
     return 1638;
    }
if (index == 48) {
     return 1649;
    }
if (index == 49) {
     return 1680;
    }
if (index == 50) {
     return 1644;
    }
if (index == 51) {
     return 1686;
    }
if (index == 52) {
     return 1671;
    }
if (index == 53) {
     return 1692;
    }
if (index == 54) {
     return 1669;
    }
if (index == 55) {
     return 1645;
    }
if (index == 56) {
     return 1187;
    }
if (index == 57) {
     return 1663;
    }
if (index == 58) {
     return 1669;
    }
if (index == 59) {
     return 1662;
    }
if (index == 60) {
     return 1200;
    }
if (index == 61) {
     return 1708;
    }
if (index == 62) {
     return 1671;
    }
if (index == 63) {
     return 1639;
    }
if (index > 63) {
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
    var url = '/fedora/get/seapage:A27_' + imgStr + '/digitalImage';
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
br.numLeafs = 64;

// Book title and the URL used for the book title link
br.bookTitle= "Bangkok";
br.bookAuthor= "Fournereau, Lucien";
br.bookPub= "Ithaca, NY: Cornell University Library, 1894";
br.bookKeyword= "ceremonies<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;government<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thailand--Bangkok";
br.bookUrl  = '/catalog/sea:A27';

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
