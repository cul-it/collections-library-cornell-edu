//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1461;
    }
if (index == 1) {
     return 1419;
    }
if (index == 2) {
     return 1432;
    }
if (index == 3) {
     return 1325;
    }
if (index == 4) {
     return 1364;
    }
if (index == 5) {
     return 1460;
    }
if (index == 6) {
     return 1335;
    }
if (index == 7) {
     return 1439;
    }
if (index == 8) {
     return 1434;
    }
if (index == 9) {
     return 1361;
    }
if (index == 10) {
     return 1370;
    }
if (index == 11) {
     return 1219;
    }
if (index == 12) {
     return 1211;
    }
if (index == 13) {
     return 1164;
    }
if (index == 14) {
     return 1226;
    }
if (index == 15) {
     return 1351;
    }
if (index == 16) {
     return 1381;
    }
if (index == 17) {
     return 750;
    }
if (index == 18) {
     return 1384;
    }
if (index == 19) {
     return 1303;
    }
if (index == 20) {
     return 1247;
    }
if (index == 21) {
     return 1282;
    }
if (index == 22) {
     return 1315;
    }
if (index == 23) {
     return 1357;
    }
if (index == 24) {
     return 1189;
    }
if (index == 25) {
     return 1229;
    }
if (index == 26) {
     return 1202;
    }
if (index == 27) {
     return 1211;
    }
if (index == 28) {
     return 1262;
    }
if (index == 29) {
     return 1256;
    }
if (index == 30) {
     return 1213;
    }
if (index == 31) {
     return 1271;
    }
if (index == 32) {
     return 1295;
    }
if (index == 33) {
     return 1367;
    }
if (index == 34) {
     return 1351;
    }
if (index == 35) {
     return 1367;
    }
if (index == 36) {
     return 1358;
    }
if (index == 37) {
     return 1279;
    }
if (index == 38) {
     return 1307;
    }
if (index == 39) {
     return 1253;
    }
if (index == 40) {
     return 1265;
    }
if (index == 41) {
     return 1302;
    }
if (index == 42) {
     return 1302;
    }
if (index == 43) {
     return 1309;
    }
if (index == 44) {
     return 1323;
    }
if (index == 45) {
     return 1348;
    }
if (index == 46) {
     return 1282;
    }
if (index == 47) {
     return 1286;
    }
if (index == 48) {
     return 1245;
    }
if (index == 49) {
     return 1323;
    }
if (index == 50) {
     return 1262;
    }
if (index == 51) {
     return 1273;
    }
if (index == 52) {
     return 1235;
    }
if (index == 53) {
     return 1284;
    }
if (index == 54) {
     return 1285;
    }
if (index == 55) {
     return 1287;
    }
if (index == 56) {
     return 1142;
    }
if (index == 57) {
     return 1234;
    }
if (index == 58) {
     return 1126;
    }
if (index == 59) {
     return 1180;
    }
if (index == 60) {
     return 1150;
    }
if (index == 61) {
     return 1234;
    }
if (index == 62) {
     return 1203;
    }
if (index == 63) {
     return 1213;
    }
if (index == 64) {
     return 1132;
    }
if (index == 65) {
     return 1185;
    }
if (index == 66) {
     return 1148;
    }
if (index == 67) {
     return 1210;
    }
if (index == 68) {
     return 1242;
    }
if (index == 69) {
     return 1204;
    }
if (index == 70) {
     return 1166;
    }
if (index == 71) {
     return 1211;
    }
if (index == 72) {
     return 1220;
    }
if (index == 73) {
     return 1232;
    }
if (index == 74) {
     return 1175;
    }
if (index == 75) {
     return 1305;
    }
if (index == 76) {
     return 1142;
    }
if (index == 77) {
     return 1281;
    }
if (index == 78) {
     return 1182;
    }
if (index == 79) {
     return 1272;
    }
if (index == 80) {
     return 1221;
    }
if (index == 81) {
     return 1213;
    }
if (index == 82) {
     return 1192;
    }
if (index == 83) {
     return 1258;
    }
if (index == 84) {
     return 1125;
    }
if (index == 85) {
     return 1276;
    }
if (index == 86) {
     return 1194;
    }
if (index == 87) {
     return 1250;
    }
if (index == 88) {
     return 1171;
    }
if (index == 89) {
     return 1300;
    }
if (index == 90) {
     return 1171;
    }
if (index == 91) {
     return 1274;
    }
if (index == 92) {
     return 1286;
    }
