//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 965;
    }
if (index == 1) {
     return 899;
    }
if (index == 2) {
     return 855;
    }
if (index == 3) {
     return 794;
    }
if (index == 4) {
     return 855;
    }
if (index == 5) {
     return 847;
    }
if (index == 6) {
     return 819;
    }
if (index == 7) {
     return 1359;
    }
if (index == 8) {
     return 831;
    }
if (index == 9) {
     return 835;
    }
if (index == 10) {
     return 881;
    }
if (index == 11) {
     return 899;
    }
if (index == 12) {
     return 896;
    }
if (index == 13) {
     return 907;
    }
if (index == 14) {
     return 897;
    }
if (index == 15) {
     return 880;
    }
if (index == 16) {
     return 888;
    }
if (index == 17) {
     return 878;
    }
if (index == 18) {
     return 879;
    }
if (index == 19) {
     return 872;
    }
if (index == 20) {
     return 889;
    }
if (index == 21) {
     return 877;
    }
if (index == 22) {
     return 885;
    }
if (index == 23) {
     return 879;
    }
if (index == 24) {
     return 872;
    }
if (index == 25) {
     return 908;
    }
if (index == 26) {
     return 893;
    }
if (index == 27) {
     return 895;
    }
if (index == 28) {
     return 919;
    }
if (index == 29) {
     return 913;
    }
if (index == 30) {
     return 844;
    }
if (index == 31) {
     return 915;
    }
if (index == 32) {
     return 899;
    }
if (index == 33) {
     return 920;
    }
if (index == 34) {
     return 874;
    }
if (index == 35) {
     return 913;
    }
if (index == 36) {
     return 923;
    }
if (index == 37) {
     return 908;
    }
if (index == 38) {
     return 913;
    }
if (index == 39) {
     return 895;
    }
if (index == 40) {
     return 917;
    }
if (index == 41) {
     return 922;
    }
if (index == 42) {
     return 905;
    }
if (index == 43) {
     return 899;
    }
if (index == 44) {
     return 905;
    }
if (index == 45) {
     return 904;
    }
if (index == 46) {
     return 886;
    }
if (index == 47) {
     return 891;
    }
if (index == 48) {
     return 838;
    }
if (index == 49) {
     return 904;
    }
if (index == 50) {
     return 926;
    }
if (index == 51) {
     return 910;
    }
if (index == 52) {
     return 915;
    }
if (index == 53) {
     return 905;
    }
if (index == 54) {
     return 860;
    }
if (index == 55) {
     return 844;
    }
if (index == 56) {
     return 898;
    }
if (index == 57) {
     return 908;
    }
if (index == 58) {
     return 892;
    }
if (index == 59) {
     return 911;
    }
if (index == 60) {
     return 931;
    }
if (index == 61) {
     return 853;
    }
if (index == 62) {
     return 912;
    }
if (index == 63) {
     return 899;
    }
if (index == 64) {
     return 831;
    }
if (index == 65) {
     return 905;
    }
if (index == 66) {
     return 921;
    }
if (index == 67) {
     return 927;
    }
if (index == 68) {
     return 928;
    }
if (index == 69) {
     return 929;
    }
if (index == 70) {
     return 934;
    }
if (index == 71) {
     return 830;
    }
if (index == 72) {
     return 898;
    }
if (index == 73) {
     return 909;
    }
if (index == 74) {
     return 953;
    }
if (index == 75) {
     return 916;
    }
if (index == 76) {
     return 937;
    }
if (index == 77) {
     return 904;
    }
if (index == 78) {
     return 927;
    }
if (index == 79) {
     return 890;
    }
if (index == 80) {
     return 900;
    }
if (index == 81) {
     return 849;
    }
if (index == 82) {
     return 900;
    }
if (index == 83) {
     return 913;
    }
if (index == 84) {
     return 904;
    }
if (index == 85) {
     return 886;
    }
if (index == 86) {
     return 846;
    }
if (index == 87) {
     return 890;
    }
if (index == 88) {
     return 895;
    }
if (index == 89) {
     return 916;
    }
if (index == 90) {
     return 909;
    }
if (index == 91) {
     return 839;
    }
if (index == 92) {
     return 915;
    }
if (index == 93) {
     return 917;
    }
if (index == 94) {
     return 917;
    }
if (index == 95) {
     return 909;
    }
if (index == 96) {
     return 879;
    }
if (index == 97) {
     return 899;
    }
