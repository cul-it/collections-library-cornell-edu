//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1148;
    }
if (index == 1) {
     return 1058;
    }
if (index == 2) {
     return 1116;
    }
if (index == 3) {
     return 1099;
    }
if (index == 4) {
     return 1116;
    }
if (index == 5) {
     return 1075;
    }
if (index == 6) {
     return 1099;
    }
if (index == 7) {
     return 1140;
    }
if (index == 8) {
     return 1137;
    }
if (index == 9) {
     return 1072;
    }
if (index == 10) {
     return 1080;
    }
if (index == 11) {
     return 1123;
    }
if (index == 12) {
     return 1162;
    }
if (index == 13) {
     return 1131;
    }
if (index == 14) {
     return 1739;
    }
if (index == 15) {
     return 1134;
    }
if (index == 16) {
     return 1121;
    }
if (index == 17) {
     return 1146;
    }
if (index == 18) {
     return 1136;
    }
if (index == 19) {
     return 1114;
    }
if (index == 20) {
     return 1104;
    }
if (index == 21) {
     return 1159;
    }
if (index == 22) {
     return 1112;
    }
if (index == 23) {
     return 1125;
    }
if (index == 24) {
     return 1126;
    }
if (index == 25) {
     return 1111;
    }
if (index == 26) {
     return 1101;
    }
if (index == 27) {
     return 1168;
    }
if (index == 28) {
     return 1105;
    }
if (index == 29) {
     return 1123;
    }
if (index == 30) {
     return 1104;
    }
if (index == 31) {
     return 1116;
    }
if (index == 32) {
     return 1120;
    }
if (index == 33) {
     return 1730;
    }
if (index == 34) {
     return 1115;
    }
if (index == 35) {
     return 1123;
    }
if (index == 36) {
     return 1103;
    }
if (index == 37) {
     return 1120;
    }
if (index == 38) {
     return 1122;
    }
if (index == 39) {
     return 1116;
    }
if (index == 40) {
     return 1154;
    }
if (index == 41) {
     return 1136;
    }
if (index == 42) {
     return 1084;
    }
if (index == 43) {
     return 1134;
    }
if (index == 44) {
     return 1124;
    }
if (index == 45) {
     return 1186;
    }
if (index == 46) {
     return 1691;
    }
if (index == 47) {
     return 1178;
    }
if (index == 48) {
     return 1150;
    }
if (index == 49) {
     return 1104;
    }
if (index == 50) {
     return 1101;
    }
if (index == 51) {
     return 1160;
    }
if (index == 52) {
     return 1106;
    }
if (index == 53) {
     return 1094;
    }
if (index == 54) {
     return 1104;
    }
if (index == 55) {
     return 1101;
    }
if (index == 56) {
     return 1089;
    }
if (index == 57) {
     return 1124;
    }
if (index == 58) {
     return 1103;
    }
if (index == 59) {
     return 1152;
    }
if (index == 60) {
     return 1119;
    }
if (index == 61) {
     return 1132;
    }
if (index == 62) {
     return 1130;
    }
if (index == 63) {
     return 1155;
    }
if (index == 64) {
     return 1131;
    }
if (index == 65) {
     return 1174;
    }
if (index == 66) {
     return 1128;
    }
if (index == 67) {
     return 1205;
    }
if (index == 68) {
     return 1138;
    }
if (index == 69) {
     return 1758;
    }
if (index == 70) {
     return 1108;
    }
if (index == 71) {
     return 1145;
    }
if (index == 72) {
     return 1134;
    }
if (index == 73) {
     return 1123;
    }
if (index == 74) {
     return 1101;
    }
if (index == 75) {
     return 1107;
    }
if (index == 76) {
     return 1146;
    }
if (index == 77) {
     return 1128;
    }
if (index == 78) {
     return 1761;
    }
if (index == 79) {
     return 1192;
    }
if (index == 80) {
     return 1158;
    }
if (index == 81) {
     return 1096;
    }
if (index == 82) {
     return 1746;
    }
if (index == 83) {
     return 1119;
    }
if (index == 84) {
     return 1119;
    }
if (index == 85) {
     return 1125;
    }
if (index == 86) {
     return 1121;
    }
if (index == 87) {
     return 1133;
    }
if (index == 88) {
     return 1088;
    }
if (index == 89) {
     return 1132;
    }
if (index == 90) {
     return 1124;
    }
if (index == 91) {
     return 1159;
    }
