//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1205;
    }
if (index == 1) {
     return 1063;
    }
if (index == 2) {
     return 1075;
    }
if (index == 3) {
     return 1102;
    }
if (index == 4) {
     return 1091;
    }
if (index == 5) {
     return 1119;
    }
if (index == 6) {
     return 993;
    }
if (index == 7) {
     return 1022;
    }
if (index == 8) {
     return 994;
    }
if (index == 9) {
     return 1043;
    }
if (index == 10) {
     return 1003;
    }
if (index == 11) {
     return 1012;
    }
if (index == 12) {
     return 1027;
    }
if (index == 13) {
     return 1082;
    }
if (index == 14) {
     return 1039;
    }
if (index == 15) {
     return 1044;
    }
if (index == 16) {
     return 1026;
    }
if (index == 17) {
     return 1029;
    }
if (index == 18) {
     return 1035;
    }
if (index == 19) {
     return 1067;
    }
if (index == 20) {
     return 1067;
    }
if (index == 21) {
     return 1072;
    }
if (index == 22) {
     return 1041;
    }
if (index == 23) {
     return 1070;
    }
if (index == 24) {
     return 1051;
    }
if (index == 25) {
     return 971;
    }
if (index == 26) {
     return 1077;
    }
if (index == 27) {
     return 1173;
    }
if (index == 28) {
     return 750;
    }
if (index == 29) {
     return 1083;
    }
if (index == 30) {
     return 1020;
    }
if (index == 31) {
     return 1054;
    }
if (index == 32) {
     return 1045;
    }
if (index == 33) {
     return 1020;
    }
if (index == 34) {
     return 971;
    }
if (index == 35) {
     return 1501;
    }
if (index == 36) {
     return 1103;
    }
if (index == 37) {
     return 911;
    }
if (index == 38) {
     return 1013;
    }
if (index == 39) {
     return 908;
    }
if (index == 40) {
     return 915;
    }
if (index == 41) {
     return 919;
    }
if (index == 42) {
     return 905;
    }
if (index == 43) {
     return 922;
    }
if (index == 44) {
     return 925;
    }
if (index == 45) {
     return 1504;
    }
if (index == 46) {
     return 1013;
    }
if (index == 47) {
     return 893;
    }
if (index == 48) {
     return 960;
    }
if (index == 49) {
     return 927;
    }
if (index == 50) {
     return 962;
    }
if (index == 51) {
     return 932;
    }
if (index == 52) {
     return 912;
    }
if (index == 53) {
     return 953;
    }
if (index == 54) {
     return 879;
    }
if (index == 55) {
     return 1388;
    }
if (index == 56) {
     return 965;
    }
if (index == 57) {
     return 878;
    }
if (index == 58) {
     return 977;
    }
if (index == 59) {
     return 947;
    }
if (index == 60) {
     return 935;
    }
if (index == 61) {
     return 929;
    }
if (index == 62) {
     return 916;
    }
if (index == 63) {
     return 924;
    }
if (index == 64) {
     return 935;
    }
if (index == 65) {
     return 1365;
    }
if (index == 66) {
     return 906;
    }
if (index == 67) {
     return 942;
    }
if (index == 68) {
     return 965;
    }
if (index == 69) {
     return 928;
    }
if (index == 70) {
     return 955;
    }
if (index == 71) {
     return 986;
    }
if (index == 72) {
     return 938;
    }
if (index == 73) {
     return 971;
    }
if (index == 74) {
     return 962;
    }
if (index == 75) {
     return 1486;
    }
if (index == 76) {
     return 908;
    }
if (index == 77) {
     return 898;
    }
if (index == 78) {
     return 986;
    }
if (index == 79) {
     return 979;
    }
if (index == 80) {
     return 957;
    }
if (index == 81) {
     return 893;
    }
if (index == 82) {
     return 874;
    }
if (index == 83) {
     return 979;
    }
if (index == 84) {
     return 943;
    }
if (index == 85) {
     return 924;
    }
if (index == 86) {
     return 982;
    }
if (index == 87) {
     return 966;
    }
if (index == 88) {
     return 933;
    }
if (index == 89) {
     return 1378;
    }
if (index == 90) {
     return 894;
    }
if (index == 91) {
     return 976;
    }
if (index == 92) {
     return 973;
    }
if (index == 93) {
     return 1366;
    }
if (index == 94) {
     return 1013;
    }
if (index == 95) {
     return 853;
    }
