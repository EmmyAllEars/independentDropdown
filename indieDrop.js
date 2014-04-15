var timeoutDiv;
var selection;

function navEnter(event)
{
	// close old selection
	if (selection != null && selection != event.data)
	{
		$(selection).hide();
	}
	
	// set new selection
	selection = event.data;
	$(selection).show();
	stopTimer();

	$(selection).mouseenter(dropdownMouseEnter);
	$(selection).mouseleave(selection, dropdownMouseLeave);
};

function navLeave(event)
{
	overNav = false
	startTimer(event.data,400);
};

function dropdownMouseEnter()
{
	stopTimer();
};

function dropdownMouseLeave(event)
{
	if (!overNav)
	{
		startTimer(event.data, 300);
	} 
};

function startTimer(targetId, delay)
{
	timeoutDiv = setTimeout (function(){hideSubNav(targetId)},delay);
};

function stopTimer()
{
	clearTimeout(timeoutDiv);
};

function hideSubNav(targetId)
{
	$(targetId).hide();

	$(targetId).off('mouseenter');
	$(targetId).off('mouseleave');
};

$('#productsNav').mouseenter('#productsDropdown', navEnter);
$('#productsNav').mouseleave('#productsDropdown', navLeave);

$('#servicesNav').mouseenter('#servicesDropdown', navEnter);
$('#servicesNav').mouseleave('#servicesDropdown', navLeave);

$('#clientsNav').mouseenter('#clientsDropdown', navEnter);
$('#clientsNav').mouseleave('#clientsDropdown', navLeave);

$('#partnersNav').mouseenter('#partnersDropdown', navEnter);
$('#partnersNav').mouseleave('#partnersDropdown', navLeave);

$('#intelligenceNav').mouseenter('#intelligenceDropdown', navEnter);
$('#intelligenceNav').mouseleave('#intelligenceDropdown', navLeave);

$('#companyNav').mouseenter('#companyDropdown', navEnter);
$('#companyNav').mouseleave('#companyDropdown', navLeave);
