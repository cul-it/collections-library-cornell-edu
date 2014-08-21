//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 909;
    }
if (index == 1) {
     return 885;
    }
if (index == 2) {
     return 866;
    }
if (index == 3) {
     return 880;
    }
if (index == 4) {
     return 867;
    }
if (index == 5) {
     return 852;
    }
if (index == 6) {
     return 858;
    }
if (index == 7) {
     return 855;
    }
if (index == 8) {
     return 858;
    }
if (index == 9) {
     return 849;
    }
if (index == 10) {
     return 858;
    }
if (index == 11) {
     return 849;
    }
if (index == 12) {
     return 858;
    }
if (index == 13) {
     return 849;
    }
if (index == 14) {
     return 858;
    }
if (index == 15) {
     return 652;
    }
if (index == 16) {
     return 858;
    }
if (index == 17) {
     return 849;
    }
if (index == 18) {
     return 858;
    }
if (index == 19) {
     return 849;
    }
if (index == 20) {
     return 858;
    }
if (index == 21) {
     return 849;
    }
if (index == 22) {
     return 661;
    }
if (index == 23) {
     return 652;
    }
if (index == 24) {
     return 858;
    }
if (index == 25) {
     return 849;
    }
if (index == 26) {
     return 858;
    }
if (index == 27) {
     return 832;
    }
if (index == 28) {
     return 806;
    }
if (index == 29) {
     return 839;
    }
if (index == 30) {
     return 834;
    }
if (index == 31) {
     return 845;
    }
if (index == 32) {
     return 845;
    }
if (index == 33) {
     return 845;
    }
if (index == 34) {
     return 845;
    }
if (index == 35) {
     return 845;
    }
if (index == 36) {
     return 845;
    }
if (index == 37) {
     return 845;
    }
if (index == 38) {
     return 845;
    }
if (index == 39) {
     return 845;
    }
if (index == 40) {
     return 845;
    }
if (index == 41) {
     return 834;
    }
if (index == 42) {
     return 845;
    }
if (index == 43) {
     return 845;
    }
if (index == 44) {
     return 845;
    }
if (index == 45) {
     return 661;
    }
if (index == 46) {
     return 831;
    }
if (index == 47) {
     return 845;
    }
if (index == 48) {
     return 845;
    }
if (index == 49) {
     return 845;
    }
if (index == 50) {
     return 845;
    }
if (index == 51) {
     return 845;
    }
if (index == 52) {
     return 647;
    }
if (index == 53) {
     return 661;
    }
if (index == 54) {
     return 661;
    }
if (index == 55) {
     return 661;
    }
if (index == 56) {
     return 732;
    }
if (index == 57) {
     return 845;
    }
if (index == 58) {
     return 797;
    }
if (index == 59) {
     return 661;
    }
if (index == 60) {
     return 780;
    }
if (index == 61) {
     return 845;
    }
if (index == 62) {
     return 832;
    }
if (index == 63) {
     return 845;
    }
if (index == 64) {
     return 637;
    }
if (index == 65) {
     return 827;
    }
if (index == 66) {
     return 827;
    }
if (index == 67) {
     return 827;
    }
if (index == 68) {
     return 827;
    }
if (index == 69) {
     return 641;
    }
if (index == 70) {
     return 819;
    }
if (index == 71) {
     return 814;
    }
if (index == 72) {
     return 652;
    }
if (index == 73) {
     return 631;
    }
if (index == 74) {
     return 652;
    }
if (index == 75) {
     return 652;
    }
if (index == 76) {
     return 652;
    }
if (index == 77) {
     return 652;
    }
if (index == 78) {
     return 817;
    }
if (index == 79) {
     return 827;
    }
if (index == 80) {
     return 827;
    }
if (index == 81) {
     return 827;
    }
if (index == 82) {
     return 827;
    }
if (index == 83) {
     return 827;
    }
if (index == 84) {
     return 827;
    }
if (index == 85) {
     return 638;
    }
