require 'nokogiri'

class Parser

  attr_accessor :doc

  def initialize(filename) 
    file = File.open(filename, "r")
    @doc = Nokogiri::XML(file) 
  end

  def getChildNodeContents(parentNode, childNode) 
    parentNode.xpath(sprintf('./%s',childNode)).each do |node|
      return node.content
    end
  end
  
  def getNode(parentNode)
     return parentNode.xpath()
  end
  
  def parseRecords(tagname)
    
    title = @doc.xpath(sprintf('//%s', 'TITLE'))[0].content
    author = @doc.xpath(sprintf('//%s', 'AUTHOR'))[0].content
    publisher = @doc.xpath(sprintf('//%s', 'BIBL//PUBLISHER'))[0].content
    pubplace = @doc.xpath(sprintf('//%s', 'BIBL//PUBPLACE'))[0].content
    pubdate = @doc.xpath(sprintf('//%s', 'BIBL//DATE'))[0].content
    puts title
    puts author    
    puts publisher
    puts pubplace
    puts pubdate
#    puts "START OF PAGES"
    head = ""
    image_counter = 0
    record_counter = 0
    @doc.xpath(sprintf('//%s',tagname)).each do |record|
#              puts
#              puts "START OF DIV1 PAGES"
#              puts
            image_ref = " "
            image_seq = " "
            image_res = " "
            image_fmt = " "
            image_dim = " "
            image_ftr = " "
            image_n = " "
            image_format = " "
            image_geo = " "
            image_date = " "
            image_keyword = " "
            image_caption = " "
            image_ocr = " "
            
       
       node = record.values[0].split(':')[1]
       node_type = record.values[1]
#       puts "NODE = " + node + " TYPE = " + node_type
#       head = record.xpath('HEAD')
       head = getChildNodeContents(record,"HEAD")
#            head = head.gsub!('\"','')
       if head == 0 or head.nil?
         head = ""
#       else
#        head = head.gsub!('\"', '')
       end
        
       epb1 = getChildNodeContents(record,"EPB1")
   #    puts head      
       epbs1 = record.xpath('.//EPB1')
       epbs1count = 0
       record.xpath('PB1').each do |pb1|
#            puts 
#            puts "START OF DIV1 IMAGE INFO"
#            puts
        #    puts pb1.keys[0] + " " + pb1.values[0] + " " + pb1.keys[1] + " = " + pb1.values[1] + " " + pb1.keys[2] + " = " + pb1.values[2]
        #    puts pb1.keys[3] + " " + pb1.values[3] + " " + pb1.keys[4] + " = " + pb1.values[4] + " " + pb1.keys[5] + " = " + pb1.values[5]
        #  puts epbs1[epbs1count].content()
#            head = getChildNodeContents(pb1,"HEAD")
         #   pb1.values.each do |pika|
         #   puts "pb1 values = " + pika
         #   end
            image_ref = " "
            image_seq = " "
            image_res = " "
            image_fmt = " "
            image_dim = " "
            image_ftr = " "
            image_n = " "
            image_ref = pb1.values[0]
            image_seq = pb1.values[1]
            image_res = pb1.values[2]
            image_fmt = pb1.values[3]
            image_dim = pb1.values[4]
            image_ftr = pb1.values[5]
            image_n = pb1.values[6]

            image_format = ""
            image_geo = ""
            image_date = ""
            image_ethnic = ""
            image_keyword = ""
            image_caption = ""
            image_ocr = ""

          epbs1[epbs1count].xpath('.//P').each do |pee1|
          #   puts "Ralph" + pee1.content()
               test = pee1.content()
                case test
                when /^Image\ format/i
                  image_format = pee1.content().split(':')[1].gsub!(' ', '')
                when /^Image\ geographic/i
                  image_geo = pee1.content().split(':')[1]
                when /^Image\ Date/i
                  image_date = pee1.content().split(':')[1]
                when /^Image Ethnic/i
                  image_ethnic = pee1.content().split(':')[1]
              #  when /^Image ethnic/i
              #    image_ethnic = pee1.content()#.split(':')[1]
                when /^Image keyword/i
                  image_keyword = pee1.content().split(':')[1] #.strip.gsub!(';','')
                  image_keyword = image_keyword.strip
                  if !image_keyword.nil? and (image_keyword.include? " ; " or image_keyword.include? " | ")
                    if image_keyword.include? " ; "
                      image_keyword = image_keyword.split(' ; ')
                    end
                    if image_keyword.include? " | "
                      image_keyword = image_keyword.split(" | ")
                    end
                    if image_keyword.include? ";"
                      image_keyword = image_keyword.split(';')
                    end
                    if image_keyword.include? " ;"
                      image_keyword = image_keyword.split(' ;')
                    end
                    if image_keyword.include? "; "
                      image_keyword = image_keyword.split('; ')
                    end
