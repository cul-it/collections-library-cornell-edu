//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 770;
    }
if (index == 1) {
     return 735;
    }
if (index == 2) {
     return 721;
    }
if (index == 3) {
     return 676;
    }
if (index == 4) {
     return 1772;
    }
if (index == 5) {
     return 1969;
    }
if (index == 6) {
     return 689;
    }
if (index == 7) {
     return 641;
    }
if (index == 8) {
     return 651;
    }
if (index == 9) {
     return 743;
    }
if (index == 10) {
     return 666;
    }
if (index == 11) {
     return 749;
    }
if (index == 12) {
     return 732;
    }
if (index == 13) {
     return 757;
    }
if (index == 14) {
     return 677;
    }
if (index == 15) {
     return 750;
    }
if (index == 16) {
     return 746;
    }
if (index == 17) {
     return 734;
    }
if (index == 18) {
     return 675;
    }
if (index == 19) {
     return 726;
    }
if (index == 20) {
     return 680;
    }
if (index == 21) {
     return 713;
    }
if (index == 22) {
     return 725;
    }
if (index == 23) {
     return 715;
    }
if (index == 24) {
     return 661;
    }
if (index == 25) {
     return 726;
    }
if (index == 26) {
     return 712;
    }
if (index == 27) {
     return 662;
    }
if (index == 28) {
     return 687;
    }
if (index == 29) {
     return 667;
    }
if (index == 30) {
     return 675;
    }
if (index == 31) {
     return 667;
    }
if (index == 32) {
     return 668;
    }
if (index == 33) {
     return 680;
    }
if (index == 34) {
     return 674;
    }
if (index == 35) {
     return 667;
    }
if (index == 36) {
     return 676;
    }
if (index == 37) {
     return 676;
    }
if (index == 38) {
     return 639;
    }
if (index == 39) {
     return 667;
    }
if (index == 40) {
     return 701;
    }
if (index == 41) {
     return 680;
    }
if (index == 42) {
     return 677;
    }
if (index == 43) {
     return 667;
    }
if (index == 44) {
     return 691;
    }
if (index == 45) {
     return 676;
    }
if (index == 46) {
     return 677;
    }
if (index == 47) {
     return 680;
    }
if (index == 48) {
     return 686;
    }
if (index == 49) {
     return 667;
    }
if (index == 50) {
     return 677;
    }
if (index == 51) {
     return 649;
    }
if (index == 52) {
     return 695;
    }
if (index == 53) {
     return 640;
    }
if (index == 54) {
     return 677;
    }
if (index == 55) {
     return 677;
    }
if (index == 56) {
     return 695;
    }
if (index == 57) {
     return 674;
    }
if (index == 58) {
     return 677;
    }
if (index == 59) {
     return 649;
    }
if (index == 60) {
     return 688;
    }
if (index == 61) {
     return 662;
    }
if (index == 62) {
     return 664;
    }
if (index == 63) {
     return 649;
    }
if (index == 64) {
     return 696;
    }
if (index == 65) {
     return 649;
    }
if (index == 66) {
     return 677;
    }
if (index == 67) {
     return 640;
    }
if (index == 68) {
     return 677;
    }
if (index == 69) {
     return 640;
    }
if (index == 70) {
     return 686;
    }
if (index == 71) {
     return 731;
    }
if (index == 72) {
     return 695;
    }
if (index == 73) {
     return 714;
    }
if (index == 74) {
     return 677;
    }
if (index == 75) {
     return 641;
    }
if (index == 76) {
     return 699;
    }
if (index == 77) {
     return 694;
    }
if (index == 78) {
     return 680;
    }
if (index == 79) {
     return 724;
    }
if (index == 80) {
     return 718;
    }
if (index == 81) {
     return 733;
    }
if (index == 82) {
     return 703;
    }
if (index == 83) {
     return 664;
    }
if (index == 84) {
     return 685;
    }
if (index == 85) {
     return 702;
    }
if (index == 86) {
     return 666;
    }
if (index == 87) {
     return 706;
    }
if (index == 88) {
     return 714;
    }
if (index == 89) {
     return 666;
    }
if (index == 90) {
     return 670;
    }
if (index == 91) {
     return 668;
    }
if (index == 92) {
     return 706;
    }
if (index == 93) {
     return 646;
    }
if (index == 94) {
     return 684;
    }
if (index == 95) {
     return 722;
    }
if (index == 96) {
     return 685;
    }
if (index == 97) {
     return 680;
    }
if (index == 98) {
     return 720;
    }
if (index == 99) {
     return 683;
    }
