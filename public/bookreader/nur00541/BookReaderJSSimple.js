//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 569;
    }
if (index == 1) {
     return 569;
    }
if (index == 2) {
     return 557;
    }
if (index == 3) {
     return 546;
    }
if (index == 4) {
     return 569;
    }
if (index == 5) {
     return 569;
    }
if (index == 6) {
     return 569;
    }
if (index == 7) {
     return 569;
    }
if (index == 8) {
     return 561;
    }
if (index == 9) {
     return 566;
    }
if (index == 10) {
     return 566;
    }
if (index == 11) {
     return 564;
    }
if (index == 12) {
     return 569;
    }
if (index == 13) {
     return 566;
    }
if (index == 14) {
     return 566;
    }
if (index == 15) {
     return 568;
    }
if (index == 16) {
     return 569;
    }
if (index == 17) {
     return 569;
    }
if (index == 18) {
     return 569;
    }
if (index == 19) {
     return 569;
    }
if (index == 20) {
     return 569;
    }
if (index == 21) {
     return 569;
    }
if (index == 22) {
     return 592;
    }
if (index == 23) {
     return 568;
    }
if (index == 24) {
     return 569;
    }
if (index == 25) {
     return 569;
    }
if (index == 26) {
     return 569;
    }
if (index == 27) {
     return 554;
    }
if (index == 28) {
     return 569;
    }
if (index == 29) {
     return 569;
    }
if (index == 30) {
     return 569;
    }
if (index == 31) {
     return 569;
    }
if (index == 32) {
     return 569;
    }
if (index == 33) {
     return 569;
    }
if (index == 34) {
     return 569;
    }
if (index == 35) {
     return 569;
    }
if (index == 36) {
     return 569;
    }
if (index == 37) {
     return 569;
    }
if (index == 38) {
     return 569;
    }
if (index == 39) {
     return 567;
    }
if (index == 40) {
     return 569;
    }
if (index == 41) {
     return 569;
    }
if (index == 42) {
     return 591;
    }
if (index == 43) {
     return 587;
    }
if (index == 44) {
     return 590;
    }
if (index == 45) {
     return 569;
    }
if (index == 46) {
     return 569;
    }
if (index == 47) {
     return 569;
    }
if (index == 48) {
     return 569;
    }
if (index == 49) {
     return 569;
    }
if (index == 50) {
     return 582;
    }
if (index == 51) {
     return 569;
    }
if (index == 52) {
     return 584;
    }
if (index == 53) {
     return 556;
    }
if (index == 54) {
     return 539;
    }
if (index == 55) {
     return 552;
    }
if (index == 56) {
     return 556;
    }
if (index == 57) {
     return 555;
    }
if (index == 58) {
     return 569;
    }
if (index == 59) {
     return 569;
    }
if (index == 60) {
     return 569;
    }
if (index == 61) {
     return 560;
    }
if (index == 62) {
     return 562;
    }
if (index == 63) {
     return 555;
    }
if (index == 64) {
     return 550;
    }
if (index == 65) {
     return 554;
    }
if (index == 66) {
     return 569;
    }
if (index == 67) {
     return 569;
    }
if (index == 68) {
     return 569;
    }
if (index == 69) {
     return 569;
    }
if (index == 70) {
     return 569;
    }
if (index == 71) {
     return 569;
    }
if (index == 72) {
     return 569;
    }
if (index == 73) {
     return 569;
    }
if (index == 74) {
     return 538;
    }
if (index == 75) {
     return 558;
    }
if (index == 76) {
     return 553;
    }
if (index == 77) {
     return 569;
    }
if (index == 78) {
     return 593;
    }
if (index == 79) {
     return 569;
    }
if (index == 80) {
     return 585;
    }
if (index == 81) {
     return 569;
    }
if (index == 82) {
     return 580;
    }
if (index == 83) {
     return 569;
    }
if (index == 84) {
     return 533;
    }
if (index == 85) {
     return 563;
    }
if (index == 86) {
     return 545;
    }
if (index == 87) {
     return 562;
    }
if (index == 88) {
     return 569;
    }
if (index == 89) {
     return 553;
    }
if (index == 90) {
     return 569;
    }
if (index > 90) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 958;
    }
if (index == 1) {
     return 945;
    }
if (index == 2) {
     return 937;
    }
if (index == 3) {
     return 929;
    }
if (index == 4) {
     return 941;
    }
if (index == 5) {
     return 940;
    }
if (index == 6) {
     return 941;
    }
if (index == 7) {
     return 940;
    }
if (index == 8) {
     return 928;
    }
if (index == 9) {
     return 920;
    }
if (index == 10) {
     return 928;
    }
if (index == 11) {
     return 930;
    }
if (index == 12) {
     return 941;
    }
if (index == 13) {
     return 924;
    }
if (index == 14) {
     return 928;
    }
if (index == 15) {
     return 920;
    }
if (index == 16) {
     return 928;
    }
if (index == 17) {
     return 927;
    }
if (index == 18) {
     return 927;
    }
if (index == 19) {
     return 927;
    }
