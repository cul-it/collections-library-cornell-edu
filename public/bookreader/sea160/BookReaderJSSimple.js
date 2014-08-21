//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 716;
    }
if (index == 1) {
     return 639;
    }
if (index == 2) {
     return 586;
    }
if (index == 3) {
     return 613;
    }
if (index == 4) {
     return 617;
    }
if (index == 5) {
     return 1262;
    }
if (index == 6) {
     return 609;
    }
if (index == 7) {
     return 614;
    }
if (index == 8) {
     return 631;
    }
if (index == 9) {
     return 670;
    }
if (index == 10) {
     return 656;
    }
if (index == 11) {
     return 655;
    }
if (index == 12) {
     return 1328;
    }
if (index == 13) {
     return 615;
    }
if (index == 14) {
     return 640;
    }
if (index == 15) {
     return 654;
    }
if (index == 16) {
     return 657;
    }
if (index == 17) {
     return 614;
    }
if (index == 18) {
     return 617;
    }
if (index == 19) {
     return 646;
    }
if (index == 20) {
     return 648;
    }
if (index == 21) {
     return 641;
    }
if (index == 22) {
     return 634;
    }
if (index == 23) {
     return 617;
    }
if (index == 24) {
     return 625;
    }
if (index == 25) {
     return 614;
    }
if (index == 26) {
     return 622;
    }
if (index == 27) {
     return 648;
    }
if (index == 28) {
     return 633;
    }
if (index == 29) {
     return 674;
    }
if (index == 30) {
     return 645;
    }
if (index == 31) {
     return 663;
    }
if (index == 32) {
     return 656;
    }
if (index == 33) {
     return 635;
    }
if (index == 34) {
     return 624;
    }
if (index == 35) {
     return 640;
    }
if (index == 36) {
     return 596;
    }
if (index == 37) {
     return 667;
    }
if (index == 38) {
     return 648;
    }
if (index == 39) {
     return 652;
    }
if (index == 40) {
     return 647;
    }
if (index == 41) {
     return 652;
    }
if (index == 42) {
     return 1005;
    }
if (index == 43) {
     return 595;
    }
if (index == 44) {
     return 649;
    }
if (index == 45) {
     return 654;
    }
if (index == 46) {
     return 953;
    }
if (index == 47) {
     return 575;
    }
if (index == 48) {
     return 962;
    }
if (index == 49) {
     return 606;
    }
if (index == 50) {
     return 642;
    }
if (index == 51) {
     return 678;
    }
if (index == 52) {
     return 668;
    }
if (index == 53) {
     return 666;
    }
if (index == 54) {
     return 1043;
    }
if (index == 55) {
     return 661;
    }
if (index == 56) {
     return 671;
    }
if (index == 57) {
     return 656;
    }
if (index == 58) {
     return 656;
    }
if (index == 59) {
     return 647;
    }
if (index == 60) {
     return 1011;
    }
if (index == 61) {
     return 664;
    }
if (index == 62) {
     return 628;
    }
if (index == 63) {
     return 635;
    }
if (index == 64) {
     return 637;
    }
if (index == 65) {
     return 652;
    }
if (index == 66) {
     return 645;
    }
if (index == 67) {
     return 646;
    }
if (index == 68) {
     return 640;
    }
if (index == 69) {
     return 652;
    }
if (index == 70) {
     return 1024;
    }
if (index == 71) {
     return 612;
    }
if (index == 72) {
     return 641;
    }
if (index == 73) {
     return 653;
    }
if (index == 74) {
     return 656;
    }
if (index == 75) {
     return 649;
    }
if (index == 76) {
     return 632;
    }
if (index == 77) {
     return 643;
    }
if (index == 78) {
     return 616;
    }
if (index == 79) {
     return 638;
    }
if (index == 80) {
     return 627;
    }
if (index == 81) {
     return 676;
    }
if (index == 82) {
     return 643;
    }
if (index == 83) {
     return 668;
    }
if (index == 84) {
     return 627;
    }
if (index == 85) {
     return 660;
    }
if (index == 86) {
     return 1757;
    }
if (index == 87) {
     return 592;
    }
if (index == 88) {
     return 636;
    }
if (index == 89) {
     return 657;
    }
if (index == 90) {
     return 664;
    }
if (index == 91) {
     return 648;
    }
if (index == 92) {
     return 631;
    }
if (index == 93) {
     return 643;
    }
if (index == 94) {
     return 657;
    }
if (index == 95) {
     return 656;
    }
if (index == 96) {
     return 629;
    }