if (index == 96) {
     return 941;
    }
if (index == 97) {
     return 905;
    }
if (index == 98) {
     return 921;
    }
if (index == 99) {
     return 885;
    }
if (index == 100) {
     return 931;
    }
if (index == 101) {
     return 878;
    }
if (index == 102) {
     return 890;
    }
if (index == 103) {
     return 889;
    }
if (index == 104) {
     return 904;
    }
if (index == 105) {
     return 1337;
    }
if (index == 106) {
     return 1084;
    }
if (index == 107) {
     return 890;
    }
if (index == 108) {
     return 927;
    }
if (index == 109) {
     return 947;
    }
if (index == 110) {
     return 909;
    }
if (index == 111) {
     return 927;
    }
if (index == 112) {
     return 904;
    }
if (index == 113) {
     return 880;
    }
if (index == 114) {
     return 901;
    }
if (index == 115) {
     return 948;
    }
if (index == 116) {
     return 928;
    }
if (index == 117) {
     return 920;
    }
if (index == 118) {
     return 943;
    }
if (index == 119) {
     return 1435;
    }
if (index == 120) {
     return 1031;
    }
if (index == 121) {
     return 930;
    }
if (index == 122) {
     return 921;
    }
if (index == 123) {
     return 930;
    }
if (index == 124) {
     return 896;
    }
if (index == 125) {
     return 893;
    }
if (index == 126) {
     return 916;
    }
if (index == 127) {
     return 922;
    }
if (index == 128) {
     return 843;
    }
if (index == 129) {
     return 1048;
    }
if (index == 130) {
     return 1368;
    }
if (index == 131) {
     return 852;
    }
if (index == 132) {
     return 920;
    }
if (index == 133) {
     return 893;
    }
if (index == 134) {
     return 914;
    }
if (index == 135) {
     return 894;
    }
if (index == 136) {
     return 914;
    }
if (index == 137) {
     return 948;
    }
if (index == 138) {
     return 899;
    }
if (index == 139) {
     return 888;
    }
if (index == 140) {
     return 881;
    }
if (index == 141) {
     return 914;
    }
if (index == 142) {
     return 881;
    }
if (index == 143) {
     return 950;
    }
if (index == 144) {
     return 891;
    }
if (index == 145) {
     return 892;
    }
if (index == 146) {
     return 891;
    }
if (index == 147) {
     return 1402;
    }
if (index == 148) {
     return 1031;
    }
if (index == 149) {
     return 853;
    }
if (index == 150) {
     return 838;
    }
if (index == 151) {
     return 875;
    }
if (index == 152) {
     return 917;
    }
if (index == 153) {
     return 863;
    }
if (index == 154) {
     return 906;
    }
if (index == 155) {
     return 897;
    }
if (index == 156) {
     return 862;
    }
if (index == 157) {
     return 1220;
    }
if (index == 158) {
     return 982;
    }
if (index == 159) {
     return 847;
    }
if (index == 160) {
     return 896;
    }
if (index == 161) {
     return 851;
    }
if (index == 162) {
     return 876;
    }
if (index == 163) {
     return 1331;
    }
if (index == 164) {
     return 1031;
    }
if (index == 165) {
     return 869;
    }
if (index == 166) {
     return 895;
    }
if (index == 167) {
     return 901;
    }
if (index == 168) {
     return 928;
    }
if (index == 169) {
     return 844;
    }
if (index == 170) {
     return 873;
    }
if (index == 171) {
     return 849;
    }
if (index == 172) {
     return 898;
    }
if (index == 173) {
     return 876;
    }
if (index == 174) {
     return 921;
    }
if (index == 175) {
     return 860;
    }
if (index == 176) {
     return 903;
    }
if (index == 177) {
     return 750;
    }
if (index > 177) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1630;
    }
if (index == 1) {
     return 1511;
    }
if (index == 2) {
     return 1511;
    }
if (index == 3) {
     return 1530;
    }
if (index == 4) {
     return 1536;
    }
if (index == 5) {
     return 1585;
    }
if (index == 6) {
     return 1494;
    }
if (index == 7) {
     return 1548;
    }
if (index == 8) {
     return 1478;
    }
if (index == 9) {
     return 1550;
    }
if (index == 10) {
     return 1514;
    }
if (index == 11) {
     return 1564;
    }
if (index == 12) {
     return 1514;
    }
if (index == 13) {
     return 1517;
    }
if (index == 14) {
     return 1520;
    }
