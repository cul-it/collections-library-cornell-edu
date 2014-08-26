//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1217;
    }
if (index == 1) {
     return 1180;
    }
if (index == 2) {
     return 1173;
    }
if (index == 3) {
     return 1182;
    }
if (index == 4) {
     return 1226;
    }
if (index == 5) {
     return 1225;
    }
if (index == 6) {
     return 1247;
    }
if (index == 7) {
     return 1221;
    }
if (index == 8) {
     return 1254;
    }
if (index == 9) {
     return 1198;
    }
if (index == 10) {
     return 1222;
    }
if (index == 11) {
     return 1180;
    }
if (index == 12) {
     return 1156;
    }
if (index == 13) {
     return 1168;
    }
if (index == 14) {
     return 1178;
    }
if (index == 15) {
     return 1142;
    }
if (index == 16) {
     return 1141;
    }
if (index == 17) {
     return 1150;
    }
if (index == 18) {
     return 1247;
    }
if (index == 19) {
     return 1251;
    }
if (index == 20) {
     return 1776;
    }
if (index == 21) {
     return 1115;
    }
if (index == 22) {
     return 1149;
    }
if (index == 23) {
     return 1143;
    }
if (index == 24) {
     return 1143;
    }
if (index == 25) {
     return 1148;
    }
if (index == 26) {
     return 1206;
    }
if (index == 27) {
     return 1257;
    }
if (index == 28) {
     return 1306;
    }
if (index == 29) {
     return 1115;
    }
if (index == 30) {
     return 1140;
    }
if (index == 31) {
     return 1133;
    }
if (index == 32) {
     return 1240;
    }
if (index == 33) {
     return 1264;
    }
if (index == 34) {
     return 1709;
    }
if (index == 35) {
     return 1115;
    }
if (index == 36) {
     return 1141;
    }
if (index == 37) {
     return 1127;
    }
if (index == 38) {
     return 1139;
    }
if (index == 39) {
     return 1132;
    }
if (index == 40) {
     return 1566;
    }
if (index == 41) {
     return 1115;
    }
if (index == 42) {
     return 1142;
    }
if (index == 43) {
     return 1125;
    }
if (index == 44) {
     return 1137;
    }
if (index == 45) {
     return 1144;
    }
if (index == 46) {
     return 1277;
    }
if (index == 47) {
     return 1115;
    }
if (index == 48) {
     return 1136;
    }
if (index == 49) {
     return 1138;
    }
if (index == 50) {
     return 947;
    }
if (index == 51) {
     return 1021;
    }
if (index == 52) {
     return 1302;
    }
if (index == 53) {
     return 1115;
    }
if (index == 54) {
     return 932;
    }
if (index == 55) {
     return 912;
    }
if (index == 56) {
     return 1143;
    }
if (index == 57) {
     return 1133;
    }
if (index == 58) {
     return 1136;
    }
if (index == 59) {
     return 1135;
    }
if (index == 60) {
     return 1131;
    }
if (index == 61) {
     return 1153;
    }
if (index == 62) {
     return 1179;
    }
if (index == 63) {
     return 1165;
    }
if (index == 64) {
     return 1182;
    }
if (index == 65) {
     return 1165;
    }
if (index == 66) {
     return 1214;
    }
if (index == 67) {
     return 1230;
    }
if (index == 68) {
     return 1276;
    }
if (index == 69) {
     return 1115;
    }
if (index == 70) {
     return 1195;
    }
if (index == 71) {
     return 1165;
    }
if (index == 72) {
     return 1188;
    }
if (index == 73) {
     return 1171;
    }
if (index == 74) {
     return 1188;
    }
if (index == 75) {
     return 1165;
    }
if (index == 76) {
     return 1200;
    }
if (index == 77) {
     return 1165;
    }
if (index == 78) {
     return 1191;
    }
if (index == 79) {
     return 1159;
    }
if (index == 80) {
     return 1209;
    }
if (index == 81) {
     return 1165;
    }
if (index == 82) {
     return 1195;
    }
if (index == 83) {
     return 1165;
    }
