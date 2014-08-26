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
     return 971;
    }
if (index == 2) {
     return 919;
    }
if (index == 3) {
     return 1479;
    }
if (index == 4) {
     return 979;
    }
if (index == 5) {
     return 996;
    }
if (index == 6) {
     return 979;
    }
if (index == 7) {
     return 996;
    }
if (index == 8) {
     return 979;
    }
if (index == 9) {
     return 968;
    }
if (index == 10) {
     return 981;
    }
if (index == 11) {
     return 927;
    }
if (index == 12) {
     return 898;
    }
if (index == 13) {
     return 937;
    }
if (index == 14) {
     return 914;
    }
if (index == 15) {
     return 904;
    }
if (index == 16) {
     return 905;
    }
if (index == 17) {
     return 896;
    }
if (index == 18) {
     return 896;
    }
if (index == 19) {
     return 913;
    }
if (index == 20) {
     return 880;
    }
if (index == 21) {
     return 891;
    }
if (index == 22) {
     return 850;
    }
if (index == 23) {
     return 897;
    }
if (index == 24) {
     return 858;
    }
if (index == 25) {
     return 865;
    }
if (index == 26) {
     return 1471;
    }
if (index == 27) {
     return 872;
    }
if (index == 28) {
     return 886;
    }
if (index == 29) {
     return 891;
    }
if (index == 30) {
     return 1468;
    }
if (index == 31) {
     return 869;
    }
if (index == 32) {
     return 888;
    }
if (index == 33) {
     return 901;
    }
if (index == 34) {
     return 867;
    }
if (index == 35) {
     return 1471;
    }
if (index == 36) {
     return 892;
    }
if (index == 37) {
     return 890;
    }
if (index == 38) {
     return 887;
    }
if (index == 39) {
     return 910;
    }
if (index == 40) {
     return 891;
    }
if (index == 41) {
     return 901;
    }
if (index == 42) {
     return 913;
    }
if (index == 43) {
     return 919;
    }
if (index == 44) {
     return 940;
    }
if (index == 45) {
     return 927;
    }
if (index == 46) {
     return 888;
    }
if (index == 47) {
     return 917;
    }
if (index == 48) {
     return 883;
    }
if (index == 49) {
     return 895;
    }
if (index == 50) {
     return 869;
    }
if (index == 51) {
     return 937;
    }
if (index == 52) {
     return 889;
    }
if (index == 53) {
     return 902;
    }
if (index == 54) {
     return 886;
    }
if (index == 55) {
     return 919;
    }
if (index == 56) {
     return 884;
    }
if (index == 57) {
     return 919;
    }
if (index == 58) {
     return 917;
    }
if (index == 59) {
     return 875;
    }
if (index == 60) {
     return 1468;
    }
if (index == 61) {
     return 915;
    }
if (index == 62) {
     return 892;
    }
if (index == 63) {
     return 911;
    }
if (index == 64) {
     return 901;
    }
if (index == 65) {
     return 905;
    }
if (index == 66) {
     return 902;
    }
if (index == 67) {
     return 909;
    }
if (index == 68) {
     return 874;
    }
if (index == 69) {
     return 890;
    }
if (index == 70) {
     return 1468;
    }
if (index == 71) {
     return 946;
    }
if (index == 72) {
     return 877;
    }
if (index == 73) {
     return 908;
    }
if (index == 74) {
     return 879;
    }
if (index == 75) {
     return 901;
    }
if (index == 76) {
     return 884;
    }
if (index == 77) {
     return 889;
    }
if (index == 78) {
     return 879;
    }
if (index == 79) {
     return 914;
    }
if (index == 80) {
     return 915;
    }
if (index == 81) {
     return 1471;
    }
if (index == 82) {
     return 906;
    }
if (index == 83) {
     return 899;
    }
if (index == 84) {
     return 874;
    }
if (index == 85) {
     return 891;
    }
if (index == 86) {
     return 898;
    }
