# -*- encoding : utf-8 -*-
require 'blacklight/catalog'

class CatalogController < ApplicationController

  include Blacklight::Catalog
  include Hydra::Controller::ControllerBehavior
  # These before_filters apply the hydra access controls
  #  before_filter :enforce_show_permissions, :only=>:show
  # This applies appropriate access controls to all solr queries
  #  CatalogController.solr_search_params_logic += [:add_access_controls_to_solr_params]


  before_action  do


    if params[:subject] == "nuremberg"
      blacklight_config.default_solr_params = {:fq => 'active_fedora_model_ssi:Book AND subject_tesim:"Donovan Nuremberg Trials Collection"'}
      blacklight_config.add_facet_field 'keywords_tesim', :label => 'Keyword', :limit => 5
      blacklight_config.add_show_field 'keywords_tesim', :label => 'Keywords', :link_to_search => true


    elsif params[:subject] == "scottsboro"
      blacklight_config.default_solr_params = {:fq => 'active_fedora_model_ssi:Book AND subject_tesim:"Scottsboro Trials Collection"'}

    elsif params[:subject] == "liberian"
      blacklight_config.default_solr_params = {:fq => 'active_fedora_model_ssi:Book AND subject_tesim:"Liberian Law Collection"'}

    elsif params[:subject] == "trial"
      blacklight_config.default_solr_params = {:fq => 'active_fedora_model_ssi:Book AND subject_tesim:"Trial Pamphlets Collection"'}
    end


  end



  configure_blacklight do |config|
    config.default_solr_params = {
      :fl => '*,score',

    }

    # solr field configuration for search results/index views
    config.index.title_field = 'title_tesim'
    config.index.display_type_field = 'has_model_ssim'
    config.index.thumbnail_field = 'image_tesim'
    #    config.index.show_link = 'title_tesim'
    #    config.index.record_display_type = 'has_model_ssi'

    config.show.title_field = 'title_tesim'
    #    config.show.display_type = 'has_model_ssi'


    # solr fields that will be treated as facets by the blacklight application
    #   The ordering of the field names is the order of the display
    #
    # Setting a limit will trigger Blacklight's 'more' facet values link.
    # * If left unset, then all facet values returned by solr will be displayed.
    # * If set to an integer, then "f.somefield.facet.limit" will be added to
    # solr request, with actual solr request being +1 your configured limit --
    # you configure the number of items you actually want _tsimed_ in a page.
    # * If set to 'true', then no additional parameters will be sent to solr,
    # but any 'sniffed' request limit parameters will be used for paging, with
    # paging at requested limit -1. Can sniff from facet.limit or
    # f.specific_field.facet.limit solr request params. This 'true' config
    # can be used if you set limits in :default_solr_params, or as defaults
    # on the solr side in the request handler itself. Request handler defaults
    # sniffing requires solr requests to be made with "echoParams=all", for
    # app code to actually have it echo'd back to see it.
    #
    # :show may be set to false if you don't want the facet to be drawn in the
    # facet bar
    ##    config.add_facet_field solr_name('object_type', :facetable), :label => 'Format'
    ##    config.add_facet_field solr_name('pub_date', :facetable), :label => 'Publication Year'
    ##    config.add_facet_field solr_name('subject_topic', :facetable), :label => 'Topic', :limit => 20
    ##    config.add_facet_field solr_name('language', :facetable), :label => 'Language', :limit => true
    ##    config.add_facet_field solr_name('lc1_letter', :facetable), :label => 'Call Number'
    ##    config.add_facet_field solr_name('subject_geo', :facetable), :label => 'Region'
    ##    config.add_facet_field solr_name('subject_era', :facetable), :label => 'Era'

    config.add_facet_field 'active_fedora_model_ssi', :label => 'Format', :limit => 3 , :show => false
    config.add_facet_field 'author_tesim', :label => 'Author', :limit => 5
    config.add_facet_field 'pubdate_tesim', :label => 'Publication Date', :limit => 5
    config.add_facet_field 'image_date_tesim', :label => 'Image Date', :limit => 5
    config.add_facet_field 'image_format_tesim', :label => 'Image Format', :limit => 5 , :show => true
    config.add_facet_field 'image_keyword_tesim', :label => 'Image Keyword', :limit => 5
    #config.add_facet_field 'keywords_tesim', :label => 'Keyword', :limit => 5
    config.add_facet_field 'trial_type_tesim', :label => 'Trial type', :limit => 5
    config.add_facet_field 'document_type_tesim', :label => 'Document type', :limit => 5
    config.add_facet_field 'crime_tesim', :label => 'Crime', :limit => 5
    config.add_facet_field 'subject_tesim', :label => 'Collection', :limit => 5, :show => false
    config.add_facet_field 'lang_tesim', :label => 'Language', :limit => 5
    config.add_facet_field 'witness_tesim', :label => 'Witness', :limit => 5
    config.add_facet_field 'vol_tesim', :label => 'Volume', :limit => 5, :show => true
    config.add_facet_field 'geo_location_tesim', :label => 'Location', :limit => 5

    config.add_facet_fields_to_solr_request!


    # Have BL send all facet field names to Solr, which has been the default
    # previously. Simply remove these lines if you'd rather use Solr request
    # handler defaults, or have no facets.
    # config.default_solr_params[:'facet.field'] = config.facet_fields.keys
    #use this instead if you don't want to query facets marked :show=>false
    #config.default_solr_params[:'facet.field'] = config.facet_fields.select{ |k, v| v[:show] != false}.keys


    # solr fields to be displayed in the index (search results) view
    #   The ordering of the field names is the order of the display
    #  config.add_index_field solr_name('title', :stored_searchable, type: :string), :label => 'Title:'
    config.add_index_field 'title_tesim', :label => 'Title:'
    #    config.add_index_field solr_name('title_vern', :stored_searchable, type: :string), :label => 'Title:'
    #    config.add_index_field solr_name('author', :stored_searchable, type: :string), :label => 'Author:'
    config.add_index_field 'author_tesim', :label => 'Author:'
    #    config.add_index_field solr_name('author_vern', :stored_searchable, type: :string), :label => 'Author:'
    #    config.add_index_field solr_name('format', :symbol), :label => 'Format:'
    #    config.add_index_field solr_name('language', :stored_searchable, type: :string), :label => 'Language:'
    #    config.add_index_field solr_name('published', :stored_searchable, type: :string), :label => 'Published:'
    #    config.add_index_field solr_name('published_vern', :stored_searchable, type: :string), :label => 'Published:'
    #    config.add_index_field solr_name('lc_callnum', :stored_searchable, type: :string), :label => 'Call number:'

    #    config.add_index_field solr_name('publisher', :stored_searchable, type: :string), :label => 'Publisher:'
    config.add_index_field 'publisher', :label => 'Publisher:'
    #    config.add_index_field solr_name('book_publisher', :stored_searchable, type: :string), :label => 'Book Publisher:'
    config.add_index_field 'book_publisher', :label => 'Book Publisher:'
    #    config.add_index_field solr_name('pubdate', :stored_searchable, type: :string), :label => 'Published:'
    config.add_index_field 'pubdate', :label => 'Published:'
    #    config.add_index_field solr_name('image_ocr', :stored_searchable, type: :string), :label => ' ', :highlight => true
    config.add_index_field 'image_ocr', :label => ' ', :highlight => true
    #    config.add_index_field solr_name('book_title', :stored_searchable, type: :string), :label => 'Book Title:'
    config.add_index_field 'book_title', :label => 'Book Title:'
    #    config.add_index_field solr_name('book_author', :stored_searchable, type: :string), :label => 'Book Author:'
    config.add_index_field 'book_author', :label => 'Book Author:'


    # solr fields to be displayed in the show (single result) view
    #   The ordering of the field names is the order of the display
    #config.add_show_field 'title_tesim',  :label => 'Title'
    config.add_show_field 'author_tesim', :label => 'Trial type', :link_to_search => true

    config.add_show_field 'trial_type_tesim', :label => 'Trial type', :link_to_search => true
    config.add_show_field 'document_type_tesim', :label => 'Document type', :link_to_search => true
    config.add_show_field 'crime_tesim', :label => 'Crime', :link_to_search => true
    ##    config.add_show_field solr_name('title_vern', :stored_searchable, type: :string), :label => 'Title:'
    ##    config.add_show_field solr_name('subtitle', :stored_searchable, type: :string), :label => 'Subtitle:'
    ##    config.add_show_field solr_name('subtitle_vern', :stored_searchable, type: :string), :label => 'Subtitle:'
    ##    config.add_show_field solr_name('author', :stored_searchable, type: :string), :label => 'Author:'
    ##    config.add_show_field solr_name('author_vern', :stored_searchable, type: :string), :label => 'Author:'
    ##    config.add_show_field solr_name('format', :symbol), :label => 'Format:'
    ##    config.add_show_field solr_name('url_fulltext_tsim', :stored_searchable, type: :string), :label => 'URL:'
    ##    config.add_show_field solr_name('url_suppl_tsim', :stored_searchable, type: :string), :label => 'More Information:'
    ##    config.add_show_field solr_name('language', :stored_searchable, type: :string), :label => 'Language:'
    ##    config.add_show_field solr_name('published', :stored_searchable, type: :string), :label => 'Published:'
    ##    config.add_show_field solr_name('published_vern', :stored_searchable, type: :string), :label => 'Published:'
    ##    config.add_show_field solr_name('lc_callnum', :stored_searchable, type: :string), :label => 'Call number:'
    ##    config.add_show_field solr_name('isbn', :stored_searchable, type: :string), :label => 'ISBN:'


    # "fielded" search configuration. Used by pulldown among other places.
    # For supported keys in hash, see rdoc for Blacklight::SearchFields
    #
    # Search fields will inherit the :qt solr request handler from
    # config[:default_solr_parameters], OR can specify a different one
    # with a :qt key/value. Below examples inherit, except for subject
    # that specifies the same :qt as default for our own internal
    # testing purposes.
    #
    # The :key is what will be used to identify this BL search field internally,
    # as well as in URLs -- so changing it after deployment may break bookmarked
    # urls.  A display label will be automatically calculated from the :key,
    # or can be specified manually to be different.

    # This one uses all the defaults set by the solr request handler. Which
    # solr request handler? The one set in config[:default_solr_parameters][:qt],
    # since we aren't specifying it otherwise.

    #config.add_search_field 'all_fields', :label => 'All Fields'
        config.add_search_field('Full Text') do |field|
      # :solr_local_parameters will be sent using Solr LocalParams
      # syntax, as eg {! qf=$title_qf }. This is neccesary to use
      # Solr parameter de-referencing like $title_qf.
      # See: http://wiki.apache.org/solr/LocalParams
      field.solr_local_parameters = {
        :qf => 'all_text_timv',
        :pf => 'all_text_timv'
      }
    end
    #    config.add_search_field 'pubdate', :label => 'Pub Date'


    # Now we see how to over-ride Solr request handler defaults, in this
    # case for a BL "search field", which is really a dismax aggregate
    # of Solr search fields.

    config.add_search_field('title') do |field|
      # :solr_local_parameters will be sent using Solr LocalParams
      # syntax, as eg {! qf=$title_qf }. This is neccesary to use
      # Solr parameter de-referencing like $title_qf.
      # See: http://wiki.apache.org/solr/LocalParams
      field.solr_local_parameters = {
        :qf => '$title_qf',
        :pf => '$title_pf'
      }
    end

    config.add_search_field('author') do |field|
      field.solr_local_parameters = {
        :qf => '$author_qf',
        :pf => '$author_pf'
      }
    end

    config.add_search_field('publisher') do |field|
      field.solr_local_parameters = {
        :qf => '$publisher_qf',
        :pf => '$publisher_pf'
      }
    end

    config.add_search_field('pub date') do |field|
      field.solr_local_parameters = {
        :qf => '$pubdate_qf',
        :pf => '$pubdate_pf',
        :label => 'Pub Date'
      }
    end

    # Specifying a :qt only to show it's possible, and so our internal automated
    # tests can test it. In this case it's the same as
    # config[:default_solr_parameters][:qt], so isn't actually neccesary.
    config.add_search_field('subject') do |field|
      field.qt = 'search'
      field.solr_local_parameters = {
        :qf => '$subject_qf',
        :pf => '$subject_pf'
      }
    end

    # "sort results by" select (pulldown)
    # label in pulldown is followed by the name of the SOLR field to sort by and
    # whether the sort is ascending or descending (it must be asc or desc
    # except in the relevancy case).
    config.add_sort_field 'score desc, pub_date_dtsi desc, title_tesi asc', :label => 'relevance'
    config.add_sort_field 'pub_date_dtsi desc', :label => 'year'
    config.add_sort_field 'book_author_ssi asc', :label => 'author'
    config.add_sort_field 'title_ssi asc', :label => 'title'
    #    config.add_field_configuration_to_solr_request!

    # If there are more than this many search results, no spelling ("did you
    # mean") suggestion is offered.
    config.spell_max = 5

  end


end