if (index == 84) {
     return 1201;
    }
if (index == 85) {
     return 1144;
    }
if (index == 86) {
     return 1193;
    }
if (index == 87) {
     return 1174;
    }
if (index == 88) {
     return 1195;
    }
if (index == 89) {
     return 1163;
    }
if (index == 90) {
     return 1181;
    }
if (index == 91) {
     return 1165;
    }
if (index == 92) {
     return 1199;
    }
if (index == 93) {
     return 1165;
    }
if (index == 94) {
     return 1189;
    }
if (index == 95) {
     return 1163;
    }
if (index == 96) {
     return 1206;
    }
if (index == 97) {
     return 1161;
    }
if (index == 98) {
     return 1191;
    }
if (index == 99) {
     return 1163;
    }
if (index == 100) {
     return 1195;
    }
if (index == 101) {
     return 1163;
    }
if (index == 102) {
     return 1189;
    }
if (index == 103) {
     return 1161;
    }
if (index == 104) {
     return 1208;
    }
if (index == 105) {
     return 1165;
    }
if (index == 106) {
     return 1179;
    }
if (index == 107) {
     return 1165;
    }
if (index == 108) {
     return 1188;
    }
if (index == 109) {
     return 1184;
    }
if (index == 110) {
     return 1188;
    }
if (index == 111) {
     return 1223;
    }
if (index == 112) {
     return 1216;
    }
if (index == 113) {
     return 1209;
    }
if (index == 114) {
     return 1205;
    }
if (index == 115) {
     return 1179;
    }
if (index == 116) {
     return 1158;
    }
if (index == 117) {
     return 1213;
    }
if (index == 118) {
     return 1200;
    }
if (index == 119) {
     return 1209;
    }
if (index == 120) {
     return 1288;
    }
if (index == 121) {
     return 1121;
    }
if (index == 122) {
     return 1182;
    }
if (index == 123) {
     return 1193;
    }
if (index == 124) {
     return 1163;
    }
if (index == 125) {
     return 1195;
    }
if (index == 126) {
     return 1180;
    }
if (index == 127) {
     return 1226;
    }
if (index == 128) {
     return 1182;
    }
if (index == 129) {
     return 1219;
    }
if (index == 130) {
     return 1171;
    }
if (index == 131) {
     return 1215;
    }
if (index == 132) {
     return 1182;
    }
if (index == 133) {
     return 1195;
    }
if (index == 134) {
     return 1178;
    }
if (index == 135) {
     return 1197;
    }
if (index == 136) {
     return 1180;
    }
if (index == 137) {
     return 1187;
    }
if (index == 138) {
     return 1180;
    }
if (index == 139) {
     return 1208;
    }
if (index == 140) {
     return 1169;
    }
if (index == 141) {
     return 1211;
    }
if (index == 142) {
     return 1182;
    }
if (index == 143) {
     return 1208;
    }
if (index == 144) {
     return 1171;
    }
if (index == 145) {
     return 1208;
    }
if (index == 146) {
     return 1178;
    }
if (index == 147) {
     return 1208;
    }
if (index == 148) {
     return 1169;
    }
if (index == 149) {
     return 1208;
    }
if (index == 150) {
     return 1171;
    }
if (index == 151) {
     return 1208;
    }
if (index == 152) {
     return 1173;
    }
if (index == 153) {
     return 1208;
    }
if (index == 154) {
     return 1176;
    }
if (index == 155) {
     return 1208;
    }
if (index == 156) {
     return 1156;
    }
if (index == 157) {
     return 1176;
    }
if (index == 158) {
     return 1026;
    }
if (index == 159) {
     return 1125;
    }
if (index == 160) {
     return 1203;
    }
if (index == 161) {
     return 1221;
    }
if (index == 162) {
     return 1189;
    }
if (index == 163) {
     return 1472;
    }
if (index > 163) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1304;
    }
if (index == 1) {
     return 1244;
    }
if (index == 2) {
     return 1269;
    }
if (index == 3) {
     return 1260;
    }
if (index == 4) {
     return 1298;
    }