if (index == 87) {
     return 1471;
    }
if (index == 88) {
     return 870;
    }
if (index == 89) {
     return 901;
    }
if (index == 90) {
     return 903;
    }
if (index == 91) {
     return 969;
    }
if (index == 92) {
     return 886;
    }
if (index == 93) {
     return 905;
    }
if (index == 94) {
     return 882;
    }
if (index == 95) {
     return 867;
    }
if (index == 96) {
     return 872;
    }
if (index == 97) {
     return 905;
    }
if (index == 98) {
     return 889;
    }
if (index == 99) {
     return 929;
    }
if (index == 100) {
     return 884;
    }
if (index == 101) {
     return 889;
    }
if (index == 102) {
     return 1002;
    }
if (index == 103) {
     return 974;
    }
if (index == 104) {
     return 891;
    }
if (index == 105) {
     return 922;
    }
if (index == 106) {
     return 867;
    }
if (index == 107) {
     return 884;
    }
if (index == 108) {
     return 871;
    }
if (index == 109) {
     return 1454;
    }
if (index == 110) {
     return 899;
    }
if (index == 111) {
     return 886;
    }
if (index == 112) {
     return 885;
    }
if (index == 113) {
     return 942;
    }
if (index == 114) {
     return 887;
    }
if (index == 115) {
     return 892;
    }
if (index == 116) {
     return 1439;
    }
if (index == 117) {
     return 895;
    }
if (index == 118) {
     return 892;
    }
if (index == 119) {
     return 894;
    }
if (index == 120) {
     return 902;
    }
if (index == 121) {
     return 1451;
    }
if (index == 122) {
     return 871;
    }
if (index == 123) {
     return 891;
    }
if (index == 124) {
     return 891;
    }
if (index == 125) {
     return 899;
    }
if (index == 126) {
     return 898;
    }
if (index == 127) {
     return 918;
    }
if (index == 128) {
     return 883;
    }
if (index == 129) {
     return 904;
    }
if (index == 130) {
     return 892;
    }
if (index == 131) {
     return 880;
    }
if (index == 132) {
     return 1448;
    }
if (index == 133) {
     return 925;
    }
if (index == 134) {
     return 862;
    }
if (index == 135) {
     return 903;
    }
if (index == 136) {
     return 872;
    }
if (index == 137) {
     return 901;
    }
if (index == 138) {
     return 882;
    }
if (index == 139) {
     return 896;
    }
if (index == 140) {
     return 906;
    }
if (index == 141) {
     return 1454;
    }
if (index == 142) {
     return 898;
    }
if (index == 143) {
     return 872;
    }
if (index == 144) {
     return 1453;
    }
if (index == 145) {
     return 894;
    }
if (index == 146) {
     return 1439;
    }
if (index == 147) {
     return 915;
    }
if (index == 148) {
     return 965;
    }
if (index == 149) {
     return 892;
    }
if (index == 150) {
     return 925;
    }
if (index == 151) {
     return 903;
    }
if (index == 152) {
     return 902;
    }
if (index == 153) {
     return 893;
    }
if (index == 154) {
     return 879;
    }
if (index == 155) {
     return 902;
    }
if (index == 156) {
     return 890;
    }
if (index == 157) {
     return 884;
    }
if (index == 158) {
     return 926;
    }
if (index == 159) {
     return 888;
    }
if (index == 160) {
     return 903;
    }
if (index == 161) {
     return 904;
    }
if (index == 162) {
     return 885;
    }
if (index == 163) {
     return 899;
    }
if (index == 164) {
     return 898;
    }
if (index == 165) {
     return 908;
    }
if (index == 166) {
     return 892;
    }
if (index == 167) {
     return 890;
    }
if (index == 168) {
     return 911;
    }
if (index == 169) {
     return 887;
    }
if (index == 170) {
     return 891;
    }
if (index == 171) {
     return 901;
    }
if (index == 172) {
     return 893;
    }
if (index == 173) {
     return 898;
    }