if (index == 15) {
     return 1528;
    }
if (index == 16) {
     return 1473;
    }
if (index == 17) {
     return 1533;
    }
if (index == 18) {
     return 1549;
    }
if (index == 19) {
     return 1512;
    }
if (index == 20) {
     return 1589;
    }
if (index == 21) {
     return 1528;
    }
if (index == 22) {
     return 1591;
    }
if (index == 23) {
     return 1550;
    }
if (index == 24) {
     return 1530;
    }
if (index == 25) {
     return 1513;
    }
if (index == 26) {
     return 1515;
    }
if (index == 27) {
     return 1513;
    }
if (index == 28) {
     return 1050;
    }
if (index == 29) {
     return 1537;
    }
if (index == 30) {
     return 1513;
    }
if (index == 31) {
     return 1541;
    }
if (index == 32) {
     return 1531;
    }
if (index == 33) {
     return 1550;
    }
if (index == 34) {
     return 1513;
    }
if (index == 35) {
     return 1013;
    }
if (index == 36) {
     return 1551;
    }
if (index == 37) {
     return 1501;
    }
if (index == 38) {
     return 1522;
    }
if (index == 39) {
     return 1512;
    }
if (index == 40) {
     return 1500;
    }
if (index == 41) {
     return 1500;
    }
if (index == 42) {
     return 1508;
    }
if (index == 43) {
     return 1529;
    }
if (index == 44) {
     return 1518;
    }
if (index == 45) {
     return 1075;
    }
if (index == 46) {
     return 1522;
    }
if (index == 47) {
     return 1487;
    }
if (index == 48) {
     return 1495;
    }
if (index == 49) {
     return 1529;
    }
if (index == 50) {
     return 1522;
    }
if (index == 51) {
     return 1531;
    }
if (index == 52) {
     return 1501;
    }
if (index == 53) {
     return 1539;
    }
if (index == 54) {
     return 1486;
    }
if (index == 55) {
     return 1060;
    }
if (index == 56) {
     return 1483;
    }
if (index == 57) {
     return 1492;
    }
if (index == 58) {
     return 1510;
    }
if (index == 59) {
     return 1529;
    }
if (index == 60) {
     return 1505;
    }
if (index == 61) {
     return 1511;
    }
if (index == 62) {
     return 1499;
    }
if (index == 63) {
     return 1527;
    }
if (index == 64) {
     return 1518;
    }
if (index == 65) {
     return 1016;
    }
if (index == 66) {
     return 1427;
    }
if (index == 67) {
     return 1529;
    }
if (index == 68) {
     return 1506;
    }
if (index == 69) {
     return 1539;
    }
if (index == 70) {
     return 1510;
    }
if (index == 71) {
     return 1524;
    }
if (index == 72) {
     return 1501;
    }
if (index == 73) {
     return 1514;
    }
if (index == 74) {
     return 1508;
    }
if (index == 75) {
     return 1084;
    }
if (index == 76) {
     return 1412;
    }
if (index == 77) {
     return 1489;
    }
if (index == 78) {
     return 1502;
    }
if (index == 79) {
     return 1507;
    }
if (index == 80) {
     return 1493;
    }
if (index == 81) {
     return 1497;
    }
if (index == 82) {
     return 1479;
    }
if (index == 83) {
     return 1504;
    }
if (index == 84) {
     return 1456;
    }
if (index == 85) {
     return 1495;
    }
if (index == 86) {
     return 1503;
    }
if (index == 87) {
     return 1514;
    }
if (index == 88) {
     return 1483;
    }
if (index == 89) {
     return 1081;
    }
if (index == 90) {
     return 1429;
    }
if (index == 91) {
     return 1524;
    }
if (index == 92) {
     return 1465;
    }
if (index == 93) {
     return 1067;
    }
if (index == 94) {
     return 1383;
    }
if (index == 95) {
     return 1440;
    }
if (index == 96) {
     return 1458;
    }
if (index == 97) {
     return 1475;
    }
if (index == 98) {
     return 1445;
    }
if (index == 99) {
     return 1470;
    }
if (index == 100) {
     return 1458;
    }
if (index == 101) {
     return 1486;
    }
if (index == 102) {
     return 1443;
    }
if (index == 103) {
     return 1480;
    }
if (index == 104) {
     return 1453;
    }
if (index == 105) {
     return 911;
    }
if (index == 106) {
     return 1478;
    }