if (index == 93) {
     return 1311;
    }
if (index == 94) {
     return 1142;
    }
if (index == 95) {
     return 1163;
    }
if (index == 96) {
     return 1174;
    }
if (index == 97) {
     return 1177;
    }
if (index == 98) {
     return 1171;
    }
if (index == 99) {
     return 1254;
    }
if (index == 100) {
     return 1256;
    }
if (index == 101) {
     return 1189;
    }
if (index == 102) {
     return 1187;
    }
if (index == 103) {
     return 1147;
    }
if (index == 104) {
     return 1112;
    }
if (index == 105) {
     return 1181;
    }
if (index == 106) {
     return 1118;
    }
if (index == 107) {
     return 1166;
    }
if (index == 108) {
     return 1040;
    }
if (index == 109) {
     return 1088;
    }
if (index == 110) {
     return 1151;
    }
if (index == 111) {
     return 1142;
    }
if (index == 112) {
     return 1096;
    }
if (index == 113) {
     return 1151;
    }
if (index == 114) {
     return 1164;
    }
if (index == 115) {
     return 1153;
    }
if (index == 116) {
     return 1065;
    }
if (index == 117) {
     return 1215;
    }
if (index == 118) {
     return 1144;
    }
if (index == 119) {
     return 1173;
    }
if (index == 120) {
     return 1058;
    }
if (index == 121) {
     return 1196;
    }
if (index == 122) {
     return 1207;
    }
if (index == 123) {
     return 1089;
    }
if (index == 124) {
     return 1076;
    }
if (index == 125) {
     return 1215;
    }
if (index == 126) {
     return 1099;
    }
if (index == 127) {
     return 1183;
    }
if (index == 128) {
     return 1105;
    }
if (index == 129) {
     return 1198;
    }
if (index == 130) {
     return 1064;
    }
if (index == 131) {
     return 1198;
    }
if (index == 132) {
     return 1076;
    }
if (index == 133) {
     return 1218;
    }
if (index == 134) {
     return 1112;
    }
if (index == 135) {
     return 1131;
    }
if (index == 136) {
     return 1115;
    }
if (index == 137) {
     return 1151;
    }
if (index == 138) {
     return 1156;
    }
if (index == 139) {
     return 1144;
    }
if (index == 140) {
     return 1089;
    }
if (index == 141) {
     return 1228;
    }
if (index == 142) {
     return 1099;
    }
if (index == 143) {
     return 1095;
    }
if (index == 144) {
     return 1141;
    }
if (index == 145) {
     return 1132;
    }
if (index == 146) {
     return 1171;
    }
if (index == 147) {
     return 1167;
    }
if (index == 148) {
     return 1119;
    }
if (index == 149) {
     return 1127;
    }
if (index == 150) {
     return 1165;
    }
if (index == 151) {
     return 1098;
    }
if (index == 152) {
     return 1089;
    }
if (index == 153) {
     return 1115;
    }
if (index == 154) {
     return 1219;
    }
if (index == 155) {
     return 1151;
    }
if (index == 156) {
     return 1087;
    }
if (index == 157) {
     return 1148;
    }
if (index == 158) {
     return 1138;
    }
if (index == 159) {
     return 1066;
    }
if (index == 160) {
     return 1042;
    }
if (index == 161) {
     return 1174;
    }
if (index == 162) {
     return 1176;
    }
if (index == 163) {
     return 1112;
    }
if (index == 164) {
     return 1126;
    }
if (index == 165) {
     return 1127;
    }
if (index == 166) {
     return 1093;
    }
if (index == 167) {
     return 1113;
    }
if (index == 168) {
     return 1050;
    }
if (index == 169) {
     return 1186;
    }
if (index == 170) {
     return 1105;
    }
if (index == 171) {
     return 1226;
    }
if (index == 172) {
     return 1127;
    }
if (index == 173) {
     return 1232;
    }
if (index == 174) {
     return 1125;
    }
if (index == 175) {
     return 1469;
    }
if (index > 175) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1905;
    }
if (index == 1) {
     return 1869;
    }
if (index == 2) {
     return 1879;
    }
if (index == 3) {
     return 1846;
    }
if (index == 4) {
     return 1856;
    }
if (index == 5) {
     return 1870;
    }
if (index == 6) {
     return 1837;
    }
if (index == 7) {
     return 1830;
    }
if (index == 8) {
     return 1851;
    }
if (index == 9) {
     return 1843;
    }
