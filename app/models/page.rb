class Page < ActiveFedora::Base
  
  has_metadata 'descMetadata', type: PageMetadata, :versionable=>false
 
  belongs_to :book, :property=>:is_page_of
#  has_many :inspirations, :property=>:has_derivation  

  has_file_datastream :name=>'digitalImage', :type=>ActiveFedora::Datastream, :mimeType=>'image/jpeg', :controlGroup=>'M', :versionable=>false
  has_file_datastream :name=>'thumbnailImage', :type=>ActiveFedora::Datastream, :mimeType=>'image/jpeg', :controlGroup=>'M', :versionable=>false

  has_attributes :head, datastream: 'descMetadata', multiple: false
  has_attributes :book_id, datastream: 'descMetadata', multiple: false
  has_attributes :book_title, datastream: 'descMetadata', multiple: false
  has_attributes :node, datastream: 'descMetadata', multiple: false
  has_attributes :node_type, datastream: 'descMetadata', multiple: false
  has_attributes :image_ref, datastream: 'descMetadata', multiple: false
  has_attributes :image_seq, datastream: 'descMetadata', multiple: false
  has_attributes :image_res, datastream: 'descMetadata', multiple: false
  has_attributes :image_fmt, datastream: 'descMetadata', multiple: false
  has_attributes :image_dim, datastream: 'descMetadata', multiple: false
  has_attributes :image_ftr, datastream: 'descMetadata', multiple: true
  has_attributes :image_n, datastream: 'descMetadata', multiple: false
  has_attributes :image_format, datastream: 'descMetadata', multiple: false
  has_attributes :image_geo, datastream: 'descMetadata', multiple: true
  has_attributes :image_date, datastream: 'descMetadata', multiple: false
  has_attributes :image_ethnic, datastream: 'descMetadata', multiple: false
  has_attributes :image_keyword, datastream: 'descMetadata', multiple: false
  has_attributes :image_caption, datastream: 'descMetadata', multiple: false
  has_attributes :image_ocr, datastream: 'descMetadata', multiple: false
  has_attributes :image_metadata, datastream: 'descMetadata', multiple: true
  has_attributes :book_publisher, datastream: 'descMetadata', multiple: false
  has_attributes :book_author, datastream: 'descMetadata', multiple: false
  has_attributes :author, datastream: 'descMetadata', multiple: false
  has_attributes :book_pubplace, datastream: 'descMetadata', multiple: false
  has_attributes :book_pubdate, datastream: 'descMetadata', multiple: false
  has_attributes :book_bibid, datastream: 'descMetadata', multiple: false
  has_attributes :image, datastream: 'descMetadata', multiple: false
#  has_attributes :thumbnail, datastream: 'digitalImage', multiple: false

end