if (index == 86) {
     return 825;
    }
if (index == 87) {
     return 638;
    }
if (index == 88) {
     return 827;
    }
if (index == 89) {
     return 645;
    }
if (index == 90) {
     return 813;
    }
if (index == 91) {
     return 642;
    }
if (index == 92) {
     return 633;
    }
if (index == 93) {
     return 652;
    }
if (index == 94) {
     return 827;
    }
if (index == 95) {
     return 652;
    }
if (index == 96) {
     return 652;
    }
if (index == 97) {
     return 836;
    }
if (index == 98) {
     return 652;
    }
if (index == 99) {
     return 836;
    }
if (index == 100) {
     return 633;
    }
if (index == 101) {
     return 836;
    }
if (index == 102) {
     return 827;
    }
if (index == 103) {
     return 836;
    }
if (index == 104) {
     return 827;
    }
if (index == 105) {
     return 836;
    }
if (index == 106) {
     return 827;
    }
if (index == 107) {
     return 652;
    }
if (index == 108) {
     return 827;
    }
if (index == 109) {
     return 836;
    }
if (index == 110) {
     return 812;
    }
if (index == 111) {
     return 836;
    }
if (index == 112) {
     return 809;
    }
if (index == 113) {
     return 836;
    }
if (index == 114) {
     return 827;
    }
if (index == 115) {
     return 836;
    }
if (index == 116) {
     return 827;
    }
if (index == 117) {
     return 836;
    }
if (index == 118) {
     return 827;
    }
if (index == 119) {
     return 652;
    }
if (index == 120) {
     return 827;
    }
if (index == 121) {
     return 652;
    }
if (index == 122) {
     return 629;
    }
if (index == 123) {
     return 836;
    }
if (index == 124) {
     return 827;
    }
if (index == 125) {
     return 815;
    }
if (index == 126) {
     return 827;
    }
if (index == 127) {
     return 836;
    }
if (index == 128) {
     return 652;
    }
if (index == 129) {
     return 642;
    }
if (index == 130) {
     return 652;
    }
if (index == 131) {
     return 646;
    }
if (index == 132) {
     return 652;
    }
if (index == 133) {
     return 652;
    }
if (index == 134) {
     return 827;
    }
if (index == 135) {
     return 836;
    }
if (index == 136) {
     return 827;
    }
if (index == 137) {
     return 652;
    }
if (index == 138) {
     return 632;
    }
if (index == 139) {
     return 836;
    }
if (index == 140) {
     return 827;
    }
if (index == 141) {
     return 836;
    }
if (index == 142) {
     return 827;
    }
if (index == 143) {
     return 836;
    }
if (index == 144) {
     return 827;
    }
if (index == 145) {
     return 836;
    }
if (index == 146) {
     return 652;
    }
if (index == 147) {
     return 836;
    }
if (index == 148) {
     return 827;
    }
if (index == 149) {
     return 836;
    }
if (index == 150) {
     return 827;
    }
if (index == 151) {
     return 836;
    }
if (index == 152) {
     return 827;
    }
if (index == 153) {
     return 836;
    }
if (index == 154) {
     return 827;
    }
if (index == 155) {
     return 836;
    }
if (index == 156) {
     return 827;
    }
if (index == 157) {
     return 836;
    }
if (index == 158) {
     return 827;
    }
if (index == 159) {
     return 652;
    }
if (index == 160) {
     return 652;
    }
if (index == 161) {
     return 652;
    }
if (index == 162) {
     return 652;
    }
if (index == 163) {
     return 652;
    }
if (index == 164) {
     return 652;
    }
if (index == 165) {
     return 836;
    }
if (index == 166) {
     return 816;
    }
if (index == 167) {
     return 836;
    }
if (index == 168) {
     return 807;
    }
if (index == 169) {
     return 836;
    }
if (index == 170) {
     return 641;
    }
if (index == 171) {
     return 652;
    }
if (index == 172) {
     return 652;
    }
