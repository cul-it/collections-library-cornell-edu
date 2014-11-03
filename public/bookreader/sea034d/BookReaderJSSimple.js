//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 520;
    }
if (index == 1) {
     return 958;
    }
if (index == 2) {
     return 928;
    }
if (index == 3) {
     return 958;
    }
if (index == 4) {
     return 928;
    }
if (index == 5) {
     return 958;
    }
if (index == 6) {
     return 928;
    }
if (index == 7) {
     return 520;
    }
if (index == 8) {
     return 957;
    }
if (index == 9) {
     return 506;
    }
if (index == 10) {
     return 928;
    }
if (index == 11) {
     return 971;
    }
if (index == 12) {
     return 928;
    }
if (index == 13) {
     return 952;
    }
if (index == 14) {
     return 928;
    }
if (index == 15) {
     return 910;
    }
if (index == 16) {
     return 928;
    }
if (index == 17) {
     return 910;
    }
if (index == 18) {
     return 928;
    }
if (index == 19) {
     return 910;
    }
if (index == 20) {
     return 886;
    }
if (index == 21) {
     return 910;
    }
if (index == 22) {
     return 953;
    }
if (index == 23) {
     return 890;
    }
if (index == 24) {
     return 941;
    }
if (index == 25) {
     return 910;
    }
if (index == 26) {
     return 882;
    }
if (index == 27) {
     return 927;
    }
if (index == 28) {
     return 852;
    }
if (index == 29) {
     return 910;
    }
if (index == 30) {
     return 926;
    }
if (index == 31) {
     return 926;
    }
if (index == 32) {
     return 930;
    }
if (index == 33) {
     return 932;
    }
if (index == 34) {
     return 916;
    }
if (index == 35) {
     return 936;
    }
if (index == 36) {
     return 926;
    }
if (index == 37) {
     return 910;
    }
if (index == 38) {
     return 908;
    }
if (index == 39) {
     return 931;
    }
if (index == 40) {
     return 770;
    }
if (index == 41) {
     return 910;
    }
if (index == 42) {
     return 903;
    }
if (index == 43) {
     return 930;
    }
if (index == 44) {
     return 908;
    }
if (index == 45) {
     return 930;
    }
if (index == 46) {
     return 902;
    }
if (index == 47) {
     return 932;
    }
if (index == 48) {
     return 918;
    }
if (index == 49) {
     return 910;
    }
if (index == 50) {
     return 902;
    }
if (index == 51) {
     return 796;
    }
if (index == 52) {
     return 768;
    }
if (index == 53) {
     return 900;
    }
if (index == 54) {
     return 888;
    }
if (index == 55) {
     return 910;
    }
if (index == 56) {
     return 888;
    }
if (index == 57) {
     return 910;
    }
if (index == 58) {
     return 906;
    }
if (index == 59) {
     return 910;
    }
if (index == 60) {
     return 920;
    }
if (index == 61) {
     return 874;
    }
if (index == 62) {
     return 840;
    }
if (index == 63) {
     return 890;
    }
if (index == 64) {
     return 918;
    }
if (index == 65) {
     return 914;
    }
if (index == 66) {
     return 888;
    }
if (index == 67) {
     return 944;
    }
if (index == 68) {
     return 912;
    }
if (index == 69) {
     return 945;
    }
if (index == 70) {
     return 930;
    }
if (index == 71) {
     return 944;
    }
if (index == 72) {
     return 912;
    }
if (index == 73) {
     return 949;
    }
if (index == 74) {
     return 888;
    }
if (index == 75) {
     return 949;
    }
if (index == 76) {
     return 963;
    }
if (index == 77) {
     return 936;
    }
if (index == 78) {
     return 896;
    }
if (index == 79) {
     return 910;
    }
if (index == 80) {
     return 970;
    }
if (index == 81) {
     return 910;
    }
if (index == 82) {
     return 955;
    }
if (index == 83) {
     return 970;
    }
if (index == 84) {
     return 974;
    }
if (index == 85) {
     return 860;
    }
if (index == 86) {
     return 962;
    }
if (index == 87) {
     return 953;
    }
if (index == 88) {
     return 808;
    }
if (index == 89) {
     return 978;
    }
if (index == 90) {
     return 948;
    }
if (index == 91) {
     return 936;
    }
if (index == 92) {
     return 910;
    }
if (index == 93) {
     return 945;
    }
if (index == 94) {
     return 952;
    }
if (index == 95) {
     return 860;
    }
if (index == 96) {
     return 994;
    }
if (index == 97) {
     return 938;
    }
if (index == 98) {
     return 962;
    }
if (index == 99) {
     return 936;
    }
if (index == 100) {
     return 931;
    }
if (index == 101) {
     return 944;
    }
if (index == 102) {
     return 842;
    }
if (index == 103) {
     return 962;
    }
if (index == 104) {
     return 942;
    }
if (index == 105) {
     return 964;
    }
if (index == 106) {
     return 928;
    }
if (index == 107) {
     return 960;
    }