if (index == 10) {
     return 1874;
    }
if (index == 11) {
     return 1815;
    }
if (index == 12) {
     return 1871;
    }
if (index == 13) {
     return 1820;
    }
if (index == 14) {
     return 1870;
    }
if (index == 15) {
     return 1814;
    }
if (index == 16) {
     return 1837;
    }
if (index == 17) {
     return 1050;
    }
if (index == 18) {
     return 1820;
    }
if (index == 19) {
     return 1847;
    }
if (index == 20) {
     return 1857;
    }
if (index == 21) {
     return 1859;
    }
if (index == 22) {
     return 1850;
    }
if (index == 23) {
     return 1884;
    }
if (index == 24) {
     return 1860;
    }
if (index == 25) {
     return 1853;
    }
if (index == 26) {
     return 1873;
    }
if (index == 27) {
     return 1860;
    }
if (index == 28) {
     return 1886;
    }
if (index == 29) {
     return 1869;
    }
if (index == 30) {
     return 1898;
    }
if (index == 31) {
     return 1867;
    }
if (index == 32) {
     return 1869;
    }
if (index == 33) {
     return 1840;
    }
if (index == 34) {
     return 1873;
    }
if (index == 35) {
     return 1855;
    }
if (index == 36) {
     return 1892;
    }
if (index == 37) {
     return 1827;
    }
if (index == 38) {
     return 1852;
    }
if (index == 39) {
     return 1847;
    }
if (index == 40) {
     return 1848;
    }
if (index == 41) {
     return 1795;
    }
if (index == 42) {
     return 1846;
    }
if (index == 43) {
     return 1821;
    }
if (index == 44) {
     return 1884;
    }
if (index == 45) {
     return 1850;
    }
if (index == 46) {
     return 1824;
    }
if (index == 47) {
     return 1839;
    }
if (index == 48) {
     return 1850;
    }
if (index == 49) {
     return 1812;
    }
if (index == 50) {
     return 1830;
    }
if (index == 51) {
     return 1801;
    }
if (index == 52) {
     return 1833;
    }
if (index == 53) {
     return 1811;
    }
if (index == 54) {
     return 1836;
    }
if (index == 55) {
     return 1827;
    }
if (index == 56) {
     return 1843;
    }
if (index == 57) {
     return 1824;
    }
if (index == 58) {
     return 1840;
    }
if (index == 59) {
     return 1832;
    }
if (index == 60) {
     return 1826;
    }
if (index == 61) {
     return 1817;
    }
if (index == 62) {
     return 1814;
    }
if (index == 63) {
     return 1784;
    }
if (index == 64) {
     return 1826;
    }
if (index == 65) {
     return 1801;
    }
if (index == 66) {
     return 1828;
    }
if (index == 67) {
     return 1825;
    }
if (index == 68) {
     return 1816;
    }
if (index == 69) {
     return 1817;
    }
if (index == 70) {
     return 1820;
    }
if (index == 71) {
     return 1835;
    }
if (index == 72) {
     return 1834;
    }
if (index == 73) {
     return 1819;
    }
if (index == 74) {
     return 1820;
    }
if (index == 75) {
     return 1819;
    }
if (index == 76) {
     return 1816;
    }
if (index == 77) {
     return 1797;
    }
if (index == 78) {
     return 1797;
    }
if (index == 79) {
     return 1863;
    }
if (index == 80) {
     return 1857;
    }
if (index == 81) {
     return 1866;
    }
if (index == 82) {
     return 1876;
    }
if (index == 83) {
     return 1824;
    }
if (index == 84) {
     return 1807;
    }
if (index == 85) {
     return 1832;
    }
if (index == 86) {
     return 1837;
    }
if (index == 87) {
     return 1861;
    }
if (index == 88) {
     return 1873;
    }
if (index == 89) {
     return 1870;
    }
if (index == 90) {
     return 1866;
    }
if (index == 91) {
     return 1863;
    }
if (index == 92) {
     return 1867;
    }
if (index == 93) {
     return 1848;
    }
if (index == 94) {
     return 1873;
    }
if (index == 95) {
     return 1827;
    }
if (index == 96) {
     return 1889;
    }
if (index == 97) {
     return 1839;
    }
if (index == 98) {
     return 1843;
    }
if (index == 99) {
     return 1821;
    }
if (index == 100) {
     return 1847;
    }
if (index == 101) {
     return 1835;
    }
if (index == 102) {
     return 1847;
    }
if (index == 103) {
     return 1812;
    }