if (index == 5) {
     return 1280;
    }
if (index == 6) {
     return 1288;
    }
if (index == 7) {
     return 1298;
    }
if (index == 8) {
     return 1306;
    }
if (index == 9) {
     return 1282;
    }
if (index == 10) {
     return 1295;
    }
if (index == 11) {
     return 1252;
    }
if (index == 12) {
     return 1255;
    }
if (index == 13) {
     return 1253;
    }
if (index == 14) {
     return 1261;
    }
if (index == 15) {
     return 1238;
    }
if (index == 16) {
     return 1225;
    }
if (index == 17) {
     return 1253;
    }
if (index == 18) {
     return 1008;
    }
if (index == 19) {
     return 1179;
    }
if (index == 20) {
     return 1311;
    }
if (index == 21) {
     return 1224;
    }
if (index == 22) {
     return 1223;
    }
if (index == 23) {
     return 1237;
    }
if (index == 24) {
     return 1225;
    }
if (index == 25) {
     return 1238;
    }
if (index == 26) {
     return 932;
    }
if (index == 27) {
     return 1122;
    }
if (index == 28) {
     return 1677;
    }
if (index == 29) {
     return 1224;
    }
if (index == 30) {
     return 1237;
    }
if (index == 31) {
     return 1226;
    }
if (index == 32) {
     return 949;
    }
if (index == 33) {
     return 1132;
    }
if (index == 34) {
     return 1304;
    }
if (index == 35) {
     return 1224;
    }
if (index == 36) {
     return 1255;
    }
if (index == 37) {
     return 1228;
    }
if (index == 38) {
     return 1250;
    }
if (index == 39) {
     return 1236;
    }
if (index == 40) {
     return 1295;
    }
if (index == 41) {
     return 1224;
    }
if (index == 42) {
     return 1250;
    }
if (index == 43) {
     return 1247;
    }
if (index == 44) {
     return 1249;
    }
if (index == 45) {
     return 1250;
    }
if (index == 46) {
     return 1743;
    }
if (index == 47) {
     return 1224;
    }
if (index == 48) {
     return 1262;
    }
if (index == 49) {
     return 1243;
    }
if (index == 50) {
     return 1216;
    }
if (index == 51) {
     return 1276;
    }
if (index == 52) {
     return 1534;
    }
if (index == 53) {
     return 1224;
    }
if (index == 54) {
     return 735;
    }
if (index == 55) {
     return 755;
    }
if (index == 56) {
     return 1240;
    }
if (index == 57) {
     return 1243;
    }
if (index == 58) {
     return 1258;
    }
if (index == 59) {
     return 1233;
    }
if (index == 60) {
     return 1258;
    }
if (index == 61) {
     return 1219;
    }
if (index == 62) {
     return 1243;
    }
if (index == 63) {
     return 1225;
    }
if (index == 64) {
     return 1243;
    }
if (index == 65) {
     return 1260;
    }
if (index == 66) {
     return 979;
    }
if (index == 67) {
     return 1159;
    }
if (index == 68) {
     return 1841;
    }
if (index == 69) {
     return 1224;
    }
if (index == 70) {
     return 1262;
    }
if (index == 71) {
     return 1242;
    }
if (index == 72) {
     return 1253;
    }
if (index == 73) {
     return 1240;
    }
if (index == 74) {
     return 1260;
    }
if (index == 75) {
     return 1224;
    }
if (index == 76) {
     return 1252;
    }
if (index == 77) {
     return 1229;
    }
if (index == 78) {
     return 1248;
    }
if (index == 79) {
     return 1224;
    }
if (index == 80) {
     return 1245;
    }
if (index == 81) {
     return 1260;
    }
if (index == 82) {
     return 1252;
    }
if (index == 83) {
     return 1260;
    }
if (index == 84) {
     return 1260;
    }
if (index == 85) {
     return 1212;
    }
if (index == 86) {
     return 1257;
    }
if (index == 87) {
     return 1224;
    }
if (index == 88) {
     return 1243;
    }
if (index == 89) {
     return 1245;
    }