if (index == 20) {
     return 927;
    }
if (index == 21) {
     return 927;
    }
if (index == 22) {
     return 928;
    }
if (index == 23) {
     return 922;
    }
if (index == 24) {
     return 927;
    }
if (index == 25) {
     return 920;
    }
if (index == 26) {
     return 927;
    }
if (index == 27) {
     return 927;
    }
if (index == 28) {
     return 927;
    }
if (index == 29) {
     return 927;
    }
if (index == 30) {
     return 927;
    }
if (index == 31) {
     return 927;
    }
if (index == 32) {
     return 927;
    }
if (index == 33) {
     return 927;
    }
if (index == 34) {
     return 927;
    }
if (index == 35) {
     return 927;
    }
if (index == 36) {
     return 927;
    }
if (index == 37) {
     return 927;
    }
if (index == 38) {
     return 927;
    }
if (index == 39) {
     return 920;
    }
if (index == 40) {
     return 927;
    }
if (index == 41) {
     return 927;
    }
if (index == 42) {
     return 952;
    }
if (index == 43) {
     return 931;
    }
if (index == 44) {
     return 951;
    }
if (index == 45) {
     return 927;
    }
if (index == 46) {
     return 940;
    }
if (index == 47) {
     return 927;
    }
if (index == 48) {
     return 940;
    }
if (index == 49) {
     return 927;
    }
if (index == 50) {
     return 950;
    }
if (index == 51) {
     return 927;
    }
if (index == 52) {
     return 957;
    }
if (index == 53) {
     return 944;
    }
if (index == 54) {
     return 947;
    }
if (index == 55) {
     return 942;
    }
if (index == 56) {
     return 944;
    }
if (index == 57) {
     return 940;
    }
if (index == 58) {
     return 967;
    }
if (index == 59) {
     return 945;
    }
if (index == 60) {
     return 967;
    }
if (index == 61) {
     return 945;
    }
if (index == 62) {
     return 952;
    }
if (index == 63) {
     return 945;
    }
if (index == 64) {
     return 951;
    }
if (index == 65) {
     return 941;
    }
if (index == 66) {
     return 967;
    }
if (index == 67) {
     return 945;
    }
if (index == 68) {
     return 967;
    }
if (index == 69) {
     return 945;
    }
if (index == 70) {
     return 967;
    }
if (index == 71) {
     return 945;
    }
if (index == 72) {
     return 967;
    }
if (index == 73) {
     return 945;
    }
if (index == 74) {
     return 947;
    }
if (index == 75) {
     return 941;
    }
if (index == 76) {
     return 959;
    }
if (index == 77) {
     return 945;
    }
if (index == 78) {
     return 975;
    }
if (index == 79) {
     return 945;
    }
if (index == 80) {
     return 966;
    }
if (index == 81) {
     return 945;
    }
if (index == 82) {
     return 962;
    }
if (index == 83) {
     return 945;
    }
if (index == 84) {
     return 928;
    }
if (index == 85) {
     return 929;
    }
if (index == 86) {
     return 946;
    }
if (index == 87) {
     return 911;
    }
if (index == 88) {
     return 967;
    }
if (index == 89) {
     return 921;
    }
if (index == 90) {
     return 967;
    }
if (index > 90) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00541_' + imgStr + '/digitalImage';
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
br.numLeafs = 91;

// Book title and the URL used for the book title link
br.bookTitle= "In The International Military Tribunal Trial Brief/ Criminality of Das Korps Der Politischen Leiter Der Nationalsozialistischen Deutschen Arbeiterpartei (Leadership Corps of the Nazi Party) ";
br.bookAuthor= "Thomas F. Lambert, Jr., Lt. (jg), USNR";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-11-10";
br.bookKeyword= "Nazi Party; Leadership Corps; NSDAP; SS; SA; Gestapo; Reichsleiter (Reich Leader); Gauleiter (District Leader); Kreisleiter (County Leader); Ortsgruppenleiter (Local Chapter Leader); Zellenleiter (Cell Leader); Blockleiter (Block Leader); \"Hoheitstrager\" (\"Bearers of Sovereignty\"); Politischer Leiter; Reich Directorate; Per Hoheitstrager; Hilter Youth (HJ); Conspiracy; Greater German Reich; \"Leadership Principle\"; Anti-Semitism; Homestead Law; Law for the Protection of German Blood and Honor; \"Jewish Star\"; Christian Churches; Nazi Catechism; Nazi Religion; Trade Unions; Plundering and Looting of Public and Private Property; \"Einsatzstab Rosenberg\"; Civil Service; Citizenship Law; Party and State; Jews; Foreign workers; \"Strength Through Joy\"; \"Plant Troops\"; \"Factory Troops\"; \"ideological shock squad\"; Confiscation; Seizure; Suppression; Regulation; Exclusion; Protection; Persecution; Deportation; Enslavement; Extermination; Execution; Murder; Crimes Against Peace; War Crimes; Crimes Against Humanity";
br.bookUrl  = '/nuremberg/catalog/nur:00541';

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
