//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 32) {
     return 1029;
    }
else if (index == 40) {
     return 1025;
    }
else if (index == 44) {
     return 1027;
    }
else if (index == 80) {
     return 1023;
    }
else if (index == 82) {
     return 639;
    }
else if (index == 86) {
     return 1033;
    }
else if (index == 92) {
     return 1034;
    }
else if (index == 100) {
     return 1032;
    }
else if (index == 116) {
     return 1031;
    }
else if (index == 130) {
     return 1018;
    }
else if (index == 134) {
     return 1035;
    }
else if (index == 144) {
     return 1019;
    }
else if (index == 158) {
     return 636;
    }
else if (index == 174) {
     return 1033;
    }
else if (index == 182) {
     return 1028;
    }
else if (index == 198) {
     return 1030;
    }
else if (index == 218) {
     return 1018;
    }
else if (index == 226) {
     return 1008;
    }
else if (index == 278) {
     return 1016;
    }
else if (index == 298) {
     return 1008;
    }
else if (index == 344) {
     return 1019;
    }
else if (index == 348) {
     return 1029;
    }
else if (index == 424) {
     return 1028;
    }
else if (index == 432) {
     return 1032;
    }
else if (index == 502) {
     return 1029;
    }
else if (index == 532) {
      return 1025;
     }
     else {
     return 630;
     }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
 if (index == 32) {
     return 606;
    }
  else if (index == 40) {
     return 604;
    }
  else if (index == 44) {
     return 633;
    }
else if (index == 80) {
     return 630;
    }
else if (index == 82) {
     return 1030;
    }
else if (index == 86) {
     return 638;
    }
else if (index == 92) {
     return 643;
    }
else if (index == 100) {
     return 637;
    }
else if (index == 116) {
     return 633;
    }
else if (index == 130) {
     return 642;
    }
else if (index == 134) {
     return 620;
    }
else if (index == 144) {
     return 635;
    }
else if (index == 158) {
     return 1031;
    }
else if (index == 174) {
     return 605;
    }
else if (index == 182) {
     return 609;
    }
else if (index == 198) {
     return 622;
    }
else if (index == 218) {
     return 621;
    }
else if (index == 226) {
     return 622;
    }
else if (index == 278) {
     return 641;
    }
else if (index == 298) {
     return 618;
    }
else if (index == 344) {
     return 626;
    }
else if (index == 348) {
     return 621;
    }
else if (index == 424) {
     return 607;
    }
else if (index == 432) {
     return 644;
    }
else if (index == 502) {
     return 619;
    }
else if (index == 532) {
     return 622;
    }
   else {
     return 1032;
     }
}

// We load the images from archive.org -- you can modify this function to retrieve images
// using a different URL structure
br.getPageURI = function(index, reduce, rotate) {
    // reduce and rotate are ignored in this simple implementation, but we
    // could e.g. look at reduce and load images from a different directory
    // or pass the information to an image server
    var imgStr = (index+1).toString();
    var url = '/fedora/get/seapage:087_' + imgStr + '/digitalImage';
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
br.numLeafs = 558;

// Book title and the URL used for the book title link
br.bookTitle= "Siam and Laos : as seen by our American missionaries";
br.bookAuthor= "Backus, Mary";
br.bookPub= "Philadelphia: Presbyterian board of publication, 1884";
br.bookKeyword= "Missions--Thailand<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Missions--Laos<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thailand--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Laos--Description and travel";
br.bookUrl  = '/catalog/sea:087';

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