#                  image_keyword.collect{|x| x.strip}
                   image_keyword[0] = image_keyword[0].strip
                   puts image_keyword[0]
                  else
                    image_keyword = image_keyword.strip
                    puts image_keyword
                  end
                  
#                when /^Image\ caption/i
#                  image_caption = pee1.content().split(':',2)[1]
#                when /^Image\ Keyword/i
#                  image_keyword = pee1.content().split(':')[1].gsub!(';','')
#                  image_keyword = image_keyword.gsub!(' ', '')
                when /^Image\ Caption/i
                  image_caption = pee1.content().split(':',2)[1] #.gsub!('\"',' ')
                when /^No\ valid/i
                  image_ocr = pee1.content() #.split(':')[1]
                else
                  image_ocr = pee1.content()
                end
    
          end
 #          if head.nil? or head == 0
 #            head = " "
 #          end
           if image_caption.nil?
             image_caption = " "
           end
           if image_keyword.nil?
             image_keyword = " "
           end
           if image_ocr.nil?
             image_ocr = " "
           end
          epbs1count = epbs1count + 1
          case image_seq.length
          when 1
            image_idno = "000" + image_seq
          when 2
            image_idno = "00" + image_seq
          when 3
            image_idno = "0" + image_seq
          end
    pagepid = "seapage:" + ARGV[0] + "_" + image_seq
          thumbnail = "http://hydrastg.library.cornell.edu/fedora/get/" + pagepid + "/thumbnailImage"
#    puts  " page = Page.create(pid: \"" + pagepid + "\", book_id: \"sea:" + ARGV[0] + "\", node: \"" + node + "\", node_type: \"" + 
#          node_type + "\", head: \"" + head + "\", image_ref: \"" + image_ref + "\", image_seq: \"" + image_seq + 
#          "\", image_res: \"" + image_res + "\", image_fmt: \"" + image_fmt + "\", image_ftr: \"" + image_ftr + 
#          "\", image_n: \"" + image_n + "\", image_format: \"" + image_format + "\", image_geo: \"" + image_geo + 
#          "\", image_date: \"" + image_date + "\", image_ethnic: \"" + image_ethnic + "\", image_keyword: \"" + image_keyword + "\", image_caption: \"" + 
#          image_caption + "\", image_ocr: \"" + image_ocr + "\")"
#          puts "Got Here before page.create"
           page = Page.create(pid: pagepid, book_id: "sea:" + ARGV[0], book_title: title, node: node, node_type: node_type, head: head, image_ref: image_ref, image_seq: image_seq, image_res: image_res, image_fmt: image_fmt, image_dim: image_dim, image_ftr: image_ftr, image_n: image_n, image_format: image_format, image_geo: image_geo, image_date: image_date, image_ethnic: image_ethnic, image_keyword: image_keyword, image_caption: image_caption, image_ocr: image_ocr, book_author: author, author: author, book_publisher: publisher, book_pubplace: pubplace, book_pubdate: pubdate, book_bibid: ARGV[1], image: thumbnail)
   #        puts "Got Here"
           page.add_relationship(:is_page_of, "info:fedora/sea:" + ARGV[0], versionable=false )
   #        puts "Here too"
           page.digitalImage.content = File.open("/cul/data/collections/sea/" + ARGV[0] +"/jpg/" + image_ref) 
           page.thumbnailImage.content = File.open("/cul/data/collections/sea/" + ARGV[0] +"/thumbs/" + image_ref) 
  #         puts "Hey Man"
            image_format = ""
            image_geo = ""
            image_date = ""
            image_ethnic = ""
            image_keyword = ""
            image_caption = ""
            image_ocr = ""
            head = ""
#              puts
#              puts "END OF IMAGE INFO"
#            puts image_seq
            page.save
            page.to_solr
            puts "Page " + image_seq + " in " + ARGV[0] + " saved "
       end
      epbcount = 0
      @div2 = Nokogiri::XML::fragment(record.xpath('.//DIV2'))
       image_caption = ""
       image_ocr = ""
       @div2.xpath('.//DIV2').each do |div3|
