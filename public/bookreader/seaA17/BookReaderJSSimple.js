//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1116;
    }
if (index == 1) {
     return 1100;
    }
if (index == 2) {
     return 1081;
    }
if (index == 3) {
     return 1187;
    }
if (index == 4) {
     return 1151;
    }
if (index == 5) {
     return 1218;
    }
if (index == 6) {
     return 1140;
    }
if (index == 7) {
     return 1157;
    }
if (index == 8) {
     return 1685;
    }
if (index == 9) {
     return 1117;
    }
if (index == 10) {
     return 1143;
    }
if (index == 11) {
     return 1217;
    }
if (index == 12) {
     return 1138;
    }
if (index == 13) {
     return 1212;
    }
if (index == 14) {
     return 1168;
    }
if (index == 15) {
     return 1058;
    }
if (index == 16) {
     return 1068;
    }
if (index == 17) {
     return 1141;
    }
if (index == 18) {
     return 1125;
    }
if (index == 19) {
     return 1147;
    }
if (index == 20) {
     return 1722;
    }
if (index == 21) {
     return 1146;
    }
if (index == 22) {
     return 1119;
    }
if (index == 23) {
     return 1139;
    }
if (index == 24) {
     return 1745;
    }
if (index == 25) {
     return 1183;
    }
if (index == 26) {
     return 1126;
    }
if (index == 27) {
     return 1151;
    }
if (index == 28) {
     return 1144;
    }
if (index == 29) {
     return 1159;
    }
if (index == 30) {
     return 1694;
    }
if (index == 31) {
     return 1120;
    }
if (index == 32) {
     return 1112;
    }
if (index == 33) {
     return 1132;
    }
if (index == 34) {
     return 1734;
    }
if (index == 35) {
     return 1185;
    }
if (index == 36) {
     return 1122;
    }
if (index == 37) {
     return 1182;
    }
if (index == 38) {
     return 1204;
    }
if (index == 39) {
     return 1157;
    }
if (index == 40) {
     return 1719;
    }
if (index == 41) {
     return 1163;
    }
if (index == 42) {
     return 1142;
    }
if (index == 43) {
     return 1181;
    }
if (index == 44) {
     return 1131;
    }
if (index == 45) {
     return 1161;
    }
if (index == 46) {
     return 1127;
    }
if (index == 47) {
     return 1157;
    }
if (index == 48) {
     return 1132;
    }
if (index == 49) {
     return 1177;
    }
if (index == 50) {
     return 1154;
    }
if (index == 51) {
     return 1184;
    }
if (index == 52) {
     return 1748;
    }
if (index == 53) {
     return 1155;
    }
if (index == 54) {
     return 1131;
    }
if (index == 55) {
     return 1165;
    }
if (index == 56) {
     return 1755;
    }
if (index == 57) {
     return 1150;
    }
if (index == 58) {
     return 1137;
    }
if (index == 59) {
     return 1187;
    }
if (index == 60) {
     return 1122;
    }
if (index == 61) {
     return 1136;
    }
if (index == 62) {
     return 1747;
    }
if (index == 63) {
     return 1148;
    }
if (index == 64) {
     return 1149;
    }
if (index == 65) {
     return 1168;
    }
if (index == 66) {
     return 1114;
    }
if (index == 67) {
     return 1171;
    }
if (index == 68) {
     return 1738;
    }
if (index == 69) {
     return 1181;
    }
if (index == 70) {
     return 1133;
    }
if (index == 71) {
     return 1162;
    }
if (index == 72) {
     return 1742;
    }
if (index == 73) {
     return 1183;
    }
if (index == 74) {
     return 1719;
    }
if (index == 75) {
     return 1188;
    }
if (index == 76) {
     return 1146;
    }
if (index == 77) {
     return 1117;
    }
if (index == 78) {
     return 1119;
    }
if (index == 79) {
     return 1144;
    }
if (index > 79) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1741;
    }
if (index == 1) {
     return 1712;
    }
if (index == 2) {
     return 1716;
    }
if (index == 3) {
     return 1718;
    }
if (index == 4) {
     return 1727;
    }