if (index == 92) {
     return 1133;
    }
if (index == 93) {
     return 1118;
    }
if (index == 94) {
     return 1108;
    }
if (index == 95) {
     return 1157;
    }
if (index == 96) {
     return 1152;
    }
if (index == 97) {
     return 1129;
    }
if (index == 98) {
     return 1124;
    }
if (index == 99) {
     return 1126;
    }
if (index == 100) {
     return 1118;
    }
if (index == 101) {
     return 1146;
    }
if (index == 102) {
     return 1139;
    }
if (index == 103) {
     return 1159;
    }
if (index == 104) {
     return 1166;
    }
if (index == 105) {
     return 1135;
    }
if (index == 106) {
     return 1742;
    }
if (index == 107) {
     return 1153;
    }
if (index == 108) {
     return 1130;
    }
if (index == 109) {
     return 1140;
    }
if (index == 110) {
     return 1660;
    }
if (index == 111) {
     return 1196;
    }
if (index == 112) {
     return 1104;
    }
if (index == 113) {
     return 1092;
    }
if (index == 114) {
     return 1744;
    }
if (index == 115) {
     return 1177;
    }
if (index == 116) {
     return 1163;
    }
if (index == 117) {
     return 1114;
    }
if (index == 118) {
     return 1125;
    }
if (index == 119) {
     return 1141;
    }
if (index == 120) {
     return 1151;
    }
if (index == 121) {
     return 1161;
    }
if (index == 122) {
     return 1755;
    }
if (index == 123) {
     return 1140;
    }
if (index == 124) {
     return 1115;
    }
if (index == 125) {
     return 1123;
    }
if (index == 126) {
     return 1758;
    }
if (index == 127) {
     return 1177;
    }
if (index == 128) {
     return 1120;
    }
if (index == 129) {
     return 1149;
    }
if (index == 130) {
     return 1119;
    }
if (index == 131) {
     return 1123;
    }
if (index == 132) {
     return 1136;
    }
if (index == 133) {
     return 1118;
    }
if (index > 133) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1740;
    }
if (index == 1) {
     return 1714;
    }
if (index == 2) {
     return 1720;
    }
if (index == 3) {
     return 1746;
    }
if (index == 4) {
     return 1728;
    }
if (index == 5) {
     return 1743;
    }
if (index == 6) {
     return 1737;
    }
if (index == 7) {
     return 1723;
    }
if (index == 8) {
     return 1743;
    }
if (index == 9) {
     return 1742;
    }
if (index == 10) {
     return 1740;
    }
if (index == 11) {
     return 1745;
    }
if (index == 12) {
     return 1745;
    }
if (index == 13) {
     return 1730;
    }
if (index == 14) {
     return 1146;
    }
if (index == 15) {
     return 1739;
    }
if (index == 16) {
     return 1734;
    }
if (index == 17) {
     return 1745;
    }
if (index == 18) {
     return 1745;
    }
if (index == 19) {
     return 1752;
    }
if (index == 20) {
     return 1730;
    }
if (index == 21) {
     return 1736;
    }
if (index == 22) {
     return 1736;
    }
if (index == 23) {
     return 1749;
    }
if (index == 24) {
     return 1740;
    }
if (index == 25) {
     return 1755;
    }
if (index == 26) {
     return 1726;
    }
if (index == 27) {
     return 1758;
    }
if (index == 28) {
     return 1747;
    }
if (index == 29) {
     return 1759;
    }
if (index == 30) {
     return 1733;
    }
if (index == 31) {
     return 1756;
    }
if (index == 32) {
     return 1726;
    }
if (index == 33) {
     return 1158;
    }
if (index == 34) {
     return 1714;
    }
if (index == 35) {
     return 1742;
    }
if (index == 36) {
     return 1739;
    }
if (index == 37) {
     return 1762;
    }
if (index == 38) {
     return 1750;
    }
if (index == 39) {
     return 1771;
    }
if (index == 40) {
     return 1752;
    }
if (index == 41) {
     return 1738;
    }
if (index == 42) {
     return 1741;
    }
if (index == 43) {
     return 1758;
    }
if (index == 44) {
     return 1748;
    }
if (index == 45) {
     return 1747;
    }
if (index == 46) {
     return 1194;
    }
if (index == 47) {
     return 1758;
    }
if (index == 48) {
     return 1761;
    }
if (index == 49) {
     return 1725;
    }
if (index == 50) {
     return 1720;
    }
if (index == 51) {
     return 1766;
    }