if (index == 98) {
     return 914;
    }
if (index == 99) {
     return 903;
    }
if (index == 100) {
     return 905;
    }
if (index == 101) {
     return 912;
    }
if (index == 102) {
     return 926;
    }
if (index == 103) {
     return 912;
    }
if (index == 104) {
     return 912;
    }
if (index == 105) {
     return 898;
    }
if (index == 106) {
     return 865;
    }
if (index == 107) {
     return 918;
    }
if (index == 108) {
     return 909;
    }
if (index == 109) {
     return 865;
    }
if (index == 110) {
     return 905;
    }
if (index == 111) {
     return 916;
    }
if (index == 112) {
     return 872;
    }
if (index == 113) {
     return 903;
    }
if (index == 114) {
     return 865;
    }
if (index == 115) {
     return 916;
    }
if (index == 116) {
     return 909;
    }
if (index == 117) {
     return 928;
    }
if (index == 118) {
     return 906;
    }
if (index == 119) {
     return 918;
    }
if (index == 120) {
     return 893;
    }
if (index == 121) {
     return 926;
    }
if (index == 122) {
     return 907;
    }
if (index == 123) {
     return 898;
    }
if (index == 124) {
     return 896;
    }
if (index == 125) {
     return 859;
    }
if (index == 126) {
     return 904;
    }
if (index == 127) {
     return 920;
    }
if (index == 128) {
     return 909;
    }
if (index == 129) {
     return 915;
    }
if (index == 130) {
     return 933;
    }
if (index == 131) {
     return 902;
    }
if (index == 132) {
     return 905;
    }
if (index == 133) {
     return 911;
    }
if (index == 134) {
     return 924;
    }
if (index == 135) {
     return 919;
    }
if (index == 136) {
     return 863;
    }
if (index == 137) {
     return 865;
    }
if (index == 138) {
     return 850;
    }
if (index == 139) {
     return 905;
    }
if (index == 140) {
     return 910;
    }
if (index == 141) {
     return 895;
    }
if (index == 142) {
     return 898;
    }
if (index == 143) {
     return 903;
    }
if (index == 144) {
     return 904;
    }
if (index == 145) {
     return 907;
    }
if (index == 146) {
     return 898;
    }
if (index == 147) {
     return 902;
    }
if (index == 148) {
     return 915;
    }
if (index == 149) {
     return 897;
    }
if (index == 150) {
     return 910;
    }
if (index == 151) {
     return 923;
    }
if (index == 152) {
     return 917;
    }
if (index == 153) {
     return 904;
    }
if (index == 154) {
     return 915;
    }
if (index == 155) {
     return 904;
    }
if (index == 156) {
     return 920;
    }
if (index == 157) {
     return 891;
    }
if (index == 158) {
     return 921;
    }
if (index == 159) {
     return 907;
    }
if (index == 160) {
     return 918;
    }
if (index == 161) {
     return 894;
    }
if (index == 162) {
     return 903;
    }
if (index == 163) {
     return 929;
    }
if (index == 164) {
     return 931;
    }
if (index == 165) {
     return 929;
    }
if (index == 166) {
     return 916;
    }
if (index == 167) {
     return 934;
    }
if (index == 168) {
     return 917;
    }
if (index == 169) {
     return 912;
    }
if (index == 170) {
     return 913;
    }
if (index == 171) {
     return 922;
    }
if (index == 172) {
     return 914;
    }
if (index == 173) {
     return 900;
    }
if (index == 174) {
     return 910;
    }
if (index == 175) {
     return 911;
    }
if (index == 176) {
     return 912;
    }
if (index == 177) {
     return 929;
    }
if (index == 178) {
     return 923;
    }
if (index == 179) {
     return 901;
    }
if (index == 180) {
     return 905;
    }
if (index == 181) {
     return 926;
    }
if (index == 182) {
     return 905;
    }
if (index == 183) {
     return 932;
    }
if (index == 184) {
     return 865;
    }
if (index == 185) {
     return 892;
    }
if (index > 185) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1453;
    }
if (index == 1) {
     return 1403;
    }
if (index == 2) {
     return 1399;
    }
if (index == 3) {
     return 1384;
    }
if (index == 4) {
     return 1391;
    }
if (index == 5) {
     return 1389;
    }
if (index == 6) {
     return 1389;
    }
if (index == 7) {
     return 853;
    }
if (index == 8) {
     return 1396;
    }