if (index == 173) {
     return 836;
    }
if (index == 174) {
     return 826;
    }
if (index == 175) {
     return 612;
    }
if (index == 176) {
     return 826;
    }
if (index == 177) {
     return 836;
    }
if (index == 178) {
     return 823;
    }
if (index == 179) {
     return 836;
    }
if (index == 180) {
     return 641;
    }
if (index == 181) {
     return 836;
    }
if (index == 182) {
     return 826;
    }
if (index == 183) {
     return 836;
    }
if (index == 184) {
     return 826;
    }
if (index == 185) {
     return 836;
    }
if (index == 186) {
     return 826;
    }
if (index == 187) {
     return 652;
    }
if (index == 188) {
     return 642;
    }
if (index == 189) {
     return 820;
    }
if (index == 190) {
     return 652;
    }
if (index == 191) {
     return 836;
    }
if (index == 192) {
     return 826;
    }
if (index == 193) {
     return 836;
    }
if (index == 194) {
     return 826;
    }
if (index == 195) {
     return 836;
    }
if (index == 196) {
     return 816;
    }
if (index == 197) {
     return 652;
    }
if (index == 198) {
     return 826;
    }
if (index == 199) {
     return 820;
    }
if (index == 200) {
     return 826;
    }
if (index == 201) {
     return 631;
    }
if (index == 202) {
     return 813;
    }
if (index == 203) {
     return 836;
    }
if (index == 204) {
     return 652;
    }
if (index == 205) {
     return 632;
    }
if (index == 206) {
     return 812;
    }
if (index == 207) {
     return 836;
    }
if (index == 208) {
     return 811;
    }
if (index == 209) {
     return 836;
    }
if (index == 210) {
     return 801;
    }
if (index == 211) {
     return 822;
    }
if (index > 211) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 693;
    }
if (index == 1) {
     return 649;
    }
if (index == 2) {
     return 660;
    }
if (index == 3) {
     return 653;
    }
if (index == 4) {
     return 661;
    }
if (index == 5) {
     return 640;
    }
if (index == 6) {
     return 649;
    }
if (index == 7) {
     return 668;
    }
if (index == 8) {
     return 661;
    }
if (index == 9) {
     return 652;
    }
if (index == 10) {
     return 661;
    }
if (index == 11) {
     return 652;
    }
if (index == 12) {
     return 661;
    }
if (index == 13) {
     return 652;
    }
if (index == 14) {
     return 661;
    }
if (index == 15) {
     return 849;
    }
if (index == 16) {
     return 661;
    }
if (index == 17) {
     return 652;
    }
if (index == 18) {
     return 661;
    }
if (index == 19) {
     return 652;
    }
if (index == 20) {
     return 661;
    }
if (index == 21) {
     return 652;
    }
if (index == 22) {
     return 858;
    }
if (index == 23) {
     return 849;
    }
if (index == 24) {
     return 661;
    }
if (index == 25) {
     return 652;
    }
if (index == 26) {
     return 661;
    }
if (index == 27) {
     return 660;
    }
if (index == 28) {
     return 646;
    }
if (index == 29) {
     return 660;
    }
if (index == 30) {
     return 660;
    }
if (index == 31) {
     return 661;
    }
if (index == 32) {
     return 661;
    }
if (index == 33) {
     return 661;
    }
if (index == 34) {
     return 661;
    }
if (index == 35) {
     return 661;
    }
if (index == 36) {
     return 661;
    }
if (index == 37) {
     return 661;
    }
if (index == 38) {
     return 661;
    }
if (index == 39) {
     return 661;
    }
if (index == 40) {
     return 661;
    }
if (index == 41) {
     return 649;
    }
if (index == 42) {
     return 661;
    }
if (index == 43) {
     return 661;
    }
if (index == 44) {
     return 661;
    }
if (index == 45) {
     return 845;
    }
if (index == 46) {
     return 661;
    }
if (index == 47) {
     return 661;
    }
