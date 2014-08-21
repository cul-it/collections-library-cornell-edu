//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1041;
    }
if (index == 1) {
     return 1916;
    }
if (index == 2) {
     return 1855;
    }
if (index == 3) {
     return 1916;
    }
if (index == 4) {
     return 1855;
    }
if (index == 5) {
     return 1916;
    }
if (index == 6) {
     return 1855;
    }
if (index == 7) {
     return 1040;
    }
if (index == 8) {
     return 1914;
    }
if (index == 9) {
     return 1011;
    }
if (index == 10) {
     return 1855;
    }
if (index == 11) {
     return 1942;
    }
if (index == 12) {
     return 1855;
    }
if (index == 13) {
     return 1904;
    }
if (index == 14) {
     return 1855;
    }
if (index == 15) {
     return 1820;
    }
if (index == 16) {
     return 1855;
    }
if (index == 17) {
     return 1820;
    }
if (index == 18) {
     return 1855;
    }
if (index == 19) {
     return 1820;
    }
if (index == 20) {
     return 1773;
    }
if (index == 21) {
     return 1820;
    }
if (index == 22) {
     return 1906;
    }
if (index == 23) {
     return 1779;
    }
if (index == 24) {
     return 1882;
    }
if (index == 25) {
     return 1820;
    }
if (index == 26) {
     return 1764;
    }
if (index == 27) {
     return 1854;
    }
if (index == 28) {
     return 1703;
    }
if (index == 29) {
     return 1820;
    }
if (index == 30) {
     return 1851;
    }
if (index == 31) {
     return 1851;
    }
if (index == 32) {
     return 1859;
    }
if (index == 33) {
     return 1865;
    }
if (index == 34) {
     return 1833;
    }
if (index == 35) {
     return 1873;
    }
if (index == 36) {
     return 1851;
    }
if (index == 37) {
     return 1820;
    }
if (index == 38) {
     return 1817;
    }
if (index == 39) {
     return 1862;
    }
if (index == 40) {
     return 1539;
    }
if (index == 41) {
     return 1820;
    }
if (index == 42) {
     return 1806;
    }
if (index == 43) {
     return 1859;
    }
if (index == 44) {
     return 1817;
    }
if (index == 45) {
     return 1859;
    }
if (index == 46) {
     return 1803;
    }
if (index == 47) {
     return 1865;
    }
if (index == 48) {
     return 1835;
    }
if (index == 49) {
     return 1820;
    }
if (index == 50) {
     return 1803;
    }
if (index == 51) {
     return 1593;
    }
if (index == 52) {
     return 1536;
    }
if (index == 53) {
     return 1800;
    }
if (index == 54) {
     return 1776;
    }
if (index == 55) {
     return 1820;
    }
if (index == 56) {
     return 1776;
    }
if (index == 57) {
     return 1820;
    }
if (index == 58) {
     return 1811;
    }
if (index == 59) {
     return 1820;
    }
if (index == 60) {
     return 1841;
    }
if (index == 61) {
     return 1748;
    }
if (index == 62) {
     return 1679;
    }
if (index == 63) {
     return 1779;
    }
if (index == 64) {
     return 1835;
    }
if (index == 65) {
     return 1827;
    }
if (index == 66) {
     return 1776;
    }
if (index == 67) {
     return 1887;
    }
if (index == 68) {
     return 1825;
    }
if (index == 69) {
     return 1890;
    }
if (index == 70) {
     return 1859;
    }
if (index == 71) {
     return 1887;
    }
if (index == 72) {
     return 1825;
    }
if (index == 73) {
     return 1898;
    }
if (index == 74) {
     return 1776;
    }
if (index == 75) {
     return 1898;
    }
if (index == 76) {
     return 1926;
    }
if (index == 77) {
     return 1872;
    }
if (index == 78) {
     return 1793;
    }
if (index == 79) {
     return 1820;
    }
if (index == 80) {
     return 1941;
    }
if (index == 81) {
     return 1820;
    }