if (index == 174) {
     return 902;
    }
if (index == 175) {
     return 906;
    }
if (index == 176) {
     return 888;
    }
if (index == 177) {
     return 871;
    }
if (index == 178) {
     return 885;
    }
if (index == 179) {
     return 893;
    }
if (index == 180) {
     return 904;
    }
if (index == 181) {
     return 970;
    }
if (index == 182) {
     return 893;
    }
if (index == 183) {
     return 877;
    }
if (index == 184) {
     return 1450;
    }
if (index == 185) {
     return 951;
    }
if (index == 186) {
     return 878;
    }
if (index == 187) {
     return 898;
    }
if (index == 188) {
     return 894;
    }
if (index == 189) {
     return 878;
    }
if (index == 190) {
     return 1372;
    }
if (index == 191) {
     return 979;
    }
if (index == 192) {
     return 886;
    }
if (index == 193) {
     return 920;
    }
if (index == 194) {
     return 900;
    }
if (index == 195) {
     return 918;
    }
if (index == 196) {
     return 905;
    }
if (index == 197) {
     return 884;
    }
if (index == 198) {
     return 1434;
    }
if (index == 199) {
     return 941;
    }
if (index == 200) {
     return 873;
    }
if (index == 201) {
     return 923;
    }
if (index == 202) {
     return 892;
    }
if (index == 203) {
     return 1003;
    }
if (index == 204) {
     return 959;
    }
if (index == 205) {
     return 1086;
    }
if (index > 205) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1563;
    }
if (index == 1) {
     return 1506;
    }
if (index == 2) {
     return 1515;
    }
if (index == 3) {
     return 991;
    }
if (index == 4) {
     return 1488;
    }
if (index == 5) {
     return 1479;
    }
if (index == 6) {
     return 1488;
    }
if (index == 7) {
     return 1479;
    }
if (index == 8) {
     return 1488;
    }
if (index == 9) {
     return 1457;
    }
if (index == 10) {
     return 1478;
    }
if (index == 11) {
     return 1442;
    }
if (index == 12) {
     return 1461;
    }
if (index == 13) {
     return 1487;
    }
if (index == 14) {
     return 1464;
    }
if (index == 15) {
     return 1485;
    }
if (index == 16) {
     return 1487;
    }
if (index == 17) {
     return 1480;
    }
if (index == 18) {
     return 1478;
    }
if (index == 19) {
     return 1495;
    }
if (index == 20) {
     return 1476;
    }
if (index == 21) {
     return 1504;
    }
if (index == 22) {
     return 1476;
    }
if (index == 23) {
     return 1485;
    }
if (index == 24) {
     return 1480;
    }
if (index == 25) {
     return 1460;
    }
if (index == 26) {
     return 997;
    }
if (index == 27) {
     return 1471;
    }
if (index == 28) {
     return 1468;
    }
if (index == 29) {
     return 1470;
    }
if (index == 30) {
     return 997;
    }
if (index == 31) {
     return 1454;
    }
if (index == 32) {
     return 1472;
    }
if (index == 33) {
     return 1471;
    }
if (index == 34) {
     return 1449;
    }
if (index == 35) {
     return 1010;
    }
if (index == 36) {
     return 1482;
    }
if (index == 37) {
     return 1475;
    }
if (index == 38) {
     return 1479;
    }
if (index == 39) {
     return 1488;
    }
if (index == 40) {
     return 1483;
    }
if (index == 41) {
     return 1469;
    }
if (index == 42) {
     return 1481;
    }
if (index == 43) {
     return 1481;
    }
if (index == 44) {
     return 1454;
    }
if (index == 45) {
     return 1452;
    }
if (index == 46) {
     return 1464;
    }
if (index == 47) {
     return 1480;
    }
if (index == 48) {
     return 1469;
    }
if (index == 49) {
     return 1495;
    }
if (index == 50) {
     return 1475;
    }
if (index == 51) {
     return 1488;
    }
