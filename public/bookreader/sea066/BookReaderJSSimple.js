//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 743;
    }
if (index == 1) {
     return 698;
    }
if (index == 2) {
     return 649;
    }
if (index == 3) {
     return 632;
    }
if (index == 4) {
     return 670;
    }
if (index == 5) {
     return 693;
    }
if (index == 6) {
     return 651;
    }
if (index == 7) {
     return 632;
    }
if (index == 8) {
     return 667;
    }
if (index == 9) {
     return 632;
    }
if (index == 10) {
     return 660;
    }
if (index == 11) {
     return 640;
    }
if (index == 12) {
     return 675;
    }
if (index == 13) {
     return 664;
    }
if (index == 14) {
     return 644;
    }
if (index == 15) {
     return 644;
    }
if (index == 16) {
     return 650;
    }
if (index == 17) {
     return 648;
    }
if (index == 18) {
     return 645;
    }
if (index == 19) {
     return 645;
    }
if (index == 20) {
     return 631;
    }
if (index == 21) {
     return 659;
    }
if (index == 22) {
     return 1344;
    }
if (index == 23) {
     return 640;
    }
if (index == 24) {
     return 648;
    }
if (index == 25) {
     return 661;
    }
if (index == 26) {
     return 632;
    }
if (index == 27) {
     return 685;
    }
if (index == 28) {
     return 640;
    }
if (index == 29) {
     return 655;
    }
if (index == 30) {
     return 690;
    }
if (index == 31) {
     return 640;
    }
if (index == 32) {
     return 655;
    }
if (index == 33) {
     return 643;
    }
if (index == 34) {
     return 654;
    }
if (index == 35) {
     return 652;
    }
if (index == 36) {
     return 1083;
    }
if (index == 37) {
     return 640;
    }
if (index == 38) {
     return 648;
    }
if (index == 39) {
     return 653;
    }
if (index == 40) {
     return 704;
    }
if (index == 41) {
     return 640;
    }
if (index == 42) {
     return 679;
    }
if (index == 43) {
     return 656;
    }
if (index == 44) {
     return 630;
    }
if (index == 45) {
     return 644;
    }
if (index == 46) {
     return 648;
    }
if (index == 47) {
     return 656;
    }
if (index == 48) {
     return 680;
    }
if (index == 49) {
     return 700;
    }
if (index == 50) {
     return 667;
    }
if (index == 51) {
     return 658;
    }
if (index == 52) {
     return 638;
    }
if (index == 53) {
     return 662;
    }
if (index == 54) {
     return 643;
    }
if (index == 55) {
     return 662;
    }
if (index == 56) {
     return 669;
    }
if (index == 57) {
     return 638;
    }
if (index == 58) {
     return 640;
    }
if (index == 59) {
     return 635;
    }
if (index == 60) {
     return 640;
    }
if (index == 61) {
     return 698;
    }
if (index == 62) {
     return 640;
    }
if (index == 63) {
     return 662;
    }
if (index == 64) {
     return 655;
    }
if (index == 65) {
     return 634;
    }
if (index == 66) {
     return 640;
    }
if (index == 67) {
     return 684;
    }
if (index == 68) {
     return 640;
    }
if (index == 69) {
     return 700;
    }
if (index == 70) {
     return 619;
    }
if (index == 71) {
     return 705;
    }
if (index == 72) {
     return 676;
    }
if (index == 73) {
     return 681;
    }
if (index == 74) {
     return 672;
    }
if (index == 75) {
     return 679;
    }
if (index == 76) {
     return 687;
    }
if (index == 77) {
     return 668;
    }
if (index == 78) {
     return 649;
    }
if (index == 79) {
     return 686;
    }
if (index == 80) {
     return 654;
    }
if (index == 81) {
     return 685;
    }
if (index == 82) {
     return 654;
    }
if (index == 83) {
     return 658;
    }
if (index == 84) {
     return 617;
    }
