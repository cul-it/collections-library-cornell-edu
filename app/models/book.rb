class Book < ActiveFedora::Base
  
  has_metadata 'descMetadata', type: BookMetadata
  
  
  has_file_datastream :name=>'digitalImage', :type=>ActiveFedora::Datastream, :mimeType=>"image/jpeg", :controlGroup=>'M'
  
  
  belongs_to :derivation, :property=>:has_derivation
  
  has_many :pages, :property=>:has_pages
  
  
#  has_attributes :header, datastream: 'descMetadata', multiplet: false
#  has_attributes :title, datastream: 'descMetadata', unique: true
#  has_attributes :author, datastream: 'descMetadata', unique: true
  has_attributes :titlestmt_titletype, datastream: 'descMetadata', multiple: false
  has_attributes :titlestmt_title, datastream: 'descMetadata', multiple: false
  has_attributes :titlestmt_author, datastream: 'descMetadata', multiple: false
  has_attributes :extent, datastream: 'descMetadata', multiple: false
  has_attributes :pubstmt_publisher, datastream: 'descMetadata', multiple: false
  has_attributes :pubstmt_pubplace, datastream: 'descMetadata', multiple: false
  has_attributes :pubstmt_idno_type, datastream: 'descMetadata', multiple: false
  has_attributes :pubstmt_idno, datastream: 'descMetadata', multiple: false
  has_attributes :bibl_titletype, datastream: 'descMetadata', multiple: false
  has_attributes :title, datastream: 'descMetadata', multiple: false
  has_attributes :author, datastream: 'descMetadata', multiple: false
  has_attributes :publisher, datastream: 'descMetadata', multiple: false
  has_attributes :pubplace, datastream: 'descMetadata', multiple: false
  has_attributes :pubdate, datastream: 'descMetadata', multiple: false
  has_attributes :subject, datastream: 'descMetadata', multiple: true
  has_attributes :editorialdecl_n, datastream: 'descMetadata', multiple: false
  has_attributes :editorialdecl, datastream: 'descMetadata', multiple: false
  has_attributes :keywords, datastream: 'descMetadata', multiple: true
  has_attributes :image, datastream: 'descMetadata', multiple: false
  has_attributes :subject, datastream: 'descMetadata', multiple: false
  has_attributes :bibid, datastream: 'descMetadata', multiple: false
#  has_attributes :image, datastream: 'digitalImage', multiple: false

end