if (index == 52) {
     return 1467;
    }
if (index == 53) {
     return 1482;
    }
if (index == 54) {
     return 1471;
    }
if (index == 55) {
     return 1478;
    }
if (index == 56) {
     return 1479;
    }
if (index == 57) {
     return 1472;
    }
if (index == 58) {
     return 1487;
    }
if (index == 59) {
     return 1475;
    }
if (index == 60) {
     return 1006;
    }
if (index == 61) {
     return 1457;
    }
if (index == 62) {
     return 1481;
    }
if (index == 63) {
     return 1478;
    }
if (index == 64) {
     return 1469;
    }
if (index == 65) {
     return 1471;
    }
if (index == 66) {
     return 1467;
    }
if (index == 67) {
     return 1479;
    }
if (index == 68) {
     return 1473;
    }
if (index == 69) {
     return 1479;
    }
if (index == 70) {
     return 1012;
    }
if (index == 71) {
     return 1471;
    }
if (index == 72) {
     return 1471;
    }
if (index == 73) {
     return 1485;
    }
if (index == 74) {
     return 1468;
    }
if (index == 75) {
     return 1479;
    }
if (index == 76) {
     return 1468;
    }
if (index == 77) {
     return 1482;
    }
if (index == 78) {
     return 1471;
    }
if (index == 79) {
     return 1478;
    }
if (index == 80) {
     return 1471;
    }
if (index == 81) {
     return 991;
    }
if (index == 82) {
     return 1480;
    }
if (index == 83) {
     return 1477;
    }
if (index == 84) {
     return 1466;
    }
if (index == 85) {
     return 1468;
    }
if (index == 86) {
     return 1471;
    }
if (index == 87) {
     return 1014;
    }
if (index == 88) {
     return 1466;
    }
if (index == 89) {
     return 1471;
    }
if (index == 90) {
     return 1468;
    }
if (index == 91) {
     return 1468;
    }
if (index == 92) {
     return 1471;
    }
if (index == 93) {
     return 1471;
    }
if (index == 94) {
     return 1471;
    }
if (index == 95) {
     return 1466;
    }
if (index == 96) {
     return 1471;
    }
if (index == 97) {
     return 1468;
    }
if (index == 98) {
     return 1471;
    }
if (index == 99) {
     return 1471;
    }
if (index == 100) {
     return 1468;
    }
if (index == 101) {
     return 1469;
    }
if (index == 102) {
     return 1471;
    }
if (index == 103) {
     return 1447;
    }
if (index == 104) {
     return 1471;
    }
if (index == 105) {
     return 1461;
    }
if (index == 106) {
     return 1464;
    }
if (index == 107) {
     return 1462;
    }
if (index == 108) {
     return 1453;
    }
if (index == 109) {
     return 996;
    }
if (index == 110) {
     return 1488;
    }
if (index == 111) {
     return 1449;
    }
if (index == 112) {
     return 1453;
    }
if (index == 113) {
     return 1454;
    }
if (index == 114) {
     return 1485;
    }
if (index == 115) {
     return 1464;
    }
if (index == 116) {
     return 979;
    }
if (index == 117) {
     return 1437;
    }
if (index == 118) {
     return 1436;
    }
if (index == 119) {
     return 1455;
    }
if (index == 120) {
     return 1425;
    }
if (index == 121) {
     return 1004;
    }
if (index == 122) {
     return 1453;
    }
if (index == 123) {
     return 1458;
    }
if (index == 124) {
     return 1462;
    }
if (index == 125) {
     return 1451;
    }
if (index == 126) {
     return 1468;
    }
if (index == 127) {
     return 1457;
    }
if (index == 128) {
     return 1458;
    }
if (index == 129) {
     return 1459;
    }
if (index == 130) {
     return 1462;
    }
if (index == 131) {
     return 1454;
    }
if (index == 132) {
     return 942;
    }
if (index == 133) {
     return 1447;
    }
if (index == 134) {
     return 1453;
    }
