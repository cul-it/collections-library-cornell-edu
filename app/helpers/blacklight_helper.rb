module BlacklightHelper
  include Blacklight::BlacklightHelperBehavior

  def application_name
    if params[:subject] == "nuremberg"
      "Donovan Nuremberg Trials Collection"

    elsif params[:subject] == "trial"
      "Trial Pamphlets Collection"

    elsif params[:subject] == "scottsboro"
      "Scottsboro Trials"

    elsif params[:subject] == "liberian"
      "Liberian Law Collection"

    else
      "Law Collections"
    end
  end

  def id_to_subject(subject)
    params[:subject] = subject.downcase
  end

  def subject_to_prefix(subject)
    PREFIXES.each do |key,value|
      if subject == key
        prefix = value
        return prefix
      end
    end
  end

  def pubstmt_to_id(pubstmt)
    PREFIXES.each do |key,value|
      if pubstmt.start_with?(value)
        prefix = value
        number = pubstmt.gsub(prefix,':')
        return prefix + number
      end
    end
  end

  # Link to the previous document in the current search context
  def link_to_previous_document(previous_document)
    unless previous_document.nil?
      link_opts = session_tracking_params(previous_document, search_session['counter'].to_i - 1).merge(:class => "previous", :rel => 'prev')
      link_to_unless previous_document.nil?, raw(t('views.pagination.previous')), '/' + params[:subject] +'/' +'catalog' + '/' + previous_document[:id], link_opts do
        content_tag :span, raw(t('views.pagination.previous')), :class => 'previous'
      end
    end
  end

  ##
  # Link to the next document in the current search context
  def link_to_next_document(next_document)
    unless next_document.nil?
      link_opts = session_tracking_params(next_document, search_session['counter'].to_i + 1).merge(:class => "next", :rel => 'next')
      link_to_unless next_document.nil?, raw(t('views.pagination.next')), '/'+ params[:subject] +'/' +'catalog' + '/' + next_document[:id], link_opts do
        content_tag :span, raw(t('views.pagination.next')), :class => 'next'
      end
    end
  end


  PREFIXES = {
    'scottsboro' => 'scott',
    'liberian' => 'liber',
    'trial' => 'sat',
    'nuremberg' => 'nur'
  }

  NOT_DIGITIZED = [
    "nur:00455",
    "nur:00469",
    "nur:00472",
    "nur:00473",
    "nur:00484",
    "nur:00486",
    "nur:00499",
    "nur:00500",
    "nur:00501",
    "nur:00502",
    "nur:00511",
    "nur:00634",
    "nur:00809",
    "nur:00862",
    "nur:00928",
    "nur:01012",
    "nur:01176",
    "nur:01200",
    "nur:01252",
    "nur:01355",
    "nur:01528",
    "nur:01541",
    "nur:01545",
    "nur:01548",
    "nur:01590",
    "nur:01592",
    "nur:01594",
    "nur:01598",
    "nur:01601",
    "nur:01605",
    "nur:01607",
    "nur:01609",
    "nur:01611",
    "nur:01653",
    "nur:01770",
    "nur:01801",
    "nur:01827",
    "nur:01828",
    "nur:01829",
    "nur:01830",
    "nur:01836",
    "nur:01847",
    "nur:01848",
    "nur:01852",
    "nur:27870"
  ]

def not_digitized?(id)
    if NOT_DIGITIZED.include? id
      return true
    end
  end

def digital_collection?(subject)
  PREFIXES.each do |key,value|
    if subject.include? key
      return true
    end 
  end
end

  def link_to_document(doc, field_or_opts = nil,opts={:counter => nil,:subject=>params[:subject]})
    if field_or_opts.kind_of? Hash
      opts = field_or_opts
      if opts[:label]
        Deprecation.warn self, "The second argument to link_to_document should now be the label."
        field = opts.delete(:label)
      end
    else
      field = field_or_opts
    end
    field ||= document_show_link_field(doc)
    label = presenter(doc).render_document_index_label field, opts
    if params[:subject] || params[:controller] == 'bookmarks'
      if params[:subject].present?
        collection=params[:subject]
      else
        PREFIXES.each do |key,value|
          if doc[:id].start_with?(value)
            collection = key
          end
        end
      end
      link_to label, '/'+collection +'/' +'catalog' + '/' + doc[:id], document_link_params(doc, opts)
    else
      link_to label, url_for_document(doc), document_link_params(doc, opts)
    end
  end

  ##
  def extra_body_classes
    subject_class = request.fullpath.split('/')[1]
    @extra_body_classes ||= [subject_class, 'blacklight-' + controller.controller_name, 'blacklight-' + [controller.controller_name, controller.action_name].join('-')]
  end

end