if (index == 97) {
     return 656;
    }
if (index == 98) {
     return 618;
    }
if (index == 99) {
     return 623;
    }
if (index == 100) {
     return 589;
    }
if (index == 101) {
     return 621;
    }
if (index == 102) {
     return 609;
    }
if (index == 103) {
     return 651;
    }
if (index == 104) {
     return 950;
    }
if (index == 105) {
     return 634;
    }
if (index == 106) {
     return 607;
    }
if (index == 107) {
     return 635;
    }
if (index == 108) {
     return 639;
    }
if (index == 109) {
     return 641;
    }
if (index == 110) {
     return 599;
    }
if (index == 111) {
     return 649;
    }
if (index == 112) {
     return 620;
    }
if (index == 113) {
     return 657;
    }
if (index == 114) {
     return 636;
    }
if (index == 115) {
     return 633;
    }
if (index == 116) {
     return 626;
    }
if (index == 117) {
     return 662;
    }
if (index == 118) {
     return 643;
    }
if (index == 119) {
     return 641;
    }
if (index == 120) {
     return 629;
    }
if (index == 121) {
     return 619;
    }
if (index == 122) {
     return 628;
    }
if (index == 123) {
     return 609;
    }
if (index == 124) {
     return 582;
    }
if (index == 125) {
     return 597;
    }
if (index == 126) {
     return 597;
    }
if (index == 127) {
     return 620;
    }
if (index == 128) {
     return 591;
    }
if (index == 129) {
     return 611;
    }
if (index == 130) {
     return 603;
    }
if (index == 131) {
     return 625;
    }
if (index == 132) {
     return 608;
    }
if (index == 133) {
     return 598;
    }
if (index == 134) {
     return 615;
    }
if (index == 135) {
     return 603;
    }
if (index == 136) {
     return 615;
    }
if (index == 137) {
     return 613;
    }
if (index == 138) {
     return 604;
    }
if (index == 139) {
     return 937;
    }
if (index == 140) {
     return 623;
    }
if (index == 141) {
     return 628;
    }
if (index == 142) {
     return 623;
    }
if (index == 143) {
     return 626;
    }
if (index == 144) {
     return 626;
    }
if (index == 145) {
     return 643;
    }
if (index == 146) {
     return 602;
    }
if (index == 147) {
     return 608;
    }
if (index == 148) {
     return 614;
    }
if (index == 149) {
     return 608;
    }
if (index == 150) {
     return 606;
    }
if (index == 151) {
     return 631;
    }
if (index == 152) {
     return 631;
    }
if (index == 153) {
     return 613;
    }
if (index == 154) {
     return 576;
    }
if (index == 155) {
     return 628;
    }
if (index == 156) {
     return 610;
    }
if (index == 157) {
     return 600;
    }
if (index == 158) {
     return 596;
    }
if (index == 159) {
     return 629;
    }
if (index == 160) {
     return 595;
    }
if (index == 161) {
     return 619;
    }
if (index == 162) {
     return 602;
    }
if (index == 163) {
     return 603;
    }
if (index == 164) {
     return 602;
    }
if (index == 165) {
     return 617;
    }
if (index == 166) {
     return 599;
    }
if (index == 167) {
     return 613;
    }
if (index == 168) {
     return 608;
    }
if (index == 169) {
     return 608;
    }
if (index == 170) {
     return 629;
    }
if (index == 171) {
     return 659;
    }
if (index == 172) {
     return 602;
    }
if (index == 173) {
     return 625;
    }
if (index == 174) {
     return 646;
    }
if (index == 175) {
     return 652;
    }
if (index == 176) {
     return 631;
    }
if (index == 177) {
     return 639;
    }
if (index == 178) {
     return 951;
    }
if (index == 179) {
     return 945;
    }
if (index == 180) {
     return 937;
    }
if (index == 181) {
     return 611;
    }
if (index == 182) {
     return 603;
    }
if (index == 183) {
     return 649;
    }
if (index == 184) {
     return 644;
    }
if (index == 185) {
     return 935;
    }
if (index == 186) {
     return 586;
    }
if (index == 187) {
     return 608;
    }
if (index == 188) {
     return 620;
    }
if (index == 189) {
     return 592;
    }
if (index == 190) {
     return 612;
    }
if (index == 191) {
     return 622;
    }
if (index == 192) {
     return 603;
    }
if (index == 193) {
     return 589;
    }
if (index > 193) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 995;
    }
if (index == 1) {
     return 989;
    }
if (index == 2) {
     return 938;
    }
if (index == 3) {
     return 935;
    }