if (index == 135) {
     return 1474;
    }
if (index == 136) {
     return 1464;
    }
if (index == 137) {
     return 1471;
    }
if (index == 138) {
     return 1455;
    }
if (index == 139) {
     return 1460;
    }
if (index == 140) {
     return 1436;
    }
if (index == 141) {
     return 1023;
    }
if (index == 142) {
     return 1460;
    }
if (index == 143) {
     return 1454;
    }
if (index == 144) {
     return 991;
    }
if (index == 145) {
     return 1449;
    }
if (index == 146) {
     return 1000;
    }
if (index == 147) {
     return 1454;
    }
if (index == 148) {
     return 1453;
    }
if (index == 149) {
     return 1449;
    }
if (index == 150) {
     return 1466;
    }
if (index == 151) {
     return 1452;
    }
if (index == 152) {
     return 1453;
    }
if (index == 153) {
     return 1465;
    }
if (index == 154) {
     return 1458;
    }
if (index == 155) {
     return 1472;
    }
if (index == 156) {
     return 1462;
    }
if (index == 157) {
     return 1449;
    }
if (index == 158) {
     return 1470;
    }
if (index == 159) {
     return 1450;
    }
if (index == 160) {
     return 1450;
    }
if (index == 161) {
     return 1447;
    }
if (index == 162) {
     return 1456;
    }
if (index == 163) {
     return 1447;
    }
if (index == 164) {
     return 1452;
    }
if (index == 165) {
     return 1446;
    }
if (index == 166) {
     return 1444;
    }
if (index == 167) {
     return 1442;
    }
if (index == 168) {
     return 1436;
    }
if (index == 169) {
     return 1464;
    }
if (index == 170) {
     return 1455;
    }
if (index == 171) {
     return 1471;
    }
if (index == 172) {
     return 1456;
    }
if (index == 173) {
     return 1461;
    }
if (index == 174) {
     return 1453;
    }
if (index == 175) {
     return 1451;
    }
if (index == 176) {
     return 1453;
    }
if (index == 177) {
     return 1451;
    }
if (index == 178) {
     return 1453;
    }
if (index == 179) {
     return 1457;
    }
if (index == 180) {
     return 1446;
    }
if (index == 181) {
     return 1498;
    }
if (index == 182) {
     return 1453;
    }
if (index == 183) {
     return 1501;
    }
if (index == 184) {
     return 995;
    }
if (index == 185) {
     return 1478;
    }
if (index == 186) {
     return 1453;
    }
if (index == 187) {
     return 1502;
    }
if (index == 188) {
     return 1455;
    }
if (index == 189) {
     return 1498;
    }
if (index == 190) {
     return 1007;
    }
if (index == 191) {
     return 1469;
    }
if (index == 192) {
     return 1445;
    }
if (index == 193) {
     return 1485;
    }
if (index == 194) {
     return 1443;
    }
if (index == 195) {
     return 1488;
    }
if (index == 196) {
     return 1448;
    }
if (index == 197) {
     return 1494;
    }
if (index == 198) {
     return 991;
    }
if (index == 199) {
     return 1469;
    }
if (index == 200) {
     return 1436;
    }
if (index == 201) {
     return 1479;
    }
if (index == 202) {
     return 1439;
    }
if (index == 203) {
     return 1471;
    }
if (index == 204) {
     return 1427;
    }
if (index == 205) {
     return 1571;
    }
if (index > 205) {
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
    var url = '/fedora/get/seapage:168_' + imgStr + '/digitalImage';
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
br.numLeafs = 206;

// Book title and the URL used for the book title link
br.bookTitle= "De Zieke reiziger, or, Rambles in Java and the Straits : in 1852";
br.bookAuthor= "Edwards, William";
br.bookPub= "London: Simpkin, Marshall and Co, 1853";
br.bookKeyword= "Java (Indonesia)--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Straits Settlements--Description and travel";
br.bookUrl  = '/catalog/sea:168';

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
