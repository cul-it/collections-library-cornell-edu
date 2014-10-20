module ApplicationHelper
  
#  def has_facet_values? fields = facet_field_names, options = {}
##    fields = ["active_fedora_model_ssi", "object_type_si", "pubdate_tesim", "subject_tesim", "keywords_tesim"]
#    Rails.logger.info("Fields in overide = #{fields}")
#    facets_from_request(fields).any? { |display_facet| !display_facet.items.empty? }
#  end
  
#    def facets_from_request(fields = facet_field_names)
#      Rails.logger.info("Hoochieoverride = #{fields}")
#      fields = ["active_fedora_model_ssi", "object_type_si", "pubdate_tesim", "subject_tesim", "keywords_tesim"]
#      fields.map { |solr_field| facet_by_field_name(solr_field) }.compact
#    end

  # Render a collection of facet fields
#  def render_facet_partials fields = facet_field_names, options = {}
#     fields = ["active_fedora_model_ssi", "object_type_si", "pubdate_tesim", "subject_tesim", "keywords_tesim"]
#     facets_from_request(fields).map do |display_facet|
#      render_facet_limit(display_facet, options)
#    end.compact.join("\n").html_safe
#  end
  
# def render_facet_limit(display_facet, options = {})
#    if display_facet.is_a? String or display_facet.is_a? Symbol
#      $stderr.puts "DEPRECATION WARNING: Blacklight::FacetsHelper#render_facet_limit: use #render_facet_partials to render facets by field name"
#      return render_facet_partials([display_facet])
#    end
#    return if not should_render_facet?(display_facet)
#    options = options.dup
#    options[:partial] ||= facet_partial_name(display_facet)
#    options[:layout] ||= "facet_layout" unless options.has_key?(:layout)
#    options[:locals] ||= {}
#    options[:locals][:solr_field] ||= display_facet.name 
#    options[:locals][:solr_fname] ||= display_facet.name # DEPRECATED
#    Rails.logger.info("WALTWHITESAYS = #{display_facet.name}")
#    options[:locals][:facet_field] ||= facet_configuration_for_field(display_facet.name)
#    options[:locals][:display_facet] ||= display_facet 

#    render(options)
#  end
  def render_table_of_contents(pid)
    tocHash = {}
    output = []
    presortArray = []
    seapage = pid.split(':')[1]
    page_reader_url = "/bookreader/"
#    @toc = JSON.parse(HTTPClient.get_content("http://rossini.cul.columbia.edu/voyager_backend/holdings/retrieve/#{params[:id]}"))[params[:id]]
     clnt = HTTPClient.new
     solr = Blacklight.solr_config[:url]
     toc = clnt.get_content("http://hydrastg.library.cornell.edu/solr/development_core/select?q=id%3Aseapage*"+seapage+"*+AND+head_tesim%3A*&rows=1000&sort=id+asc&fl=head_tesim%2C+id%2C+node_tesim%2C+image_seq_tesim&wt=ruby") # do |chunk|
       tocArray = eval(toc)
       i = 0
       tocArray['response']['docs'].each do |doctary|
         presortArray[i] = [doctary['id'], doctary['head_tesim'][0], doctary['image_seq_tesim'][0].to_i, doctary['node_tesim'][0]]
         i = i + 1
       end
       presortArray.sort_by! {|e| e[2]}
       printArray = ""
#        tocArray['response']['docs'].each do |doc|
        presortArray.each do |doc|
#         pageNum = doc['id'].split('_')[1]
         pageNum = doc[0].split('_')[1]
         if doc[3].include? "."
            data = "<p>Hello!</p>"
            data.html_safe
            printArray << "<div class=\"toc-chapter\"><a href='" + page_reader_url + pid + "/#page/" + pageNum + "/mode/1up'>" + doc[1] + "</a></div>"      
#         printArray << "<a href='" + page_reader_url + pid + "/#page/" + pageNum + "/mode/1up'>" + doc['head_tesim'][0] + "</a><br>"
         else      
            printArray << "<div class=\"toc-section\"><a href='" + page_reader_url + pid + "/#page/" + pageNum + "/mode/1up'>" + doc[1] + "</a></div>"
         end      
       end
#       tocArray['response']['docs'].each do |doc|
##         debug doc[80]
#       end
#         
#        debug chunk
#    end
    
    return printArray
  end
  
  def render_head_content
 #   Deprecation.silence(Blacklight::HtmlHeadHelperBehavior) do
      render_stylesheet_includes +
      render_js_includes +
      render_extra_head_content
#    end +
    content_for(:head)
  end
  
#  deprecation_deprecate :render_head_content
  
  ##
  # Assumes controller has a #stylesheet_link_tag method, array with
  # each element being a set of arguments for stylesheet_link_tag
  # See #render_head_content for instructions on local code or plugins
  # adding stylesheets. 
  def render_stylesheet_includes
    return "".html_safe unless respond_to?(:stylesheet_links)
 #   Deprecation.silence(Blacklight::LegacyControllerMethods) do
      stylesheet_links.uniq.collect do |args|
        stylesheet_link_tag(*args)
      end.join("\n").html_safe
 #   end
  end
#  deprecation_deprecate :render_stylesheet_includes
  

  ##
  # Assumes controller has a #js_includes method, array with each
  # element being a set of arguments for javsascript_include_tag.
  # See #render_head_content for instructions on local code or plugins
  # adding js files. 
  def render_js_includes
    return "".html_safe unless respond_to?(:javascript_includes) 

#    Deprecation.silence(Blacklight::LegacyControllerMethods) do
      javascript_includes.uniq.collect do |args|
        javascript_include_tag(*args)
      end.join("\n").html_safe
#    end
  end
#  deprecation_deprecate :render_js_includes

  ## 
  # Assumes controller has a #extra_head_content method
  #
  def render_extra_head_content
    return "".html_safe unless respond_to?(:extra_head_content)

#    Deprecation.silence(Blacklight::LegacyControllerMethods) do
      extra_head_content.join("\n").html_safe
    end
#  end
#  deprecation_deprecate :render_extra_head_content  
  
end
