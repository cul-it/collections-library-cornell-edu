#!/usr/bin/perl
#############################################################################
# File: make-docs.pl
#------------------------------------------------------------------------
# Description:
#     This program will read a list of ids and create doc files for 
#     items to be used in DLXS.
#-------------------------------------------------------------------------
# Change History:
#  DATE             WHO         REASON
# --------      -------------   ------------------------------------------
# 10/11/13      George Kozak    Created Program
# 11/26/13      George Kozak    Modifed for creating links to PDFs
#############################################################################
# copyright (C) 2013 Cornell University
#############################################################################
open (LIST, "id_list");
while ($line = <LIST>) {
       $tab1 = length($line);
       $id = substr($line,0,($tab1-1));
#       system "mkdir $id";
#       system "mkdir $id/pdfs";
       system "ln -s /cul/data/collections/scott/$id/pdfs $id/pdfs";
     }
close(LIST);
exit 0;