if (index == 100) {
     return 680;
    }
if (index == 101) {
     return 684;
    }
if (index == 102) {
     return 683;
    }
if (index == 103) {
     return 710;
    }
if (index == 104) {
     return 699;
    }
if (index == 105) {
     return 668;
    }
if (index == 106) {
     return 701;
    }
if (index == 107) {
     return 659;
    }
if (index == 108) {
     return 708;
    }
if (index == 109) {
     return 676;
    }
if (index == 110) {
     return 709;
    }
if (index == 111) {
     return 676;
    }
if (index == 112) {
     return 694;
    }
if (index == 113) {
     return 688;
    }
if (index == 114) {
     return 694;
    }
if (index == 115) {
     return 676;
    }
if (index == 116) {
     return 694;
    }
if (index == 117) {
     return 693;
    }
if (index == 118) {
     return 694;
    }
if (index == 119) {
     return 716;
    }
if (index == 120) {
     return 708;
    }
if (index == 121) {
     return 698;
    }
if (index == 122) {
     return 694;
    }
if (index == 123) {
     return 699;
    }
if (index == 124) {
     return 694;
    }
if (index == 125) {
     return 689;
    }
if (index == 126) {
     return 694;
    }
if (index == 127) {
     return 683;
    }
if (index == 128) {
     return 695;
    }
if (index == 129) {
     return 706;
    }
if (index == 130) {
     return 701;
    }
if (index == 131) {
     return 703;
    }
if (index == 132) {
     return 694;
    }
if (index == 133) {
     return 702;
    }
if (index == 134) {
     return 694;
    }
if (index == 135) {
     return 704;
    }
if (index == 136) {
     return 685;
    }
if (index == 137) {
     return 676;
    }
if (index == 138) {
     return 685;
    }
if (index == 139) {
     return 649;
    }
if (index == 140) {
     return 668;
    }
if (index == 141) {
     return 649;
    }
if (index == 142) {
     return 695;
    }
if (index == 143) {
     return 1080;
    }
if (index > 143) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1048;
    }
if (index == 1) {
     return 1036;
    }
if (index == 2) {
     return 989;
    }
if (index == 3) {
     return 981;
    }
if (index == 4) {
     return 1026;
    }
if (index == 5) {
     return 1739;
    }
if (index == 6) {
     return 1007;
    }
if (index == 7) {
     return 981;
    }
if (index == 8) {
     return 972;
    }
if (index == 9) {
     return 1009;
    }
if (index == 10) {
     return 996;
    }
if (index == 11) {
     return 1003;
    }
if (index == 12) {
     return 997;
    }
if (index == 13) {
     return 1010;
    }
if (index == 14) {
     return 996;
    }
if (index == 15) {
     return 1004;
    }
if (index == 16) {
     return 997;
    }
if (index == 17) {
     return 996;
    }
if (index == 18) {
     return 997;
    }
if (index == 19) {
     return 1001;
    }
if (index == 20) {
     return 993;
    }
if (index == 21) {
     return 983;
    }
if (index == 22) {
     return 997;
    }
if (index == 23) {
     return 995;
    }
if (index == 24) {
     return 986;
    }
if (index == 25) {
     return 986;
    }
if (index == 26) {
     return 997;
    }
if (index == 27) {
     return 982;
    }
if (index == 28) {
     return 995;
    }
if (index == 29) {
     return 963;
    }
if (index == 30) {
     return 960;
    }
if (index == 31) {
     return 963;
    }
if (index == 32) {
     return 955;
    }
if (index == 33) {
     return 972;
    }
if (index == 34) {
     return 959;
    }
if (index == 35) {
     return 963;
    }
if (index == 36) {
     return 992;
    }
if (index == 37) {
     return 969;
    }
if (index == 38) {
     return 985;
    }
if (index == 39) {
     return 963;
    }
if (index == 40) {
     return 972;
    }
if (index == 41) {
     return 972;
    }
if (index == 42) {
     return 955;
    }
if (index == 43) {
     return 963;
    }
if (index == 44) {
     return 965;
    }
if (index == 45) {
     return 969;
    }
if (index == 46) {
     return 955;
    }
if (index == 47) {
     return 972;
    }
if (index == 48) {
     return 961;
    }
if (index == 49) {
     return 963;
    }
if (index == 50) {
     return 955;
    }
if (index == 51) {
     return 964;
    }
if (index == 52) {
     return 967;
    }
if (index == 53) {
     return 964;
    }
if (index == 54) {
     return 955;
    }
if (index == 55) {
     return 982;
    }
if (index == 56) {
     return 967;
    }