if (index == 85) {
     return 696;
    }
if (index == 86) {
     return 659;
    }
if (index == 87) {
     return 700;
    }
if (index == 88) {
     return 646;
    }
if (index == 89) {
     return 670;
    }
if (index == 90) {
     return 665;
    }
if (index == 91) {
     return 677;
    }
if (index == 92) {
     return 632;
    }
if (index == 93) {
     return 691;
    }
if (index == 94) {
     return 666;
    }
if (index == 95) {
     return 673;
    }
if (index == 96) {
     return 687;
    }
if (index == 97) {
     return 683;
    }
if (index == 98) {
     return 686;
    }
if (index == 99) {
     return 652;
    }
if (index == 100) {
     return 674;
    }
if (index == 101) {
     return 686;
    }
if (index == 102) {
     return 717;
    }
if (index == 103) {
     return 665;
    }
if (index == 104) {
     return 629;
    }
if (index == 105) {
     return 680;
    }
if (index == 106) {
     return 659;
    }
if (index == 107) {
     return 664;
    }
if (index == 108) {
     return 637;
    }
if (index == 109) {
     return 674;
    }
if (index == 110) {
     return 677;
    }
if (index == 111) {
     return 679;
    }
if (index == 112) {
     return 677;
    }
if (index == 113) {
     return 650;
    }
if (index == 114) {
     return 677;
    }
if (index == 115) {
     return 666;
    }
if (index == 116) {
     return 677;
    }
if (index == 117) {
     return 669;
    }
if (index == 118) {
     return 675;
    }
if (index == 119) {
     return 673;
    }
if (index == 120) {
     return 700;
    }
if (index == 121) {
     return 650;
    }
if (index == 122) {
     return 658;
    }
if (index == 123) {
     return 643;
    }
if (index == 124) {
     return 659;
    }
if (index == 125) {
     return 653;
    }
if (index == 126) {
     return 665;
    }
if (index == 127) {
     return 647;
    }
if (index == 128) {
     return 666;
    }
if (index == 129) {
     return 642;
    }
if (index == 130) {
     return 628;
    }
if (index == 131) {
     return 637;
    }
if (index == 132) {
     return 631;
    }
if (index == 133) {
     return 662;
    }
if (index == 134) {
     return 623;
    }
if (index == 135) {
     return 642;
    }
if (index == 136) {
     return 623;
    }
if (index == 137) {
     return 649;
    }
if (index == 138) {
     return 634;
    }
if (index == 139) {
     return 645;
    }
if (index == 140) {
     return 623;
    }
if (index == 141) {
     return 653;
    }
if (index == 142) {
     return 625;
    }
if (index == 143) {
     return 659;
    }
if (index == 144) {
     return 628;
    }
if (index == 145) {
     return 644;
    }
if (index == 146) {
     return 651;
    }
if (index == 147) {
     return 638;
    }
if (index == 148) {
     return 631;
    }
if (index == 149) {
     return 644;
    }
if (index == 150) {
     return 634;
    }
if (index == 151) {
     return 660;
    }
if (index == 152) {
     return 641;
    }
if (index == 153) {
     return 689;
    }
if (index == 154) {
     return 645;
    }
if (index == 155) {
     return 678;
    }
if (index == 156) {
     return 644;
    }
if (index == 157) {
     return 682;
    }
if (index == 158) {
     return 658;
    }
if (index == 159) {
     return 702;
    }
if (index == 160) {
     return 654;
    }
if (index == 161) {
     return 687;
    }
if (index == 162) {
     return 656;
    }
if (index == 163) {
     return 674;
    }
if (index == 164) {
     return 657;
    }
if (index == 165) {
     return 690;
    }
if (index == 166) {
     return 657;
    }
if (index == 167) {
     return 671;
    }
if (index == 168) {
     return 645;
    }
if (index == 169) {
     return 668;
    }
if (index == 170) {
     return 643;
    }
if (index == 171) {
     return 670;
    }