if (index == 9) {
     return 1402;
    }
if (index == 10) {
     return 1429;
    }
if (index == 11) {
     return 1408;
    }
if (index == 12) {
     return 1384;
    }
if (index == 13) {
     return 1376;
    }
if (index == 14) {
     return 1397;
    }
if (index == 15) {
     return 1380;
    }
if (index == 16) {
     return 1379;
    }
if (index == 17) {
     return 1404;
    }
if (index == 18) {
     return 1406;
    }
if (index == 19) {
     return 1407;
    }
if (index == 20) {
     return 1391;
    }
if (index == 21) {
     return 1388;
    }
if (index == 22) {
     return 1388;
    }
if (index == 23) {
     return 1380;
    }
if (index == 24) {
     return 1378;
    }
if (index == 25) {
     return 1390;
    }
if (index == 26) {
     return 1401;
    }
if (index == 27) {
     return 1415;
    }
if (index == 28) {
     return 1404;
    }
if (index == 29) {
     return 1369;
    }
if (index == 30) {
     return 1366;
    }
if (index == 31) {
     return 1363;
    }
if (index == 32) {
     return 1373;
    }
if (index == 33) {
     return 1371;
    }
if (index == 34) {
     return 1376;
    }
if (index == 35) {
     return 1353;
    }
if (index == 36) {
     return 1369;
    }
if (index == 37) {
     return 1349;
    }
if (index == 38) {
     return 1363;
    }
if (index == 39) {
     return 1391;
    }
if (index == 40) {
     return 1401;
    }
if (index == 41) {
     return 1381;
    }
if (index == 42) {
     return 1388;
    }
if (index == 43) {
     return 1374;
    }
if (index == 44) {
     return 1371;
    }
if (index == 45) {
     return 1358;
    }
if (index == 46) {
     return 1383;
    }
if (index == 47) {
     return 1404;
    }
if (index == 48) {
     return 1394;
    }
if (index == 49) {
     return 1393;
    }
if (index == 50) {
     return 1418;
    }
if (index == 51) {
     return 1395;
    }
if (index == 52) {
     return 1410;
    }
if (index == 53) {
     return 1392;
    }
if (index == 54) {
     return 1401;
    }
if (index == 55) {
     return 1393;
    }
if (index == 56) {
     return 1408;
    }
if (index == 57) {
     return 1399;
    }
if (index == 58) {
     return 1403;
    }
if (index == 59) {
     return 1388;
    }
if (index == 60) {
     return 1414;
    }
if (index == 61) {
     return 1384;
    }
if (index == 62) {
     return 1419;
    }
if (index == 63) {
     return 1398;
    }
if (index == 64) {
     return 1397;
    }
if (index == 65) {
     return 1391;
    }
if (index == 66) {
     return 1413;
    }
if (index == 67) {
     return 1377;
    }
if (index == 68) {
     return 1408;
    }
if (index == 69) {
     return 1380;
    }
if (index == 70) {
     return 1412;
    }
if (index == 71) {
     return 1358;
    }
if (index == 72) {
     return 1412;
    }
if (index == 73) {
     return 1407;
    }
if (index == 74) {
     return 1435;
    }
if (index == 75) {
     return 1398;
    }
if (index == 76) {
     return 1414;
    }
if (index == 77) {
     return 1400;
    }
if (index == 78) {
     return 1413;
    }
if (index == 79) {
     return 1391;
    }
if (index == 80) {
     return 1408;
    }
if (index == 81) {
     return 1388;
    }
if (index == 82) {
     return 1418;
    }
if (index == 83) {
     return 1388;
    }
if (index == 84) {
     return 1411;
    }
if (index == 85) {
     return 1402;
    }
if (index == 86) {
     return 1397;
    }
if (index == 87) {
     return 1405;
    }
if (index == 88) {
     return 1406;
    }
if (index == 89) {
     return 1404;
    }
if (index == 90) {
     return 1401;
    }
if (index == 91) {
     return 1393;
    }
if (index == 92) {
     return 1399;
    }
if (index == 93) {
     return 1391;
    }
if (index == 94) {
     return 1401;
    }
if (index == 95) {
     return 1404;
    }
if (index == 96) {
     return 1392;
    }
if (index == 97) {
     return 1388;
    }
if (index == 98) {
     return 1392;
    }
if (index == 99) {
     return 1374;
    }
if (index == 100) {
     return 1384;
    }
if (index == 101) {
     return 1397;
    }