if (index == 5) {
     return 1711;
    }
if (index == 6) {
     return 1725;
    }
if (index == 7) {
     return 1708;
    }
if (index == 8) {
     return 1214;
    }
if (index == 9) {
     return 1726;
    }
if (index == 10) {
     return 1748;
    }
if (index == 11) {
     return 1755;
    }
if (index == 12) {
     return 1753;
    }
if (index == 13) {
     return 1761;
    }
if (index == 14) {
     return 1758;
    }
if (index == 15) {
     return 1698;
    }
if (index == 16) {
     return 1698;
    }
if (index == 17) {
     return 1721;
    }
if (index == 18) {
     return 1708;
    }
if (index == 19) {
     return 1721;
    }
if (index == 20) {
     return 1155;
    }
if (index == 21) {
     return 1721;
    }
if (index == 22) {
     return 1727;
    }
if (index == 23) {
     return 1739;
    }
if (index == 24) {
     return 1184;
    }
if (index == 25) {
     return 1759;
    }
if (index == 26) {
     return 1719;
    }
if (index == 27) {
     return 1722;
    }
if (index == 28) {
     return 1745;
    }
if (index == 29) {
     return 1727;
    }
if (index == 30) {
     return 1141;
    }
if (index == 31) {
     return 1723;
    }
if (index == 32) {
     return 1726;
    }
if (index == 33) {
     return 1718;
    }
if (index == 34) {
     return 1214;
    }
if (index == 35) {
     return 1761;
    }
if (index == 36) {
     return 1724;
    }
if (index == 37) {
     return 1754;
    }
if (index == 38) {
     return 1725;
    }
if (index == 39) {
     return 1736;
    }
if (index == 40) {
     return 1180;
    }
if (index == 41) {
     return 1732;
    }
if (index == 42) {
     return 1697;
    }
if (index == 43) {
     return 1750;
    }
if (index == 44) {
     return 1736;
    }
if (index == 45) {
     return 1758;
    }
if (index == 46) {
     return 1746;
    }
if (index == 47) {
     return 1746;
    }
if (index == 48) {
     return 1752;
    }
if (index == 49) {
     return 1724;
    }
if (index == 50) {
     return 1728;
    }
if (index == 51) {
     return 1734;
    }
if (index == 52) {
     return 1195;
    }
if (index == 53) {
     return 1746;
    }
if (index == 54) {
     return 1742;
    }
if (index == 55) {
     return 1752;
    }
if (index == 56) {
     return 1198;
    }
if (index == 57) {
     return 1723;
    }
if (index == 58) {
     return 1724;
    }
if (index == 59) {
     return 1764;
    }
if (index == 60) {
     return 1749;
    }
if (index == 61) {
     return 1709;
    }
if (index == 62) {
     return 1161;
    }
if (index == 63) {
     return 1729;
    }
if (index == 64) {
     return 1723;
    }
if (index == 65) {
     return 1757;
    }
if (index == 66) {
     return 1728;
    }
if (index == 67) {
     return 1721;
    }
if (index == 68) {
     return 1168;
    }
if (index == 69) {
     return 1719;
    }
if (index == 70) {
     return 1753;
    }
if (index == 71) {
     return 1745;
    }
if (index == 72) {
     return 1198;
    }
if (index == 73) {
     return 1759;
    }
if (index == 74) {
     return 1191;
    }
if (index == 75) {
     return 1758;
    }
if (index == 76) {
     return 1733;
    }
if (index == 77) {
     return 1755;
    }
if (index == 78) {
     return 1725;
    }
if (index == 79) {
     return 1743;
    }
if (index > 79) {
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
    var url = '/fedora/get/seapage:A17_' + imgStr + '/digitalImage';
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
br.numLeafs = 80;

// Book title and the URL used for the book title link
br.bookTitle= "Voyage dans le haut Laos";
br.bookAuthor= "Neis, P.";
br.bookPub= "Ithaca, NY: Cornell University Library, 1885";
br.bookKeyword= "Laos<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thailand";
br.bookUrl  = '/catalog/sea:A17';

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