if (index == 172) {
     return 644;
    }
if (index == 173) {
     return 713;
    }
if (index == 174) {
     return 641;
    }
if (index == 175) {
     return 716;
    }
if (index == 176) {
     return 644;
    }
if (index == 177) {
     return 700;
    }
if (index == 178) {
     return 649;
    }
if (index == 179) {
     return 711;
    }
if (index == 180) {
     return 657;
    }
if (index == 181) {
     return 701;
    }
if (index == 182) {
     return 646;
    }
if (index == 183) {
     return 699;
    }
if (index == 184) {
     return 660;
    }
if (index == 185) {
     return 690;
    }
if (index == 186) {
     return 648;
    }
if (index == 187) {
     return 705;
    }
if (index == 188) {
     return 646;
    }
if (index == 189) {
     return 713;
    }
if (index == 190) {
     return 641;
    }
if (index == 191) {
     return 688;
    }
if (index == 192) {
     return 650;
    }
if (index == 193) {
     return 697;
    }
if (index == 194) {
     return 643;
    }
if (index == 195) {
     return 696;
    }
if (index == 196) {
     return 653;
    }
if (index == 197) {
     return 659;
    }
if (index == 198) {
     return 1437;
    }
if (index == 199) {
     return 659;
    }
if (index == 200) {
     return 688;
    }
if (index == 201) {
     return 607;
    }
if (index == 202) {
     return 635;
    }
if (index == 203) {
     return 736;
    }
if (index > 203) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1148;
    }
if (index == 1) {
     return 1092;
    }
if (index == 2) {
     return 1091;
    }
if (index == 3) {
     return 1077;
    }
if (index == 4) {
     return 1086;
    }
if (index == 5) {
     return 1112;
    }
if (index == 6) {
     return 1086;
    }
if (index == 7) {
     return 1077;
    }
if (index == 8) {
     return 1097;
    }
if (index == 9) {
     return 1077;
    }
if (index == 10) {
     return 1092;
    }
if (index == 11) {
     return 1065;
    }
if (index == 12) {
     return 1098;
    }
if (index == 13) {
     return 1079;
    }
if (index == 14) {
     return 1072;
    }
if (index == 15) {
     return 1068;
    }
if (index == 16) {
     return 1075;
    }
if (index == 17) {
     return 1070;
    }
if (index == 18) {
     return 1072;
    }
if (index == 19) {
     return 1063;
    }
if (index == 20) {
     return 1074;
    }
if (index == 21) {
     return 1071;
    }
if (index == 22) {
     return 1079;
    }
if (index == 23) {
     return 1077;
    }
if (index == 24) {
     return 1095;
    }
if (index == 25) {
     return 1089;
    }
if (index == 26) {
     return 1086;
    }
if (index == 27) {
     return 1103;
    }
if (index == 28) {
     return 1090;
    }
if (index == 29) {
     return 1086;
    }
if (index == 30) {
     return 1062;
    }
if (index == 31) {
     return 1077;
    }
if (index == 32) {
     return 1110;
    }
if (index == 33) {
     return 1079;
    }
if (index == 34) {
     return 1067;
    }
if (index == 35) {
     return 1084;
    }
if (index == 36) {
     return 684;
    }
if (index == 37) {
     return 1077;
    }
if (index == 38) {
     return 1104;
    }
if (index == 39) {
     return 1084;
    }
if (index == 40) {
     return 1106;
    }
if (index == 41) {
     return 1077;
    }
if (index == 42) {
     return 1113;
    }
if (index == 43) {
     return 1061;
    }
if (index == 44) {
     return 1077;
    }
if (index == 45) {
     return 1063;
    }
if (index == 46) {
     return 1077;
    }
if (index == 47) {
     return 1110;
    }
if (index == 48) {
     return 1077;
    }
if (index == 49) {
     return 1040;
    }
if (index == 50) {
     return 1092;
    }
if (index == 51) {
     return 1061;
    }