if (index == 104) {
     return 1851;
    }
if (index == 105) {
     return 1819;
    }
if (index == 106) {
     return 1873;
    }
if (index == 107) {
     return 1873;
    }
if (index == 108) {
     return 1791;
    }
if (index == 109) {
     return 1823;
    }
if (index == 110) {
     return 1827;
    }
if (index == 111) {
     return 1831;
    }
if (index == 112) {
     return 1907;
    }
if (index == 113) {
     return 1820;
    }
if (index == 114) {
     return 1894;
    }
if (index == 115) {
     return 1819;
    }
if (index == 116) {
     return 1825;
    }
if (index == 117) {
     return 1857;
    }
if (index == 118) {
     return 1855;
    }
if (index == 119) {
     return 1844;
    }
if (index == 120) {
     return 1831;
    }
if (index == 121) {
     return 1859;
    }
if (index == 122) {
     return 1857;
    }
if (index == 123) {
     return 1812;
    }
if (index == 124) {
     return 1857;
    }
if (index == 125) {
     return 1850;
    }
if (index == 126) {
     return 1881;
    }
if (index == 127) {
     return 1856;
    }
if (index == 128) {
     return 1883;
    }
if (index == 129) {
     return 1844;
    }
if (index == 130) {
     return 1876;
    }
if (index == 131) {
     return 1867;
    }
if (index == 132) {
     return 1856;
    }
if (index == 133) {
     return 1866;
    }
if (index == 134) {
     return 1866;
    }
if (index == 135) {
     return 1851;
    }
if (index == 136) {
     return 1892;
    }
if (index == 137) {
     return 1847;
    }
if (index == 138) {
     return 1928;
    }
if (index == 139) {
     return 1850;
    }
if (index == 140) {
     return 1814;
    }
if (index == 141) {
     return 1895;
    }
if (index == 142) {
     return 1847;
    }
if (index == 143) {
     return 1863;
    }
if (index == 144) {
     return 1869;
    }
if (index == 145) {
     return 1872;
    }
if (index == 146) {
     return 1907;
    }
if (index == 147) {
     return 1875;
    }
if (index == 148) {
     return 1840;
    }
if (index == 149) {
     return 1850;
    }
if (index == 150) {
     return 1862;
    }
if (index == 151) {
     return 1847;
    }
if (index == 152) {
     return 1847;
    }
if (index == 153) {
     return 1847;
    }
if (index == 154) {
     return 1905;
    }
if (index == 155) {
     return 1852;
    }
if (index == 156) {
     return 1861;
    }
if (index == 157) {
     return 1882;
    }
if (index == 158) {
     return 1850;
    }
if (index == 159) {
     return 1840;
    }
if (index == 160) {
     return 1852;
    }
if (index == 161) {
     return 1871;
    }
if (index == 162) {
     return 1830;
    }
if (index == 163) {
     return 1840;
    }
if (index == 164) {
     return 1880;
    }
if (index == 165) {
     return 1850;
    }
if (index == 166) {
     return 1847;
    }
if (index == 167) {
     return 1843;
    }
if (index == 168) {
     return 1869;
    }
if (index == 169) {
     return 1860;
    }
if (index == 170) {
     return 1838;
    }
if (index == 171) {
     return 1866;
    }
if (index == 172) {
     return 1811;
    }
if (index == 173) {
     return 1827;
    }
if (index == 174) {
     return 1758;
    }
if (index == 175) {
     return 1902;
    }
if (index > 175) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:082_' + imgStr + '/digitalImage';
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
br.numLeafs = 176;

// Book title and the URL used for the book title link
br.bookTitle= "A voyage from Calcutta to the Mergui Archipelago, lying on the east side of the Bay of Bengal; describing a chain of islands, never before surveyed... also, an account of the islands Jan Sylvan, Pulo Pinang, and the port of Queda; the present state of Atcheen; and directions for sailing thence to Fort Marlbro' down the south-west coast of Sumatra; to which are added, an account of the island Celebes; a treatise on the monsoons in India; a proposal for making ships and vessels more convenient for the accommodation of passengers; and thoughts on a new mode of preserving ship provision: also, an idea of making a map of the world on a large scale";
br.bookAuthor= "Forrest, Thomas";
br.bookPub= "London: J. Robson, [etc., etc.], 1792";
br.bookKeyword= "Typhoons<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mergui Archipelago (Burma)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malay Archipelago--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Southeast Asia--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:082';

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