#              puts
#              puts "START OF DIV2"
#              puts
         image_ref = " "
         image_seq = " "
         image_res = " "
         image_fmt = " "
         image_dim = " "
         image_ftr = " "
         image_n = " "
         image_format = ""
         image_geo = ""
         image_date = ""
         image_ethnic = ""
         image_keyword = ""
         image_caption = ""
         image_ocr = ""

         node = div3.values[0].split(':')[1]
         node_type = div3.values[1]
#         puts "NODE = " + node + " TYPE = " + node_type
         head2 = getChildNodeContents(div3,"HEAD")
    #        head2 = head2.gsub!('\"','')
#         puts head2
         if head2 == 0
           head2 = " "
         end
         epbs = div3.xpath('EPB')
         image_format = ""
         image_geo = ""
         image_date = ""
         image_ethnic = ""
         image_keyword = ""
         image_caption = ""
         image_ocr = ""
            
         epbcount = 0
         div3.xpath('.//PB').each do |pb|
#            puts 
#            puts "START OF IMAGE INFO"
#            puts
            image_ref = " "
            image_seq = " "
            image_res = " "
            image_fmt = " "
            image_dim = " "
            image_ftr = " "
            image_n = " "
            image_ref = pb.values[0]
            image_seq = pb.values[1]
            image_res = pb.values[2]
            image_fmt = pb.values[3]
            image_dim = pb.values[4]
            image_ftr = pb.values[5]
            image_n = pb.values[6]
#              puts pb.keys[0] + " " + pb.values[0] + " " + pb.keys[1] + " = " + pb.values[1] + " " + pb.keys[2] + " = " + pb.values[2]
#              puts pb.keys[3] + " " + pb.values[3] + " " + pb.keys[4] + " = " + pb.values[4] + " " + pb.keys[5] + " = " + pb.values[5]
#              puts pb.keys[6] + " " + pb.values[6]
             ## puts pb
        #    puts div3.xpath('.//EPB').count
        #    puts div3.xpath('.//P').count
            div4 = div3.xpath('.//EPB')
          #  puts div4[0].content()
          #  marmaduke = getChildNodeContents(div3,"P")
          #  div3.xpath('.//P').each do |pee|
            div4[epbcount].xpath('.//P').each do |pee|
#              puts "ED " + pee.content()
              test = pee.content()
              case test
               when /^Image format/i
#                 puts "MOTHERFUQUA!!!!!!!!!!!!!!!!!!"
                 image_format = pee.content().split(':')[1].gsub!(' ','')
               #  puts image_format
               when /^Image\ geographic/i
                 image_geo = pee.content().split(':')[1]
               when /^Image\ Date/i
                 image_date = pee.content().split(':')[1]
               when /^Image ethnic/i
                 image_ethnic = pee.content().split(':')[1]
#               when /^Image Ethnic/i
#                 image_ethnic = pee.content().split(':')[1]
               when /^Image\ keyword/i
#                 image_keyword = pee.content().split(':')[1].gsub!(';','')
                  image_keyword = pee.content().split(':')[1] #.strip.gsub!(';','')
                  image_keyword = image_keyword.strip
                  if !image_keyword.nil? and (image_keyword.include? " ; " or image_keyword.include? " | ")
                    if image_keyword.include? " ; "
                      image_keyword = image_keyword.split(' ; ')
                    end
                    if image_keyword.include? " | "
                      image_keyword = image_keyword.split(" | ")
                    end
                    if image_keyword.include? ";"
                      image_keyword = image_keyword.split(';')
                    end
                    if image_keyword.include? " ;"
                      image_keyword = image_keyword.split(' ;')
                    end
                    if image_keyword.include? "; "
                      image_keyword = image_keyword.split('; ')
                    end
#                  image_keyword.collect{|x| x.strip}
                   image_keyword[0] = image_keyword[0].strip
                   puts image_keyword[0]
                  else
                    image_keyword = image_keyword.strip
                    puts image_keyword
                  end
               when /^Image\ caption/i
                 image_caption = pee.content().split(':')[1]
#               when /^Image\ Keyword/i
#                 image_keyword = pee.content().split(':')[1] #.strip.gsub!(';','')
#               when /^Image\ Caption/i
#                 image_caption = pee.content().split(':',2)[1] #.gsub!('\"',' ')
 #             puts image_caption
               when /^No\ valid/i
                 image_ocr = pee.content() # .split(':')[1]
               else
                 image_ocr = pee.content()
              end
            