if (index == 52) {
     return 1082;
    }
if (index == 53) {
     return 1073;
    }
if (index == 54) {
     return 1078;
    }
if (index == 55) {
     return 1068;
    }
if (index == 56) {
     return 1135;
    }
if (index == 57) {
     return 1077;
    }
if (index == 58) {
     return 1077;
    }
if (index == 59) {
     return 1098;
    }
if (index == 60) {
     return 1077;
    }
if (index == 61) {
     return 1068;
    }
if (index == 62) {
     return 1077;
    }
if (index == 63) {
     return 1092;
    }
if (index == 64) {
     return 1086;
    }
if (index == 65) {
     return 1115;
    }
if (index == 66) {
     return 1077;
    }
if (index == 67) {
     return 1106;
    }
if (index == 68) {
     return 1065;
    }
if (index == 69) {
     return 1130;
    }
if (index == 70) {
     return 1049;
    }
if (index == 71) {
     return 1137;
    }
if (index == 72) {
     return 1092;
    }
if (index == 73) {
     return 1121;
    }
if (index == 74) {
     return 1112;
    }
if (index == 75) {
     return 1132;
    }
if (index == 76) {
     return 1124;
    }
if (index == 77) {
     return 1112;
    }
if (index == 78) {
     return 1125;
    }
if (index == 79) {
     return 1126;
    }
if (index == 80) {
     return 1114;
    }
if (index == 81) {
     return 1121;
    }
if (index == 82) {
     return 1099;
    }
if (index == 83) {
     return 1096;
    }
if (index == 84) {
     return 1090;
    }
if (index == 85) {
     return 1094;
    }
if (index == 86) {
     return 1100;
    }
if (index == 87) {
     return 1120;
    }
if (index == 88) {
     return 1097;
    }
if (index == 89) {
     return 1133;
    }
if (index == 90) {
     return 1093;
    }
if (index == 91) {
     return 1110;
    }
if (index == 92) {
     return 1106;
    }
if (index == 93) {
     return 1119;
    }
if (index == 94) {
     return 1114;
    }
if (index == 95) {
     return 1108;
    }
if (index == 96) {
     return 1115;
    }
if (index == 97) {
     return 1109;
    }
if (index == 98) {
     return 1118;
    }
if (index == 99) {
     return 1108;
    }
if (index == 100) {
     return 1107;
    }
if (index == 101) {
     return 1123;
    }
if (index == 102) {
     return 1102;
    }
if (index == 103) {
     return 1101;
    }
if (index == 104) {
     return 1102;
    }
if (index == 105) {
     return 1109;
    }
if (index == 106) {
     return 1105;
    }
if (index == 107) {
     return 1106;
    }
if (index == 108) {
     return 1104;
    }
if (index == 109) {
     return 1112;
    }
if (index == 110) {
     return 1104;
    }
if (index == 111) {
     return 1130;
    }
if (index == 112) {
     return 1104;
    }
if (index == 113) {
     return 1113;
    }
if (index == 114) {
     return 1104;
    }
if (index == 115) {
     return 1122;
    }
if (index == 116) {
     return 1104;
    }
if (index == 117) {
     return 1123;
    }
if (index == 118) {
     return 1112;
    }
if (index == 119) {
     return 1099;
    }
if (index == 120) {
     return 1086;
    }
if (index == 121) {
     return 1086;
    }
if (index == 122) {
     return 1103;
    }
if (index == 123) {
     return 1097;
    }
if (index == 124) {
     return 1097;
    }
if (index == 125) {
     return 1103;
    }
if (index == 126) {
     return 1100;
    }
if (index == 127) {
     return 1099;
    }
if (index == 128) {
     return 1100;
    }
if (index == 129) {
     return 1097;
    }
if (index == 130) {
     return 1089;
    }
if (index == 131) {
     return 1094;
    }
if (index == 132) {
     return 1090;
    }
if (index == 133) {
     return 1108;
    }