if (index == 108) {
     return 504;
    }
if (index == 109) {
     return 972;
    }
if (index == 110) {
     return 906;
    }
if (index == 111) {
     return 998;
    }
if (index == 112) {
     return 976;
    }
if (index == 113) {
     return 957;
    }
if (index == 114) {
     return 960;
    }
if (index == 115) {
     return 970;
    }
if (index == 116) {
     return 934;
    }
if (index == 117) {
     return 975;
    }
if (index == 118) {
     return 938;
    }
if (index == 119) {
     return 980;
    }
if (index == 120) {
     return 748;
    }
if (index == 121) {
     return 977;
    }
if (index == 122) {
     return 954;
    }
if (index == 123) {
     return 976;
    }
if (index == 124) {
     return 922;
    }
if (index == 125) {
     return 996;
    }
if (index == 126) {
     return 942;
    }
if (index == 127) {
     return 999;
    }
if (index == 128) {
     return 958;
    }
if (index == 129) {
     return 988;
    }
if (index == 130) {
     return 950;
    }
if (index == 131) {
     return 910;
    }
if (index == 132) {
     return 739;
    }
if (index == 133) {
     return 910;
    }
if (index == 134) {
     return 951;
    }
if (index == 135) {
     return 940;
    }
if (index == 136) {
     return 928;
    }
if (index == 137) {
     return 910;
    }
if (index == 138) {
     return 923;
    }
if (index == 139) {
     return 931;
    }
if (index == 140) {
     return 947;
    }
if (index == 141) {
     return 910;
    }
if (index == 142) {
     return 952;
    }
if (index == 143) {
     return 940;
    }
if (index == 144) {
     return 899;
    }
if (index == 145) {
     return 942;
    }
if (index == 146) {
     return 944;
    }
if (index == 147) {
     return 944;
    }
if (index == 148) {
     return 939;
    }
if (index == 149) {
     return 945;
    }
if (index == 150) {
     return 923;
    }
if (index == 151) {
     return 975;
    }
if (index == 152) {
     return 908;
    }
if (index == 153) {
     return 910;
    }
if (index == 154) {
     return 916;
    }
if (index == 155) {
     return 916;
    }
if (index == 156) {
     return 923;
    }
if (index == 157) {
     return 910;
    }
if (index > 157) {
     return 400;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 831;
    }
if (index == 1) {
     return 813;
    }
if (index == 2) {
     return 776;
    }
if (index == 3) {
     return 813;
    }
if (index == 4) {
     return 776;
    }
if (index == 5) {
     return 813;
    }
if (index == 6) {
     return 776;
    }
if (index == 7) {
     return 830;
    }
if (index == 8) {
     return 784;
    }
if (index == 9) {
     return 823;
    }
if (index == 10) {
     return 776;
    }
if (index == 11) {
     return 813;
    }
if (index == 12) {
     return 776;
    }
if (index == 13) {
     return 820;
    }
if (index == 14) {
     return 776;
    }
if (index == 15) {
     return 800;
    }
if (index == 16) {
     return 776;
    }
if (index == 17) {
     return 800;
    }
if (index == 18) {
     return 776;
    }
if (index == 19) {
     return 800;
    }
if (index == 20) {
     return 758;
    }
if (index == 21) {
     return 800;
    }
if (index == 22) {
     return 783;
    }
if (index == 23) {
     return 800;
    }
if (index == 24) {
     return 785;
    }
if (index == 25) {
     return 800;
    }
if (index == 26) {
     return 785;
    }
if (index == 27) {
     return 804;
    }
if (index == 28) {
     return 764;
    }
if (index == 29) {
     return 800;
    }
if (index == 30) {
     return 786;
    }
if (index == 31) {
     return 804;
    }
if (index == 32) {
     return 787;
    }
if (index == 33) {
     return 806;
    }
if (index == 34) {
     return 784;
    }
if (index == 35) {
     return 808;
    }
if (index == 36) {
     return 786;
    }
if (index == 37) {
     return 800;
    }
if (index == 38) {
     return 781;
    }
if (index == 39) {
     return 806;
    }
if (index == 40) {
     return 857;
    }
if (index == 41) {
     return 800;
    }
if (index == 42) {
     return 780;
    }
if (index == 43) {
     return 806;
    }
if (index == 44) {
     return 781;
    }
if (index == 45) {
     return 806;
    }
if (index == 46) {
     return 780;
    }
if (index == 47) {
     return 806;
    }
if (index == 48) {
     return 784;
    }
if (index == 49) {
     return 800;
    }
if (index == 50) {
     return 780;
    }
if (index == 51) {
     return 892;
    }
if (index == 52) {
     return 872;
    }
if (index == 53) {
     return 809;
    }
if (index == 54) {
     return 776;
    }
if (index == 55) {
     return 800;
    }
if (index == 56) {
     return 776;
    }
if (index == 57) {
     return 800;
    }
if (index == 58) {
     return 780;
    }
