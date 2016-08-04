//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 556;
    }
if (index == 1) {
     return 556;
    }
if (index == 2) {
     return 555;
    }
if (index == 3) {
     return 556;
    }
if (index == 4) {
     return 556;
    }
if (index == 5) {
     return 556;
    }
if (index == 6) {
     return 556;
    }
if (index == 7) {
     return 556;
    }
if (index == 8) {
     return 556;
    }
if (index == 9) {
     return 556;
    }
if (index == 10) {
     return 556;
    }
if (index == 11) {
     return 555;
    }
if (index == 12) {
     return 556;
    }
if (index == 13) {
     return 556;
    }
if (index == 14) {
     return 556;
    }
if (index == 15) {
     return 556;
    }
if (index == 16) {
     return 556;
    }
if (index == 17) {
     return 556;
    }
if (index == 18) {
     return 555;
    }
if (index == 19) {
     return 555;
    }
if (index == 20) {
     return 555;
    }
if (index == 21) {
     return 554;
    }
if (index == 22) {
     return 556;
    }
if (index == 23) {
     return 556;
    }
if (index == 24) {
     return 556;
    }
if (index == 25) {
     return 556;
    }
if (index == 26) {
     return 556;
    }
if (index == 27) {
     return 556;
    }
if (index == 28) {
     return 556;
    }
if (index == 29) {
     return 556;
    }
if (index == 30) {
     return 556;
    }
if (index == 31) {
     return 556;
    }
if (index == 32) {
     return 556;
    }
if (index == 33) {
     return 555;
    }
if (index == 34) {
     return 555;
    }
if (index == 35) {
     return 556;
    }
if (index == 36) {
     return 556;
    }
if (index == 37) {
     return 555;
    }
if (index == 38) {
     return 555;
    }
if (index == 39) {
     return 556;
    }
if (index == 40) {
     return 556;
    }
if (index == 41) {
     return 555;
    }
if (index == 42) {
     return 556;
    }
if (index == 43) {
     return 556;
    }
if (index == 44) {
     return 556;
    }
if (index == 45) {
     return 556;
    }
if (index == 46) {
     return 556;
    }
if (index == 47) {
     return 556;
    }
if (index == 48) {
     return 556;
    }
if (index > 48) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 917;
    }
if (index == 1) {
     return 923;
    }
if (index == 2) {
     return 923;
    }
if (index == 3) {
     return 923;
    }
if (index == 4) {
     return 923;
    }
if (index == 5) {
     return 923;
    }
if (index == 6) {
     return 923;
    }
if (index == 7) {
     return 923;
    }
if (index == 8) {
     return 923;
    }
if (index == 9) {
     return 923;
    }
if (index == 10) {
     return 923;
    }
if (index == 11) {
     return 923;
    }
if (index == 12) {
     return 923;
    }
if (index == 13) {
     return 923;
    }
if (index == 14) {
     return 923;
    }
if (index == 15) {
     return 923;
    }
if (index == 16) {
     return 923;
    }
if (index == 17) {
     return 923;
    }
if (index == 18) {
     return 923;
    }
if (index == 19) {
     return 923;
    }
if (index == 20) {
     return 923;
    }
if (index == 21) {
     return 921;
    }
if (index == 22) {
     return 923;
    }
if (index == 23) {
     return 923;
    }
if (index == 24) {
     return 923;
    }
if (index == 25) {
     return 923;
    }
if (index == 26) {
     return 923;
    }
if (index == 27) {
     return 923;
    }
if (index == 28) {
     return 923;
    }
if (index == 29) {
     return 923;
    }
if (index == 30) {
     return 923;
    }
if (index == 31) {
     return 923;
    }
if (index == 32) {
     return 923;
    }
if (index == 33) {
     return 923;
    }
if (index == 34) {
     return 923;
    }
if (index == 35) {
     return 923;
    }
if (index == 36) {
     return 923;
    }
if (index == 37) {
     return 923;
    }
if (index == 38) {
     return 923;
    }
if (index == 39) {
     return 923;
    }
if (index == 40) {
     return 923;
    }
if (index == 41) {
     return 923;
    }
if (index == 42) {
     return 923;
    }
if (index == 43) {
     return 923;
    }
if (index == 44) {
     return 923;
    }
if (index == 45) {
     return 923;
    }
if (index == 46) {
     return 923;
    }
if (index == 47) {
     return 923;
    }
if (index == 48) {
     return 923;
    }
if (index > 48) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:01207_' + imgStr + '/digitalImage';
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
br.numLeafs = 49;

// Book title and the URL used for the book title link
br.bookTitle= "Intermediate Interrogation Report (IIR) / Prisoner: O/Gruf Kaltenbrunner, Ernst / SECRET / Headquarters 12th Army Group / Interrogation Center / APO 655";
br.bookAuthor= "Harry K. Lennon";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-06-28";
br.bookKeyword= "RSHA; Amt I; Amt II; Amt III; Amt IV; Amt V; Amt VI; RSHA personnel; German foreign intelligence; Balkans; Gestapo; German resistance; German foreign policy; Rumania; Iron Guard; Hungary; Arrow Cross; Croatia; IMRO; Negotiated peace; Red Cross; Austrian Project; Austrian Nazis; Werwolf; SD; Luftwaffe; Kripo; Russia; Foreign agents; Japan; Japanese foreign intelligence";
br.bookUrl  = '/nuremberg/catalog/nur:01207';

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