if (index == 90) {
     return 1250;
    }
if (index == 91) {
     return 1260;
    }
if (index == 92) {
     return 1266;
    }
if (index == 93) {
     return 1246;
    }
if (index == 94) {
     return 1266;
    }
if (index == 95) {
     return 1244;
    }
if (index == 96) {
     return 1272;
    }
if (index == 97) {
     return 1233;
    }
if (index == 98) {
     return 1257;
    }
if (index == 99) {
     return 1240;
    }
if (index == 100) {
     return 1265;
    }
if (index == 101) {
     return 1254;
    }
if (index == 102) {
     return 1267;
    }
if (index == 103) {
     return 1256;
    }
if (index == 104) {
     return 1269;
    }
if (index == 105) {
     return 1260;
    }
if (index == 106) {
     return 1257;
    }
if (index == 107) {
     return 1236;
    }
if (index == 108) {
     return 1256;
    }
if (index == 109) {
     return 1247;
    }
if (index == 110) {
     return 1249;
    }
if (index == 111) {
     return 1265;
    }
if (index == 112) {
     return 1265;
    }
if (index == 113) {
     return 1244;
    }
if (index == 114) {
     return 1249;
    }
if (index == 115) {
     return 1251;
    }
if (index == 116) {
     return 1222;
    }
if (index == 117) {
     return 1256;
    }
if (index == 118) {
     return 1254;
    }
if (index == 119) {
     return 1260;
    }
if (index == 120) {
     return 1995;
    }
if (index == 121) {
     return 1247;
    }
if (index == 122) {
     return 1260;
    }
if (index == 123) {
     return 1217;
    }
if (index == 124) {
     return 1181;
    }
if (index == 125) {
     return 1249;
    }
if (index == 126) {
     return 1223;
    }
if (index == 127) {
     return 1268;
    }
if (index == 128) {
     return 1242;
    }
if (index == 129) {
     return 1262;
    }
if (index == 130) {
     return 1222;
    }
if (index == 131) {
     return 1258;
    }
if (index == 132) {
     return 1242;
    }
if (index == 133) {
     return 1247;
    }
if (index == 134) {
     return 1219;
    }
if (index == 135) {
     return 1249;
    }
if (index == 136) {
     return 1224;
    }
if (index == 137) {
     return 1251;
    }
if (index == 138) {
     return 1222;
    }
if (index == 139) {
     return 1251;
    }
if (index == 140) {
     return 1226;
    }
if (index == 141) {
     return 1254;
    }
if (index == 142) {
     return 1242;
    }
if (index == 143) {
     return 1251;
    }
if (index == 144) {
     return 1215;
    }
if (index == 145) {
     return 1251;
    }
if (index == 146) {
     return 1229;
    }
if (index == 147) {
     return 1251;
    }
if (index == 148) {
     return 1229;
    }
if (index == 149) {
     return 1251;
    }
if (index == 150) {
     return 1217;
    }
if (index == 151) {
     return 1251;
    }
if (index == 152) {
     return 1231;
    }
if (index == 153) {
     return 1251;
    }
if (index == 154) {
     return 1222;
    }
if (index == 155) {
     return 1251;
    }
if (index == 156) {
     return 1208;
    }
if (index == 157) {
     return 1226;
    }
if (index == 158) {
     return 1253;
    }
if (index == 159) {
     return 1275;
    }
if (index == 160) {
     return 1286;
    }
if (index == 161) {
     return 1278;
    }
if (index == 162) {
     return 1286;
    }
if (index == 163) {
     return 1675;
    }
if (index > 163) {
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
    var url = '/fedora/get/seapage:253_' + imgStr + '/digitalImage';
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
br.numLeafs = 164;

// Book title and the URL used for the book title link
br.bookTitle= "Federated Malay States Railways, 1921; pamphlet of information for travellers";
br.bookAuthor= "Federated Malay States Railway";
br.bookPub= "[London?]: no recorded publisher, 1921";
br.bookKeyword= "Malaya--Guidebooks";
br.bookUrl  = '/catalog/sea:253';

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