if (index == 82) {
     return 1910;
    }
if (index == 83) {
     return 1939;
    }
if (index == 84) {
     return 1947;
    }
if (index == 85) {
     return 1721;
    }
if (index == 86) {
     return 1923;
    }
if (index == 87) {
     return 1906;
    }
if (index == 88) {
     return 1617;
    }
if (index == 89) {
     return 1955;
    }
if (index == 90) {
     return 1896;
    }
if (index == 91) {
     return 1873;
    }
if (index == 92) {
     return 1821;
    }
if (index == 93) {
     return 1890;
    }
if (index == 94) {
     return 1905;
    }
if (index == 95) {
     return 1721;
    }
if (index == 96) {
     return 1988;
    }
if (index == 97) {
     return 1876;
    }
if (index == 98) {
     return 1923;
    }
if (index == 99) {
     return 1873;
    }
if (index == 100) {
     return 1862;
    }
if (index == 101) {
     return 1887;
    }
if (index == 102) {
     return 1684;
    }
if (index == 103) {
     return 1925;
    }
if (index == 104) {
     return 1883;
    }
if (index == 105) {
     return 1928;
    }
if (index == 106) {
     return 1857;
    }
if (index == 107) {
     return 1920;
    }
if (index == 108) {
     return 1008;
    }
if (index == 109) {
     return 1944;
    }
if (index == 110) {
     return 1811;
    }
if (index == 111) {
     return 1996;
    }
if (index == 112) {
     return 1952;
    }
if (index == 113) {
     return 1914;
    }
if (index == 114) {
     return 1921;
    }
if (index == 115) {
     return 1939;
    }
if (index == 116) {
     return 1869;
    }
if (index == 117) {
     return 1950;
    }
if (index == 118) {
     return 1876;
    }
if (index == 119) {
     return 1961;
    }
if (index == 120) {
     return 1495;
    }
if (index == 121) {
     return 1954;
    }
if (index == 122) {
     return 1908;
    }
if (index == 123) {
     return 1953;
    }
if (index == 124) {
     return 1844;
    }
if (index == 125) {
     return 1993;
    }
if (index == 126) {
     return 1885;
    }
if (index == 127) {
     return 1999;
    }
if (index == 128) {
     return 1915;
    }
if (index == 129) {
     return 1977;
    }
if (index == 130) {
     return 1901;
    }
if (index == 131) {
     return 1820;
    }
if (index == 132) {
     return 1478;
    }
if (index == 133) {
     return 1820;
    }
if (index == 134) {
     return 1902;
    }
if (index == 135) {
     return 1879;
    }
if (index == 136) {
     return 1855;
    }
if (index == 137) {
     return 1820;
    }
if (index == 138) {
     return 1846;
    }
if (index == 139) {
     return 1862;
    }
if (index == 140) {
     return 1894;
    }
if (index == 141) {
     return 1820;
    }
if (index == 142) {
     return 1904;
    }
if (index == 143) {
     return 1879;
    }
if (index == 144) {
     return 1798;
    }
if (index == 145) {
     return 1884;
    }
if (index == 146) {
     return 1889;
    }
if (index == 147) {
     return 1887;
    }
if (index == 148) {
     return 1878;
    }
if (index == 149) {
     return 1890;
    }
if (index == 150) {
     return 1846;
    }
if (index == 151) {
     return 1950;
    }
if (index == 152) {
     return 1817;
    }
if (index == 153) {
     return 1820;
    }
if (index == 154) {
     return 1832;
    }
if (index == 155) {
     return 1832;
    }
if (index == 156) {
     return 1846;
    }
if (index == 157) {
     return 1820;
    }
if (index > 157) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1662;
    }
if (index == 1) {
     return 1626;
    }
if (index == 2) {
     return 1551;
    }
if (index == 3) {
     return 1626;
    }
if (index == 4) {
     return 1551;
    }
if (index == 5) {
     return 1626;
    }