if (index == 57) {
     return 981;
    }
if (index == 58) {
     return 955;
    }
if (index == 59) {
     return 964;
    }
if (index == 60) {
     return 963;
    }
if (index == 61) {
     return 972;
    }
if (index == 62) {
     return 984;
    }
if (index == 63) {
     return 955;
    }
if (index == 64) {
     return 968;
    }
if (index == 65) {
     return 955;
    }
if (index == 66) {
     return 955;
    }
if (index == 67) {
     return 955;
    }
if (index == 68) {
     return 954;
    }
if (index == 69) {
     return 955;
    }
if (index == 70) {
     return 962;
    }
if (index == 71) {
     return 1019;
    }
if (index == 72) {
     return 969;
    }
if (index == 73) {
     return 1027;
    }
if (index == 74) {
     return 954;
    }
if (index == 75) {
     return 954;
    }
if (index == 76) {
     return 978;
    }
if (index == 77) {
     return 976;
    }
if (index == 78) {
     return 957;
    }
if (index == 79) {
     return 1037;
    }
if (index == 80) {
     return 1029;
    }
if (index == 81) {
     return 1013;
    }
if (index == 82) {
     return 1008;
    }
if (index == 83) {
     return 984;
    }
if (index == 84) {
     return 1025;
    }
if (index == 85) {
     return 1040;
    }
if (index == 86) {
     return 1001;
    }
if (index == 87) {
     return 1019;
    }
if (index == 88) {
     return 1038;
    }
if (index == 89) {
     return 990;
    }
if (index == 90) {
     return 987;
    }
if (index == 91) {
     return 993;
    }
if (index == 92) {
     return 1025;
    }
if (index == 93) {
     return 972;
    }
if (index == 94) {
     return 989;
    }
if (index == 95) {
     return 999;
    }
if (index == 96) {
     return 1017;
    }
if (index == 97) {
     return 1024;
    }
if (index == 98) {
     return 1025;
    }
if (index == 99) {
     return 1023;
    }
if (index == 100) {
     return 1018;
    }
if (index == 101) {
     return 1001;
    }
if (index == 102) {
     return 1023;
    }
if (index == 103) {
     return 1027;
    }
if (index == 104) {
     return 1022;
    }
if (index == 105) {
     return 981;
    }
if (index == 106) {
     return 983;
    }
if (index == 107) {
     return 981;
    }
if (index == 108) {
     return 997;
    }
if (index == 109) {
     return 981;
    }
if (index == 110) {
     return 982;
    }
if (index == 111) {
     return 981;
    }
if (index == 112) {
     return 972;
    }
if (index == 113) {
     return 989;
    }
if (index == 114) {
     return 972;
    }
if (index == 115) {
     return 981;
    }
if (index == 116) {
     return 972;
    }
if (index == 117) {
     return 993;
    }
if (index == 118) {
     return 972;
    }
if (index == 119) {
     return 1008;
    }
if (index == 120) {
     return 982;
    }
if (index == 121) {
     return 996;
    }
if (index == 122) {
     return 972;
    }
if (index == 123) {
     return 997;
    }
if (index == 124) {
     return 972;
    }
if (index == 125) {
     return 990;
    }
if (index == 126) {
     return 972;
    }
if (index == 127) {
     return 988;
    }
if (index == 128) {
     return 972;
    }
if (index == 129) {
     return 992;
    }
if (index == 130) {
     return 977;
    }
if (index == 131) {
     return 991;
    }
if (index == 132) {
     return 972;
    }
if (index == 133) {
     return 990;
    }
if (index == 134) {
     return 972;
    }
if (index == 135) {
     return 991;
    }
if (index == 136) {
     return 972;
    }
if (index == 137) {
     return 972;
    }
if (index == 138) {
     return 972;
    }
if (index == 139) {
     return 972;
    }
if (index == 140) {
     return 990;
    }
if (index == 141) {
     return 972;
    }
if (index == 142) {
     return 1030;
    }
if (index == 143) {
     return 1662;
    }
if (index > 143) {
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
    var url = '/fedora/get/seapage:189_' + imgStr + '/digitalImage';
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
br.numLeafs = 144;

// Book title and the URL used for the book title link
br.bookTitle= "Navy guide to Cavite and Manila : ... a practical guide and beautiful souvenir";
br.bookAuthor= "no recorded author";
br.bookPub= "Manila: [s.n.], 1908";
br.bookKeyword= "Manila (Philippines)--Guidebooks<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cavite, Philippines (City)--Guidebooks";
br.bookUrl  = '/catalog/sea:189';

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