if (index == 4) {
     return 1021;
    }
if (index == 5) {
     return 1575;
    }
if (index == 6) {
     return 963;
    }
if (index == 7) {
     return 954;
    }
if (index == 8) {
     return 953;
    }
if (index == 9) {
     return 960;
    }
if (index == 10) {
     return 970;
    }
if (index == 11) {
     return 945;
    }
if (index == 12) {
     return 1120;
    }
if (index == 13) {
     return 948;
    }
if (index == 14) {
     return 964;
    }
if (index == 15) {
     return 958;
    }
if (index == 16) {
     return 973;
    }
if (index == 17) {
     return 950;
    }
if (index == 18) {
     return 947;
    }
if (index == 19) {
     return 949;
    }
if (index == 20) {
     return 974;
    }
if (index == 21) {
     return 957;
    }
if (index == 22) {
     return 959;
    }
if (index == 23) {
     return 922;
    }
if (index == 24) {
     return 966;
    }
if (index == 25) {
     return 936;
    }
if (index == 26) {
     return 956;
    }
if (index == 27) {
     return 960;
    }
if (index == 28) {
     return 930;
    }
if (index == 29) {
     return 974;
    }
if (index == 30) {
     return 959;
    }
if (index == 31) {
     return 968;
    }
if (index == 32) {
     return 964;
    }
if (index == 33) {
     return 957;
    }
if (index == 34) {
     return 954;
    }
if (index == 35) {
     return 955;
    }
if (index == 36) {
     return 953;
    }
if (index == 37) {
     return 958;
    }
if (index == 38) {
     return 945;
    }
if (index == 39) {
     return 962;
    }
if (index == 40) {
     return 962;
    }
if (index == 41) {
     return 958;
    }
if (index == 42) {
     return 1603;
    }
if (index == 43) {
     return 954;
    }
if (index == 44) {
     return 954;
    }
if (index == 45) {
     return 953;
    }
if (index == 46) {
     return 662;
    }
if (index == 47) {
     return 950;
    }
if (index == 48) {
     return 659;
    }
if (index == 49) {
     return 942;
    }
if (index == 50) {
     return 947;
    }
if (index == 51) {
     return 947;
    }
if (index == 52) {
     return 956;
    }
if (index == 53) {
     return 953;
    }
if (index == 54) {
     return 1156;
    }
if (index == 55) {
     return 950;
    }
if (index == 56) {
     return 960;
    }
if (index == 57) {
     return 954;
    }
if (index == 58) {
     return 961;
    }
if (index == 59) {
     return 955;
    }
if (index == 60) {
     return 1075;
    }
if (index == 61) {
     return 954;
    }
if (index == 62) {
     return 959;
    }
if (index == 63) {
     return 955;
    }
if (index == 64) {
     return 966;
    }
if (index == 65) {
     return 951;
    }
if (index == 66) {
     return 963;
    }
if (index == 67) {
     return 959;
    }
if (index == 68) {
     return 965;
    }
if (index == 69) {
     return 960;
    }
if (index == 70) {
     return 1056;
    }
if (index == 71) {
     return 933;
    }
if (index == 72) {
     return 948;
    }
if (index == 73) {
     return 955;
    }
if (index == 74) {
     return 948;
    }
if (index == 75) {
     return 945;
    }
if (index == 76) {
     return 941;
    }
if (index == 77) {
     return 957;
    }
if (index == 78) {
     return 941;
    }
if (index == 79) {
     return 961;
    }
if (index == 80) {
     return 940;
    }
if (index == 81) {
     return 963;
    }
if (index == 82) {
     return 956;
    }
if (index == 83) {
     return 954;
    }
if (index == 84) {
     return 950;
    }
if (index == 85) {
     return 947;
    }
if (index == 86) {
     return 1144;
    }
if (index == 87) {
     return 948;
    }
if (index == 88) {
     return 951;
    }
if (index == 89) {
     return 965;
    }
if (index == 90) {
     return 953;
    }
if (index == 91) {
     return 963;
    }
if (index == 92) {
     return 948;
    }
if (index == 93) {
     return 970;
    }
if (index == 94) {
     return 953;
    }
if (index == 95) {
     return 959;
    }
if (index == 96) {
     return 945;
    }
if (index == 97) {
     return 963;
    }
if (index == 98) {
     return 936;
    }
if (index == 99) {
     return 953;
    }
if (index == 100) {
     return 944;
    }
if (index == 101) {
     return 980;
    }
if (index == 102) {
     return 951;
    }
if (index == 103) {
     return 965;
    }