if (index == 59) {
     return 800;
    }
if (index == 60) {
     return 784;
    }
if (index == 61) {
     return 796;
    }
if (index == 62) {
     return 764;
    }
if (index == 63) {
     return 704;
    }
if (index == 64) {
     return 784;
    }
if (index == 65) {
     return 808;
    }
if (index == 66) {
     return 776;
    }
if (index == 67) {
     return 810;
    }
if (index == 68) {
     return 782;
    }
if (index == 69) {
     return 810;
    }
if (index == 70) {
     return 730;
    }
if (index == 71) {
     return 810;
    }
if (index == 72) {
     return 782;
    }
if (index == 73) {
     return 811;
    }
if (index == 74) {
     return 776;
    }
if (index == 75) {
     return 811;
    }
if (index == 76) {
     return 787;
    }
if (index == 77) {
     return 810;
    }
if (index == 78) {
     return 796;
    }
if (index == 79) {
     return 800;
    }
if (index == 80) {
     return 798;
    }
if (index == 81) {
     return 800;
    }
if (index == 82) {
     return 794;
    }
if (index == 83) {
     return 816;
    }
if (index == 84) {
     return 800;
    }
if (index == 85) {
     return 788;
    }
if (index == 86) {
     return 796;
    }
if (index == 87) {
     return 812;
    }
if (index == 88) {
     return 750;
    }
if (index == 89) {
     return 818;
    }
if (index == 90) {
     return 800;
    }
if (index == 91) {
     return 808;
    }
if (index == 92) {
     return 800;
    }
if (index == 93) {
     return 810;
    }
if (index == 94) {
     return 794;
    }
if (index == 95) {
     return 788;
    }
if (index == 96) {
     return 805;
    }
if (index == 97) {
     return 808;
    }
if (index == 98) {
     return 796;
    }
if (index == 99) {
     return 808;
    }
if (index == 100) {
     return 802;
    }
if (index == 101) {
     return 810;
    }
if (index == 102) {
     return 758;
    }
if (index == 103) {
     return 814;
    }
if (index == 104) {
     return 800;
    }
if (index == 105) {
     return 815;
    }
if (index == 106) {
     return 787;
    }
if (index == 107) {
     return 814;
    }
if (index == 108) {
     return 804;
    }
if (index == 109) {
     return 817;
    }
if (index == 110) {
     return 768;
    }
if (index == 111) {
     return 824;
    }
if (index == 112) {
     return 774;
    }
if (index == 113) {
     return 813;
    }
if (index == 114) {
     return 770;
    }
if (index == 115) {
     return 816;
    }
if (index == 116) {
     return 770;
    }
if (index == 117) {
     return 818;
    }
if (index == 118) {
     return 763;
    }
if (index == 119) {
     return 820;
    }
if (index == 120) {
     return 895;
    }
if (index == 121) {
     return 828;
    }
if (index == 122) {
     return 772;
    }
if (index == 123) {
     return 818;
    }
if (index == 124) {
     return 766;
    }
if (index == 125) {
     return 824;
    }
if (index == 126) {
     return 772;
    }
if (index == 127) {
     return 824;
    }
if (index == 128) {
     return 775;
    }
if (index == 129) {
     return 822;
    }
if (index == 130) {
     return 776;
    }
if (index == 131) {
     return 800;
    }
if (index == 132) {
     return 874;
    }
if (index == 133) {
     return 800;
    }
if (index == 134) {
     return 772;
    }
if (index == 135) {
     return 808;
    }
if (index == 136) {
     return 760;
    }
if (index == 137) {
     return 800;
    }
if (index == 138) {
     return 760;
    }
if (index == 139) {
     return 806;
    }
if (index == 140) {
     return 767;
    }
if (index == 141) {
     return 800;
    }
if (index == 142) {
     return 768;
    }
if (index == 143) {
     return 808;
    }
if (index == 144) {
     return 760;
    }
if (index == 145) {
     return 809;
    }
if (index == 146) {
     return 766;
    }
if (index == 147) {
     return 816;
    }
if (index == 148) {
     return 764;
    }
if (index == 149) {
     return 810;
    }
if (index == 150) {
     return 760;
    }
if (index == 151) {
     return 818;
    }
if (index == 152) {
     return 760;
    }
if (index == 153) {
     return 800;
    }
if (index == 154) {
     return 763;
    }
if (index == 155) {
     return 763;
    }
if (index == 156) {
     return 760;
    }
if (index == 157) {
     return 800;
    }
if (index > 157) {
     return 600;
    }
}

// We load the images from archive.org -- you can modify this function to retrieve images
// using a different URL structure
br.getPageURI = function(index, reduce, rotate) {
    // reduce and rotate are ignored in this simple implementation, but we
    // could e.g. look at reduce and load images from a different directory
    // or pass the information to an image server
    var imgStr = (index+1).toString();
    var url = '/fedora/get/seapage:034d_' + imgStr + '/digitalImage';
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
br.bookUrl  = '/catalog/sea:034d';

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