if (index == 102) {
     return 1403;
    }
if (index == 103) {
     return 1402;
    }
if (index == 104) {
     return 1394;
    }
if (index == 105) {
     return 1389;
    }
if (index == 106) {
     return 1396;
    }
if (index == 107) {
     return 1395;
    }
if (index == 108) {
     return 1394;
    }
if (index == 109) {
     return 1393;
    }
if (index == 110) {
     return 1399;
    }
if (index == 111) {
     return 1388;
    }
if (index == 112) {
     return 1392;
    }
if (index == 113) {
     return 1409;
    }
if (index == 114) {
     return 1396;
    }
if (index == 115) {
     return 1414;
    }
if (index == 116) {
     return 1408;
    }
if (index == 117) {
     return 1415;
    }
if (index == 118) {
     return 1406;
    }
if (index == 119) {
     return 1406;
    }
if (index == 120) {
     return 1408;
    }
if (index == 121) {
     return 1411;
    }
if (index == 122) {
     return 1414;
    }
if (index == 123) {
     return 1400;
    }
if (index == 124) {
     return 1401;
    }
if (index == 125) {
     return 1382;
    }
if (index == 126) {
     return 1402;
    }
if (index == 127) {
     return 1393;
    }
if (index == 128) {
     return 1399;
    }
if (index == 129) {
     return 1419;
    }
if (index == 130) {
     return 1411;
    }
if (index == 131) {
     return 1396;
    }
if (index == 132) {
     return 1409;
    }
if (index == 133) {
     return 1412;
    }
if (index == 134) {
     return 1406;
    }
if (index == 135) {
     return 1411;
    }
if (index == 136) {
     return 1401;
    }
if (index == 137) {
     return 1376;
    }
if (index == 138) {
     return 1386;
    }
if (index == 139) {
     return 1411;
    }
if (index == 140) {
     return 1389;
    }
if (index == 141) {
     return 1418;
    }
if (index == 142) {
     return 1409;
    }
if (index == 143) {
     return 1436;
    }
if (index == 144) {
     return 1405;
    }
if (index == 145) {
     return 1426;
    }
if (index == 146) {
     return 1402;
    }
if (index == 147) {
     return 1420;
    }
if (index == 148) {
     return 1460;
    }
if (index == 149) {
     return 1393;
    }
if (index == 150) {
     return 1403;
    }
if (index == 151) {
     return 1395;
    }
if (index == 152) {
     return 1434;
    }
if (index == 153) {
     return 1405;
    }
if (index == 154) {
     return 1409;
    }
if (index == 155) {
     return 1418;
    }
if (index == 156) {
     return 1414;
    }
if (index == 157) {
     return 1415;
    }
if (index == 158) {
     return 1399;
    }
if (index == 159) {
     return 1409;
    }
if (index == 160) {
     return 1394;
    }
if (index == 161) {
     return 1409;
    }
if (index == 162) {
     return 1387;
    }
if (index == 163) {
     return 1413;
    }
if (index == 164) {
     return 1382;
    }
if (index == 165) {
     return 1412;
    }
if (index == 166) {
     return 1384;
    }
if (index == 167) {
     return 1418;
    }
if (index == 168) {
     return 1400;
    }
if (index == 169) {
     return 1417;
    }
if (index == 170) {
     return 1396;
    }
if (index == 171) {
     return 1416;
    }
if (index == 172) {
     return 1387;
    }
if (index == 173) {
     return 1414;
    }
if (index == 174) {
     return 1407;
    }
if (index == 175) {
     return 1416;
    }
if (index == 176) {
     return 1399;
    }
if (index == 177) {
     return 1410;
    }
if (index == 178) {
     return 1416;
    }
if (index == 179) {
     return 1415;
    }
if (index == 180) {
     return 1415;
    }
if (index == 181) {
     return 1427;
    }
if (index == 182) {
     return 1401;
    }
if (index == 183) {
     return 1394;
    }
if (index == 184) {
     return 1385;
    }
if (index == 185) {
     return 1391;
    }
if (index > 185) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:346_' + imgStr + '/digitalImage';
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
br.numLeafs = 186;

// Book title and the URL used for the book title link
br.bookTitle= "Travels in the Burman empire";
br.bookAuthor= "Malcolm, Howard";
br.bookPub= "Edinburgh: William and Robert Chambers, 1840";
br.bookKeyword= "Missions--Asia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;East Asia--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:346';

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