if (index == 6) {
     return 1551;
    }
if (index == 7) {
     return 1661;
    }
if (index == 8) {
     return 1568;
    }
if (index == 9) {
     return 1646;
    }
if (index == 10) {
     return 1551;
    }
if (index == 11) {
     return 1626;
    }
if (index == 12) {
     return 1551;
    }
if (index == 13) {
     return 1641;
    }
if (index == 14) {
     return 1551;
    }
if (index == 15) {
     return 1600;
    }
if (index == 16) {
     return 1551;
    }
if (index == 17) {
     return 1600;
    }
if (index == 18) {
     return 1551;
    }
if (index == 19) {
     return 1600;
    }
if (index == 20) {
     return 1516;
    }
if (index == 21) {
     return 1600;
    }
if (index == 22) {
     return 1566;
    }
if (index == 23) {
     return 1600;
    }
if (index == 24) {
     return 1570;
    }
if (index == 25) {
     return 1600;
    }
if (index == 26) {
     return 1570;
    }
if (index == 27) {
     return 1609;
    }
if (index == 28) {
     return 1527;
    }
if (index == 29) {
     return 1600;
    }
if (index == 30) {
     return 1572;
    }
if (index == 31) {
     return 1609;
    }
if (index == 32) {
     return 1574;
    }
if (index == 33) {
     return 1612;
    }
if (index == 34) {
     return 1567;
    }
if (index == 35) {
     return 1615;
    }
if (index == 36) {
     return 1572;
    }
if (index == 37) {
     return 1600;
    }
if (index == 38) {
     return 1562;
    }
if (index == 39) {
     return 1612;
    }
if (index == 40) {
     return 1714;
    }
if (index == 41) {
     return 1600;
    }
if (index == 42) {
     return 1559;
    }
if (index == 43) {
     return 1611;
    }
if (index == 44) {
     return 1562;
    }
if (index == 45) {
     return 1611;
    }
if (index == 46) {
     return 1559;
    }
if (index == 47) {
     return 1612;
    }
if (index == 48) {
     return 1568;
    }
if (index == 49) {
     return 1600;
    }
if (index == 50) {
     return 1559;
    }
if (index == 51) {
     return 1784;
    }
if (index == 52) {
     return 1743;
    }
if (index == 53) {
     return 1618;
    }
if (index == 54) {
     return 1551;
    }
if (index == 55) {
     return 1600;
    }
if (index == 56) {
     return 1551;
    }
if (index == 57) {
     return 1600;
    }
if (index == 58) {
     return 1561;
    }
if (index == 59) {
     return 1600;
    }
if (index == 60) {
     return 1569;
    }
if (index == 61) {
     return 1592;
    }
if (index == 62) {
     return 1528;
    }
if (index == 63) {
     return 1409;
    }
if (index == 64) {
     return 1568;
    }
if (index == 65) {
     return 1616;
    }
if (index == 66) {
     return 1551;
    }
if (index == 67) {
     return 1619;
    }
if (index == 68) {
     return 1565;
    }
if (index == 69) {
     return 1619;
    }
if (index == 70) {
     return 1461;
    }
if (index == 71) {
     return 1619;
    }
if (index == 72) {
     return 1565;
    }
if (index == 73) {
     return 1622;
    }
if (index == 74) {
     return 1551;
    }
if (index == 75) {
     return 1622;
    }
if (index == 76) {
     return 1574;
    }
if (index == 77) {
     return 1621;
    }
if (index == 78) {
     return 1593;
    }
if (index == 79) {
     return 1600;
    }
if (index == 80) {
     return 1597;
    }
if (index == 81) {
     return 1600;
    }
if (index == 82) {
     return 1589;
    }
if (index == 83) {
     return 1633;
    }
if (index == 84) {
     return 1599;
    }
if (index == 85) {
     return 1576;
    }
if (index == 86) {
     return 1592;
    }
if (index == 87) {
     return 1624;
    }
if (index == 88) {
     return 1501;
    }