if (index == 52) {
     return 1745;
    }
if (index == 53) {
     return 1745;
    }
if (index == 54) {
     return 1735;
    }
if (index == 55) {
     return 1676;
    }
if (index == 56) {
     return 1669;
    }
if (index == 57) {
     return 1725;
    }
if (index == 58) {
     return 1739;
    }
if (index == 59) {
     return 1754;
    }
if (index == 60) {
     return 1739;
    }
if (index == 61) {
     return 1754;
    }
if (index == 62) {
     return 1734;
    }
if (index == 63) {
     return 1753;
    }
if (index == 64) {
     return 1765;
    }
if (index == 65) {
     return 1744;
    }
if (index == 66) {
     return 1761;
    }
if (index == 67) {
     return 1734;
    }
if (index == 68) {
     return 1755;
    }
if (index == 69) {
     return 1152;
    }
if (index == 70) {
     return 1769;
    }
if (index == 71) {
     return 1675;
    }
if (index == 72) {
     return 1678;
    }
if (index == 73) {
     return 1762;
    }
if (index == 74) {
     return 1751;
    }
if (index == 75) {
     return 1754;
    }
if (index == 76) {
     return 1745;
    }
if (index == 77) {
     return 1763;
    }
if (index == 78) {
     return 1143;
    }
if (index == 79) {
     return 1753;
    }
if (index == 80) {
     return 1734;
    }
if (index == 81) {
     return 1725;
    }
if (index == 82) {
     return 1170;
    }
if (index == 83) {
     return 1765;
    }
if (index == 84) {
     return 1748;
    }
if (index == 85) {
     return 1747;
    }
if (index == 86) {
     return 1741;
    }
if (index == 87) {
     return 1767;
    }
if (index == 88) {
     return 1714;
    }
if (index == 89) {
     return 1755;
    }
if (index == 90) {
     return 1749;
    }
if (index == 91) {
     return 1749;
    }
if (index == 92) {
     return 1751;
    }
if (index == 93) {
     return 1744;
    }
if (index == 94) {
     return 1756;
    }
if (index == 95) {
     return 1781;
    }
if (index == 96) {
     return 1749;
    }
if (index == 97) {
     return 1762;
    }
if (index == 98) {
     return 1737;
    }
if (index == 99) {
     return 1751;
    }
if (index == 100) {
     return 1731;
    }
if (index == 101) {
     return 1750;
    }
if (index == 102) {
     return 1764;
    }
if (index == 103) {
     return 1771;
    }
if (index == 104) {
     return 1761;
    }
if (index == 105) {
     return 1762;
    }
if (index == 106) {
     return 1160;
    }
if (index == 107) {
     return 1758;
    }
if (index == 108) {
     return 1749;
    }
if (index == 109) {
     return 1674;
    }
if (index == 110) {
     return 1118;
    }
if (index == 111) {
     return 1759;
    }
if (index == 112) {
     return 1746;
    }
if (index == 113) {
     return 1759;
    }
if (index == 114) {
     return 1130;
    }
if (index == 115) {
     return 1776;
    }
if (index == 116) {
     return 1761;
    }
if (index == 117) {
     return 1751;
    }
if (index == 118) {
     return 1735;
    }
if (index == 119) {
     return 1744;
    }
if (index == 120) {
     return 1740;
    }
if (index == 121) {
     return 1738;
    }
if (index == 122) {
     return 1151;
    }
if (index == 123) {
     return 1750;
    }
if (index == 124) {
     return 1739;
    }
if (index == 125) {
     return 1755;
    }
if (index == 126) {
     return 1133;
    }
if (index == 127) {
     return 1762;
    }
if (index == 128) {
     return 1663;
    }
if (index == 129) {
     return 1736;
    }
if (index == 130) {
     return 1756;
    }
if (index == 131) {
     return 1758;
    }
if (index == 132) {
     return 1765;
    }
if (index == 133) {
     return 1749;
    }
if (index > 133) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:A07_' + imgStr + '/digitalImage';
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
br.numLeafs = 134;

// Book title and the URL used for the book title link
br.bookTitle= "Voyage dans les royaumes de Siam, de Cambodge, de Laos et autres parties centrales de l'Indo-Chine, 1858-1861";
br.bookAuthor= "Mouhot, Henri";
br.bookPub= "Ithaca, NY: Cornell University Library, 1863";
br.bookKeyword= "Thailand<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cambodia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Laos";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:A07';

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