if (index == 48) {
     return 661;
    }
if (index == 49) {
     return 661;
    }
if (index == 50) {
     return 661;
    }
if (index == 51) {
     return 661;
    }
if (index == 52) {
     return 839;
    }
if (index == 53) {
     return 845;
    }
if (index == 54) {
     return 845;
    }
if (index == 55) {
     return 845;
    }
if (index == 56) {
     return 1199;
    }
if (index == 57) {
     return 661;
    }
if (index == 58) {
     return 648;
    }
if (index == 59) {
     return 845;
    }
if (index == 60) {
     return 646;
    }
if (index == 61) {
     return 661;
    }
if (index == 62) {
     return 657;
    }
if (index == 63) {
     return 661;
    }
if (index == 64) {
     return 828;
    }
if (index == 65) {
     return 652;
    }
if (index == 66) {
     return 652;
    }
if (index == 67) {
     return 652;
    }
if (index == 68) {
     return 652;
    }
if (index == 69) {
     return 807;
    }
if (index == 70) {
     return 638;
    }
if (index == 71) {
     return 638;
    }
if (index == 72) {
     return 827;
    }
if (index == 73) {
     return 813;
    }
if (index == 74) {
     return 827;
    }
if (index == 75) {
     return 827;
    }
if (index == 76) {
     return 827;
    }
if (index == 77) {
     return 827;
    }
if (index == 78) {
     return 630;
    }
if (index == 79) {
     return 652;
    }
if (index == 80) {
     return 652;
    }
if (index == 81) {
     return 652;
    }
if (index == 82) {
     return 652;
    }
if (index == 83) {
     return 652;
    }
if (index == 84) {
     return 652;
    }
if (index == 85) {
     return 815;
    }
if (index == 86) {
     return 643;
    }
if (index == 87) {
     return 814;
    }
if (index == 88) {
     return 652;
    }
if (index == 89) {
     return 810;
    }
if (index == 90) {
     return 634;
    }
if (index == 91) {
     return 806;
    }
if (index == 92) {
     return 810;
    }
if (index == 93) {
     return 836;
    }
if (index == 94) {
     return 652;
    }
if (index == 95) {
     return 836;
    }
if (index == 96) {
     return 827;
    }
if (index == 97) {
     return 652;
    }
if (index == 98) {
     return 827;
    }
if (index == 99) {
     return 652;
    }
if (index == 100) {
     return 813;
    }
if (index == 101) {
     return 652;
    }
if (index == 102) {
     return 652;
    }
if (index == 103) {
     return 652;
    }
if (index == 104) {
     return 652;
    }
if (index == 105) {
     return 652;
    }
if (index == 106) {
     return 652;
    }
if (index == 107) {
     return 836;
    }
if (index == 108) {
     return 652;
    }
if (index == 109) {
     return 652;
    }
if (index == 110) {
     return 634;
    }
if (index == 111) {
     return 652;
    }
if (index == 112) {
     return 623;
    }
if (index == 113) {
     return 652;
    }
if (index == 114) {
     return 652;
    }
if (index == 115) {
     return 652;
    }
if (index == 116) {
     return 652;
    }
if (index == 117) {
     return 652;
    }
if (index == 118) {
     return 652;
    }
if (index == 119) {
     return 836;
    }
if (index == 120) {
     return 652;
    }
if (index == 121) {
     return 836;
    }
if (index == 122) {
     return 811;
    }
if (index == 123) {
     return 652;
    }
if (index == 124) {
     return 652;
    }
if (index == 125) {
     return 632;
    }
if (index == 126) {
     return 652;
    }
if (index == 127) {
     return 652;
    }
if (index == 128) {
     return 827;
    }
if (index == 129) {
     return 830;
    }
if (index == 130) {
     return 827;
    }
if (index == 131) {
     return 826;
    }
if (index == 132) {
     return 827;
    }
if (index == 133) {
     return 836;
    }
if (index == 134) {
     return 652;
    }