if (index == 89) {
     return 1637;
    }
if (index == 90) {
     return 1601;
    }
if (index == 91) {
     return 1615;
    }
if (index == 92) {
     return 1601;
    }
if (index == 93) {
     return 1619;
    }
if (index == 94) {
     return 1587;
    }
if (index == 95) {
     return 1576;
    }
if (index == 96) {
     return 1610;
    }
if (index == 97) {
     return 1616;
    }
if (index == 98) {
     return 1592;
    }
if (index == 99) {
     return 1615;
    }
if (index == 100) {
     return 1603;
    }
if (index == 101) {
     return 1619;
    }
if (index == 102) {
     return 1516;
    }
if (index == 103) {
     return 1629;
    }
if (index == 104) {
     return 1601;
    }
if (index == 105) {
     return 1630;
    }
if (index == 106) {
     return 1574;
    }
if (index == 107) {
     return 1628;
    }
if (index == 108) {
     return 1608;
    }
if (index == 109) {
     return 1634;
    }
if (index == 110) {
     return 1536;
    }
if (index == 111) {
     return 1648;
    }
if (index == 112) {
     return 1549;
    }
if (index == 113) {
     return 1626;
    }
if (index == 114) {
     return 1540;
    }
if (index == 115) {
     return 1633;
    }
if (index == 116) {
     return 1540;
    }
if (index == 117) {
     return 1636;
    }
if (index == 118) {
     return 1526;
    }
if (index == 119) {
     return 1639;
    }
if (index == 120) {
     return 1790;
    }
if (index == 121) {
     return 1655;
    }
if (index == 122) {
     return 1545;
    }
if (index == 123) {
     return 1637;
    }
if (index == 124) {
     return 1533;
    }
if (index == 125) {
     return 1647;
    }
if (index == 126) {
     return 1545;
    }
if (index == 127) {
     return 1649;
    }
if (index == 128) {
     return 1550;
    }
if (index == 129) {
     return 1643;
    }
if (index == 130) {
     return 1551;
    }
if (index == 131) {
     return 1600;
    }
if (index == 132) {
     return 1749;
    }
if (index == 133) {
     return 1600;
    }
if (index == 134) {
     return 1543;
    }
if (index == 135) {
     return 1616;
    }
if (index == 136) {
     return 1520;
    }
if (index == 137) {
     return 1600;
    }
if (index == 138) {
     return 1520;
    }
if (index == 139) {
     return 1612;
    }
if (index == 140) {
     return 1534;
    }
if (index == 141) {
     return 1600;
    }
if (index == 142) {
     return 1537;
    }
if (index == 143) {
     return 1616;
    }
if (index == 144) {
     return 1520;
    }
if (index == 145) {
     return 1618;
    }
if (index == 146) {
     return 1533;
    }
if (index == 147) {
     return 1633;
    }
if (index == 148) {
     return 1529;
    }
if (index == 149) {
     return 1619;
    }
if (index == 150) {
     return 1520;
    }
if (index == 151) {
     return 1636;
    }
if (index == 152) {
     return 1520;
    }
if (index == 153) {
     return 1600;
    }
if (index == 154) {
     return 1526;
    }
if (index == 155) {
     return 1526;
    }
if (index == 156) {
     return 1520;
    }
if (index == 157) {
     return 1600;
    }
if (index > 157) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:034d_' + imgStr + '/digitalImage';
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
br.numLeafs = 158;

// Book title and the URL used for the book title link
br.bookTitle= "Les monuments du Cambodge; etudes d'architecture khmere. D'apres les documents recueillis au cours des missions qu'il a dirigees en 1873 et 1882-1883 et de la mission complementaire de M. Faraut en 1874-1875, vol.4";
br.bookAuthor= "Delaporte, Louis";
br.bookPub= "Paris: Editions E. Leroux, 1914";
br.bookKeyword= "Temples--Cambodia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sculpture, Khmer<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Angkor (Extinct city)";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:034d';

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