if (index == 134) {
     return 1086;
    }
if (index == 135) {
     return 1097;
    }
if (index == 136) {
     return 1086;
    }
if (index == 137) {
     return 1100;
    }
if (index == 138) {
     return 1092;
    }
if (index == 139) {
     return 1098;
    }
if (index == 140) {
     return 1086;
    }
if (index == 141) {
     return 1102;
    }
if (index == 142) {
     return 1087;
    }
if (index == 143) {
     return 1106;
    }
if (index == 144) {
     return 1089;
    }
if (index == 145) {
     return 1098;
    }
if (index == 146) {
     return 1101;
    }
if (index == 147) {
     return 1094;
    }
if (index == 148) {
     return 1090;
    }
if (index == 149) {
     return 1098;
    }
if (index == 150) {
     return 1092;
    }
if (index == 151) {
     return 1097;
    }
if (index == 152) {
     return 1077;
    }
if (index == 153) {
     return 1103;
    }
if (index == 154) {
     return 1070;
    }
if (index == 155) {
     return 1111;
    }
if (index == 156) {
     return 1070;
    }
if (index == 157) {
     return 1100;
    }
if (index == 158) {
     return 1078;
    }
if (index == 159) {
     return 1111;
    }
if (index == 160) {
     return 1076;
    }
if (index == 161) {
     return 1102;
    }
if (index == 162) {
     return 1077;
    }
if (index == 163) {
     return 1095;
    }
if (index == 164) {
     return 1077;
    }
if (index == 165) {
     return 1129;
    }
if (index == 166) {
     return 1077;
    }
if (index == 167) {
     return 1124;
    }
if (index == 168) {
     return 1071;
    }
if (index == 169) {
     return 1116;
    }
if (index == 170) {
     return 1069;
    }
if (index == 171) {
     return 1120;
    }
if (index == 172) {
     return 1070;
    }
if (index == 173) {
     return 1118;
    }
if (index == 174) {
     return 1068;
    }
if (index == 175) {
     return 1102;
    }
if (index == 176) {
     return 1070;
    }
if (index == 177) {
     return 1093;
    }
if (index == 178) {
     return 1072;
    }
if (index == 179) {
     return 1099;
    }
if (index == 180) {
     return 1077;
    }
if (index == 181) {
     return 1093;
    }
if (index == 182) {
     return 1054;
    }
if (index == 183) {
     return 1092;
    }
if (index == 184) {
     return 1062;
    }
if (index == 185) {
     return 1087;
    }
if (index == 186) {
     return 1055;
    }
if (index == 187) {
     return 1096;
    }
if (index == 188) {
     return 1054;
    }
if (index == 189) {
     return 1100;
    }
if (index == 190) {
     return 1051;
    }
if (index == 191) {
     return 1085;
    }
if (index == 192) {
     return 1056;
    }
if (index == 193) {
     return 1091;
    }
if (index == 194) {
     return 1052;
    }
if (index == 195) {
     return 1090;
    }
if (index == 196) {
     return 1058;
    }
if (index == 197) {
     return 1111;
    }
if (index == 198) {
     return 1280;
    }
if (index == 199) {
     return 1068;
    }
if (index == 200) {
     return 1112;
    }
if (index == 201) {
     return 1115;
    }
if (index == 202) {
     return 1086;
    }
if (index == 203) {
     return 1145;
    }
if (index > 203) {
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
    var url = '/fedora/get/seapage:066_' + imgStr + '/digitalImage';
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
br.numLeafs = 204;

// Book title and the URL used for the book title link
br.bookTitle= "Eighteen hundred miles on a Burmese tat : through Burmah, Siam, and the eastern Shan States";
br.bookAuthor= "Younghusband, G. J. (George John)";
br.bookPub= "London: Allen and Co, 1888";
br.bookKeyword= "Southeast Asia--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Description and travel";
br.bookUrl  = '/catalog/sea:066';

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