if (index == 104) {
     return 675;
    }
if (index == 105) {
     return 945;
    }
if (index == 106) {
     return 952;
    }
if (index == 107) {
     return 944;
    }
if (index == 108) {
     return 957;
    }
if (index == 109) {
     return 948;
    }
if (index == 110) {
     return 950;
    }
if (index == 111) {
     return 955;
    }
if (index == 112) {
     return 944;
    }
if (index == 113) {
     return 956;
    }
if (index == 114) {
     return 939;
    }
if (index == 115) {
     return 977;
    }
if (index == 116) {
     return 954;
    }
if (index == 117) {
     return 972;
    }
if (index == 118) {
     return 973;
    }
if (index == 119) {
     return 980;
    }
if (index == 120) {
     return 954;
    }
if (index == 121) {
     return 967;
    }
if (index == 122) {
     return 929;
    }
if (index == 123) {
     return 951;
    }
if (index == 124) {
     return 916;
    }
if (index == 125) {
     return 942;
    }
if (index == 126) {
     return 935;
    }
if (index == 127) {
     return 926;
    }
if (index == 128) {
     return 931;
    }
if (index == 129) {
     return 947;
    }
if (index == 130) {
     return 945;
    }
if (index == 131) {
     return 951;
    }
if (index == 132) {
     return 950;
    }
if (index == 133) {
     return 941;
    }
if (index == 134) {
     return 942;
    }
if (index == 135) {
     return 933;
    }
if (index == 136) {
     return 953;
    }
if (index == 137) {
     return 932;
    }
if (index == 138) {
     return 944;
    }
if (index == 139) {
     return 656;
    }
if (index == 140) {
     return 928;
    }
if (index == 141) {
     return 940;
    }
if (index == 142) {
     return 947;
    }
if (index == 143) {
     return 925;
    }
if (index == 144) {
     return 947;
    }
if (index == 145) {
     return 926;
    }
if (index == 146) {
     return 944;
    }
if (index == 147) {
     return 942;
    }
if (index == 148) {
     return 940;
    }
if (index == 149) {
     return 935;
    }
if (index == 150) {
     return 929;
    }
if (index == 151) {
     return 935;
    }
if (index == 152) {
     return 931;
    }
if (index == 153) {
     return 941;
    }
if (index == 154) {
     return 945;
    }
if (index == 155) {
     return 945;
    }
if (index == 156) {
     return 945;
    }
if (index == 157) {
     return 935;
    }
if (index == 158) {
     return 935;
    }
if (index == 159) {
     return 945;
    }
if (index == 160) {
     return 945;
    }
if (index == 161) {
     return 945;
    }
if (index == 162) {
     return 945;
    }
if (index == 163) {
     return 924;
    }
if (index == 164) {
     return 945;
    }
if (index == 165) {
     return 945;
    }
if (index == 166) {
     return 941;
    }
if (index == 167) {
     return 944;
    }
if (index == 168) {
     return 945;
    }
if (index == 169) {
     return 922;
    }
if (index == 170) {
     return 955;
    }
if (index == 171) {
     return 945;
    }
if (index == 172) {
     return 948;
    }
if (index == 173) {
     return 931;
    }
if (index == 174) {
     return 953;
    }
if (index == 175) {
     return 956;
    }
if (index == 176) {
     return 955;
    }
if (index == 177) {
     return 945;
    }
if (index == 178) {
     return 634;
    }
if (index == 179) {
     return 619;
    }
if (index == 180) {
     return 610;
    }
if (index == 181) {
     return 945;
    }
if (index == 182) {
     return 941;
    }
if (index == 183) {
     return 952;
    }
if (index == 184) {
     return 948;
    }
if (index == 185) {
     return 694;
    }
if (index == 186) {
     return 930;
    }
if (index == 187) {
     return 938;
    }
if (index == 188) {
     return 931;
    }
if (index == 189) {
     return 905;
    }
if (index == 190) {
     return 951;
    }
if (index == 191) {
     return 953;
    }
if (index == 192) {
     return 954;
    }
if (index == 193) {
     return 954;
    }
if (index > 193) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:160_' + imgStr + '/digitalImage';
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
br.numLeafs = 194;

// Book title and the URL used for the book title link
br.bookTitle= "West-Java; traveller's guide for Batavia and from Batavia to the Preanger Regencies and Tjilatjap";
br.bookAuthor= "Schulze, Fedor";
br.bookPub= "Batavia: Visser, 1894";
br.bookKeyword= "Java (Indonesia)--Guidebooks";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:160';

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