if (index == 135) {
     return 652;
    }
if (index == 136) {
     return 652;
    }
if (index == 137) {
     return 836;
    }
if (index == 138) {
     return 813;
    }
if (index == 139) {
     return 652;
    }
if (index == 140) {
     return 652;
    }
if (index == 141) {
     return 652;
    }
if (index == 142) {
     return 652;
    }
if (index == 143) {
     return 652;
    }
if (index == 144) {
     return 652;
    }
if (index == 145) {
     return 652;
    }
if (index == 146) {
     return 827;
    }
if (index == 147) {
     return 652;
    }
if (index == 148) {
     return 652;
    }
if (index == 149) {
     return 652;
    }
if (index == 150) {
     return 652;
    }
if (index == 151) {
     return 652;
    }
if (index == 152) {
     return 652;
    }
if (index == 153) {
     return 652;
    }
if (index == 154) {
     return 652;
    }
if (index == 155) {
     return 652;
    }
if (index == 156) {
     return 652;
    }
if (index == 157) {
     return 652;
    }
if (index == 158) {
     return 652;
    }
if (index == 159) {
     return 836;
    }
if (index == 160) {
     return 827;
    }
if (index == 161) {
     return 836;
    }
if (index == 162) {
     return 827;
    }
if (index == 163) {
     return 836;
    }
if (index == 164) {
     return 827;
    }
if (index == 165) {
     return 652;
    }
if (index == 166) {
     return 641;
    }
if (index == 167) {
     return 652;
    }
if (index == 168) {
     return 632;
    }
if (index == 169) {
     return 652;
    }
if (index == 170) {
     return 816;
    }
if (index == 171) {
     return 836;
    }
if (index == 172) {
     return 826;
    }
if (index == 173) {
     return 652;
    }
if (index == 174) {
     return 652;
    }
if (index == 175) {
     return 831;
    }
if (index == 176) {
     return 652;
    }
if (index == 177) {
     return 642;
    }
if (index == 178) {
     return 639;
    }
if (index == 179) {
     return 647;
    }
if (index == 180) {
     return 823;
    }
if (index == 181) {
     return 652;
    }
if (index == 182) {
     return 652;
    }
if (index == 183) {
     return 652;
    }
if (index == 184) {
     return 652;
    }
if (index == 185) {
     return 652;
    }
if (index == 186) {
     return 652;
    }
if (index == 187) {
     return 836;
    }
if (index == 188) {
     return 821;
    }
if (index == 189) {
     return 642;
    }
if (index == 190) {
     return 826;
    }
if (index == 191) {
     return 652;
    }
if (index == 192) {
     return 652;
    }
if (index == 193) {
     return 652;
    }
if (index == 194) {
     return 652;
    }
if (index == 195) {
     return 652;
    }
if (index == 196) {
     return 636;
    }
if (index == 197) {
     return 836;
    }
if (index == 198) {
     return 652;
    }
if (index == 199) {
     return 634;
    }
if (index == 200) {
     return 652;
    }
if (index == 201) {
     return 824;
    }
if (index == 202) {
     return 644;
    }
if (index == 203) {
     return 652;
    }
if (index == 204) {
     return 826;
    }
if (index == 205) {
     return 822;
    }
if (index == 206) {
     return 632;
    }
if (index == 207) {
     return 652;
    }
if (index == 208) {
     return 637;
    }
if (index == 209) {
     return 652;
    }
if (index == 210) {
     return 625;
    }
if (index == 211) {
     return 670;
    }
if (index > 211) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:033_' + imgStr + '/digitalImage';
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
br.numLeafs = 212;

// Book title and the URL used for the book title link
br.bookTitle= "Ruines d'Angkor";
br.bookAuthor= "Monod, G. H.";
br.bookPub= "Saigon: Edition photo Nadal, 1920";
br.bookKeyword= "Art, Khmer<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Angkor (Extinct city)--Guidebooks<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cambodia--Antiquities";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:033';

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