#            if pee.content().start_with?('Image format')
#                   image_format = pee.content().split(':')[1]
#            end
#            if pee.content().start_with?('Image geographic')
#                   image_geo = pee.content().split(':')[1]
#            end
#            if pee.content().start_with?('Image Date')
#                   image_date = pee.content().split(':')[1]
#            end
#            if pee.content().start_with?('Image Keyword')
#                   image_keyword = pee.content().split(':')[1].strip.gsub!(';','')
#            end
#            if pee.content().start_with?('Image Caption')
#                    image_caption = pee.content().split(':')[1]
#            end
#            if pee.content().start_with?('No valid')
#                    image_ocr = pee.content()
               #     puts image_ocr
#            end
          end

              epbcount = epbcount + 1
           if head.nil?
             head = " "
           end
#           if image_caption.nil?
#             image_caption = " "
#           end
           if image_ethnic.nil?
             image_ethnic = ""
           end
           if image_keyword.nil?
             image_keyword = ""
           end
           if image_ocr.nil?
             image_ocr = ""
           end
          case image_seq.length
            when 1
              image_idno = "000" + image_seq
            when 2
              image_idno = "00" + image_seq
            when 3
              image_idno = "0" + image_seq
          end

          pagepid = "seapage:" + ARGV[0] + "_" + image_seq
          thumbnail = "http://hydrastg.library.cornell.edu/fedora/get/" + pagepid + "/thumbnailImage"
#    puts  " page = Page.create(pid: \"" + pagepid + "\", book_id: \"sea:" + ARGV[0] + "\", node: \"" + node + 
#           "\", node_type: \"" + node_type + "\", head: \"" + head + "\", image_ref: \"" + image_ref + 
#           "\", image_seq: \"" + image_seq + "\", image_res: \"" + image_res + "\", image_fmt: \"" + 
#           image_fmt + "\", image_ftr: \"" + image_ftr + "\", image_n: \"" + image_n + 
#           "\", image_format: \"" + image_format + "\", image_geo: \"" + image_geo + 
#           "\", image_date: \"" + image_date + "\", image_ethnic: \"" + image_ethnic + "\", image_keyword: \"" + image_keyword + 
#           "\", image_caption: \"" + image_caption + "\", image_ocr: \"" + image_ocr + "\")"
#           puts "KUKAMUNGA !!!!!!!!!!!!! " + image_format
           page = Page.create(pid: pagepid, book_id: "sea:" + ARGV[0], book_title: title, node: node, node_type: node_type, head: head2, image_ref: image_ref, image_seq: image_seq, image_res: image_res, image_fmt: image_fmt, image_dim: image_dim, image_ftr: image_ftr, image_n: image_n, image_format: image_format, image_geo: image_geo, image_date: image_date, image_ethnic: image_ethnic, image_keyword: image_keyword, image_caption: image_caption, image_ocr: image_ocr, book_author: author, author: author, book_publisher: publisher, book_pubplace: pubplace, book_pubdate: pubdate, book_bibid: ARGV[1], image: thumbnail)
           page.add_relationship(:is_page_of, "info:fedora/sea:" + ARGV[0], versionable=false )
           page.digitalImage.content = File.open("/cul/data/collections/sea/" + ARGV[0] +"/jpg/" + image_ref)
           page.thumbnailImage.content = File.open("/cul/data/collections/sea/" + ARGV[0] +"/thumbs/" + image_ref)
        #   page.
            image_format = ""
            image_geo = ""
            image_date = ""
            image_ethnic = ""
            image_keyword = ""
            image_caption = " "
            image_ocr = ""
            head2 = ""

     #         puts image_seq
              page.save
              page.to_solr
              puts "Page " + image_seq + " in " + ARGV[0] + " saved "
            end
     
#        puts
#        puts 
#        puts "END OF DIV2"
#        puts 
#        puts
          
        end

#    puts
#    puts
#    puts "END OF DIV1"
#    puts
#    puts
      
    end
  end
end
inputparam = ARGV[0]
bibid = ARGV[1]
if inputparam.nil?
  puts "You must pass in a record ID"
  exit
end
data = Parser.new("/cul/data/collections/sea/" + inputparam + "/sea" + inputparam + "_georgeJune24_dims.xml")
data.parseRecords("DIV1")