if (index == 107) {
     return 1477;
    }
if (index == 108) {
     return 1458;
    }
if (index == 109) {
     return 1471;
    }
if (index == 110) {
     return 1454;
    }
if (index == 111) {
     return 1474;
    }
if (index == 112) {
     return 1476;
    }
if (index == 113) {
     return 1483;
    }
if (index == 114) {
     return 1526;
    }
if (index == 115) {
     return 1543;
    }
if (index == 116) {
     return 1528;
    }
if (index == 117) {
     return 1514;
    }
if (index == 118) {
     return 1518;
    }
if (index == 119) {
     return 1020;
    }
if (index == 120) {
     return 1530;
    }
if (index == 121) {
     return 1502;
    }
if (index == 122) {
     return 1504;
    }
if (index == 123) {
     return 1505;
    }
if (index == 124) {
     return 1530;
    }
if (index == 125) {
     return 1488;
    }
if (index == 126) {
     return 1502;
    }
if (index == 127) {
     return 1536;
    }
if (index == 128) {
     return 1474;
    }
if (index == 129) {
     return 1531;
    }
if (index == 130) {
     return 985;
    }
if (index == 131) {
     return 1472;
    }
if (index == 132) {
     return 1508;
    }
if (index == 133) {
     return 1529;
    }
if (index == 134) {
     return 1489;
    }
if (index == 135) {
     return 1507;
    }
if (index == 136) {
     return 1507;
    }
if (index == 137) {
     return 1502;
    }
if (index == 138) {
     return 1505;
    }
if (index == 139) {
     return 1500;
    }
if (index == 140) {
     return 1501;
    }
if (index == 141) {
     return 1525;
    }
if (index == 142) {
     return 1530;
    }
if (index == 143) {
     return 1531;
    }
if (index == 144) {
     return 1530;
    }
if (index == 145) {
     return 1503;
    }
if (index == 146) {
     return 1504;
    }
if (index == 147) {
     return 1001;
    }
if (index == 148) {
     return 1530;
    }
if (index == 149) {
     return 1488;
    }
if (index == 150) {
     return 1486;
    }
if (index == 151) {
     return 1489;
    }
if (index == 152) {
     return 1561;
    }
if (index == 153) {
     return 1477;
    }
if (index == 154) {
     return 1572;
    }
if (index == 155) {
     return 1545;
    }
if (index == 156) {
     return 1482;
    }
if (index == 157) {
     return 969;
    }
if (index == 158) {
     return 1477;
    }
if (index == 159) {
     return 1487;
    }
if (index == 160) {
     return 1527;
    }
if (index == 161) {
     return 1498;
    }
if (index == 162) {
     return 1531;
    }
if (index == 163) {
     return 1027;
    }
if (index == 164) {
     return 1531;
    }
if (index == 165) {
     return 1487;
    }
if (index == 166) {
     return 1497;
    }
if (index == 167) {
     return 1502;
    }
if (index == 168) {
     return 1522;
    }
if (index == 169) {
     return 1531;
    }
if (index == 170) {
     return 1498;
    }
if (index == 171) {
     return 1529;
    }
if (index == 172) {
     return 1512;
    }
if (index == 173) {
     return 1493;
    }
if (index == 174) {
     return 1509;
    }
if (index == 175) {
     return 1478;
    }
if (index == 176) {
     return 1510;
    }
if (index == 177) {
     return 1050;
    }
if (index > 177) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:277_' + imgStr + '/digitalImage';
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
br.numLeafs = 178;

// Book title and the URL used for the book title link
br.bookTitle= "The new America and the Far East; a picturesque and historic description of these lands and peoples, by G. Waldo Browne ... with a general introduction by Edward S. Ellis ... with the following special articles: Hawaii, by the Honorable Henry Cabot Lodge; The Philippines, by Major-General Joseph Wheeler; Japan, by His Excellency Kogoro Takahira; China, by the Honorable John D. Long; Cuba, by General Leonard Wood; Porto Rico, by the Honorable Charles H. Allen. Illustrated by about 1,200 photogravures, colored plates, engravings and maps.";
br.bookAuthor= "Browne, George Waldo";
br.bookPub= "Boston: Marshall Jones company, 1907";
br.bookKeyword= "Hawaii--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hawaii--History<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Philippines--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Philippines--History<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japan--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japan--History<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;China--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;China--History<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuba--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuba--History<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Puerto Rico--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Puerto Rico--History";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:277';

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
