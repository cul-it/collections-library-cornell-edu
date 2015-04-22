module BlacklightHelper
  include Blacklight::BlacklightHelperBehavior

  def application_name
  	if params[:subject] == "nuremberg"
    "Donovan Nuremberg Trials Collection"

elsif params[:subject] == "trials"
	"Trial Pamplets"

else
	"Law Collections"
  end
end


end