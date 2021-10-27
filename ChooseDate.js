
<!DOCTYPE html>
<html lang="en">
<head id="ctl00_Head1"><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700" rel="stylesheet" />
    
    <!-- Zipporah CSS -->
    <link href="../Content/Zipporah-base.css" rel="stylesheet" type="text/css" media="screen" /><link href="../Content/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!--[if lte IE 9]>
        <link href="../Content/Zipporah-base-IE.css" rel="stylesheet" type="text/css" />
    <![endif]-->
    <link href="../Content/flick/jquery-ui-1.9.0.custom.css" rel="stylesheet" type="text/css" />

    <!-- Client Style Assets -->

    <!-- Remove this stylesheet -->
    <link href="../Content/Zipporah-theme.css" rel="stylesheet" type="text/css" media="screen" /><script src="/Dudley.Bookings/Scripts/flick/jquery-1.8.2.js" type="text/javascript"></script><script src="/Dudley.Bookings/Scripts/flick/jquery-ui-1.9.0.custom.min.js" type="text/javascript"></script><script src="/Dudley.Bookings/Scripts/jquery.tmpl.js" type="text/javascript"></script><script src="/Dudley.Bookings/Scripts/knockout-1.1.2.js" type="text/javascript"></script><script src="/Dudley.Bookings/Scripts/jquery.watermark.min.js" type="text/javascript"></script><script src="/Dudley.Bookings/Scripts/jquery-ui-timepicker-addon.js" type="text/javascript"></script><script src="/Dudley.Bookings/Scripts/Zipporah.Generic-1.0.js" type="text/javascript"></script><script src="/Dudley.Bookings/Scripts/Spectrum/spectrum.js" type="text/javascript"></script><title>
	Temporary Recycling Centre Booking System
</title>
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.18/b-1.5.2/b-colvis-1.5.2/b-flash-1.5.2/b-html5-1.5.2/b-print-1.5.2/fc-3.2.5/fh-3.1.4/datatables.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.4/moment.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/plug-ins/1.10.19/sorting/datetime-moment.js"></script>

<!-- Lightbox -->
    <link href="../Content/Lightbox/css/lightbox.css" rel="stylesheet" /><script src="/Dudley.Bookings/Content/Lightbox/js/lightbox.js" type="text/javascript"></script>
    
    <script type="text/javascript">
        jQuery(document).ready(function () {
            
            document.cookie = "js=1; path=/";
            $.datepicker.setDefaults($.datepicker.regional['en-GB']);
            
            jQuery('.datePicker').datepicker({
                dateFormat: "dd/mm/yy",
                changeMonth: true,
                changeYear: true,
                yearRange: 'c-100:c+10'
            });
            
        });
    </script>

</head>

<body>
	
	<a class="zip-skip-to-content-link" href="#zipContent">Skip to Content</a>

    <!-- Header -->
    <header class="header">
        <div class="zip-container">
            <img src="https://internal.zipporah.co.uk/Dudley.Bookings/Content/images/zipporah-logo.svg" width="200" alt="Zipporah Ltd" title="Zipporah Ltd" class="logo">
        </div>
    </header>
    
    <!-- Zip Menu -->
    <script language="javascript">var getNotifications = "/Dudley.Bookings/Nav/GetUnseenAllocations";</script>

<div class="zip-navigation">
<main>
    <div class="zip-container">
        <ul class="navbar">
            <li class="user-display">
                <a href="javascript:void(0);" class="username" title="Guest Dropdown Menu">
                    Guest
                    <i class="fa fa-chevron-down"></i>
                </a>
                <ul>
                    
	<li><a href="/Dudley.Bookings/Account">Logon</a></li>

                </ul>
            </li>
            <li class="controls">
                <a class="zip-home" href="https://internal.zipporah.co.uk/Dudley.Bookings/" title="Home"></a>
                <a class="zip-calendar toggle" href="javascript:void(0);" title="Toggle Calendar"></a>
                <a class="zip-menu-toggle" href="javascript:void(0);" title="Menu"></a>
            </li>
        </ul>
    </div>
    <div class="zip-menu">
        <div class="zip-container">
            <a class="zip-menu-toggle close" href="javascript:void(0);" title="Close Menu"></a>
            <div class="category">
                <h3>Account</h3>
                <ul>
                    
	<li><a href="/Dudley.Bookings/Account">Logon</a></li>

                </ul>
            </div>
            
                <div class="category">
                    <h3>Bookings</h3>
                    <ul>
                        
                        <li>
                            <a href="/Dudley.Bookings/BookingProcess"
                            class="notSelected" 
                            title="">
                            Book an Appointment
                            </a>
                        </li>
                        
                    </ul>
                </div>
            
            <span class="zip-copyright">&copy; Zipporah Ltd. <script>document.write(new Date().getFullYear())</script></span>
        </div>
    </div>
</main>
</div>

<script type="text/javascript">
    jQuery(document).ready(function () {
        // Zip Menu Toggle
        $('.zip-menu-toggle').click(function () {
            $('.zip-navigation .zip-menu').fadeToggle();
            $('body, html').toggleClass('overflow-disabled');
        });
        // Zip Calendar Toggle
        $('.zip-calendar.toggle').click(function () {
            $('.calendar').slideToggle('fast');
        });
    });
</script>

<script type="text/javascript">
 function GetNotifications() {

    }
    jQuery(document).ready(function () {

        $.ajax({
            url: getNotifications,
            type: "GET",
        })
            .done(function (result) {
                if (result > 0) {
                    $('#StaffAcceptance').append('<span style= "color:red"> (' + result + ')');
                    $('#username').append('<span style= "color:red"> (' + result + ')');
                }
            });

    // Zip Navbar
    
    $('.user-display').click(function(e) {

        $('.user-display>ul').toggleClass('active');

        $('body').click(function() {
            $('.user-display>ul').removeClass('active');
            $('body').off('click');
        });

        e.stopPropagation();

    });

});

</script>

    <main>
        <div class="zip-container">
            <div class="content">
				<span id="zipContent"></span>
                
                
                
    <script language="javascript">var selectedResourceId = "0";</script>
    <script language="javascript">var getSlotsLink = "/Dudley.Bookings/BookingProcess/GetSlots";</script>
    <script language="javascript">var chooseTimeLink = "/Dudley.Bookings/BookingProcess/ChooseTime";</script>
 <script language="javascript">var getChargeSummaryLink = "/Dudley.Bookings/BookingProcess/GetChargeSummary";</script>
    <script type="text/javascript">var dates = [];</script>

    <script type="text/javascript">
        jQuery(document).ready(function() {
            jQuery('#submitCategory').hide();
            jQuery('#submitResource').hide();
            if (selectedResourceId != "0")
                jQuery('.categoryContainer').show();
            jQuery('#ResourceCategory').change(SelectResourceCategory).change(GetSlots);
            jQuery('#Resource').change(GetSlots);
		    jQuery('.chargeSummary').live('click', GetChargeSummary);
            
            
                var date = new Date();
            
                date.setDate(date.getDate() + 1);
            
                var defaultDate = date;
            

            var latestDate = new Date(2020,9,20);

            

                jQuery('#calendarDatePicker').datepicker({
                        onSelect: GetSlots, 
                beforeShowDay: highlightDays,
                        minDate: date,
                    defaultDate: defaultDate,
                    maxDate: latestDate
                    });
            GetSlots();

            //If a client needs a P1 preselected at this ppoint uncomment out with the required Name. An Id if preferred could be used selecting on the option value instead
            //jQuery("#ResourceCategory option:contains(Llandow Recycling Centre)").attr('selected', 'selected');
            //jQuery("#ResourceCategory").trigger();
        });

        function highlightDays(date) {
            for (var i = 0; i < dates.length; i++) {
                if (dates[i].getTime() == date.getTime()) {
                    return [true, 'highlight'];
                }
            }
            return [true, ''];
        } 
    </script>
    
    <style type="text/css">
        body div div table.ui-datepicker-calendar td.highlight a
        {
            color :#c90;
            background: #fff5cc;
            border: 1px solid #cc0;
        }
    </style>

    
    <input type="hidden" value="1" />

            <div class="zip-progress-bar">
                <div class="flex center no-wrap">
                    
                        <!--
                            <span class="label back">
                                Go back:
                                <a href="/Dudley.Bookings/BookingProcess">Select Booking Type</a>
                            </span>
                        -->
                    
                    <span class="label step">
                        Step
                        2
                        of
                        9
                    </span>
                    <!--
                        <span class="label next">
                            Next:
                            Select Facilities
                        </span>
                    -->
                </div>
                <div class="progress-bar">
                    <div class="progress-meter">
                    </div>
                    <script type="text/javascript">
                        var wd = 13;
                        var i = 2;
                        wd = parseInt((parseInt(i) / parseInt(wd)) * 100); 
                        jQuery('.progress-meter').width('' +wd + '%');
                    </script>
                </div>
            </div>
        
    <input type="hidden" value="2" />

    <input type="hidden" value="3" />

    <input type="hidden" value="4" />

    <input type="hidden" value="5" />

    <input type="hidden" value="6" />

    <input type="hidden" value="7" />

    <input type="hidden" value="8" />

    <input type="hidden" value="9" />

    <h1>
        Booking Process - Select Date</h1>
        
        <p><strong>IMPORTANT: You must be a Dudley MBC waste and recycling permit holder to book an appointment&nbsp;</strong></p>
<ul>
<li>Step 1 -&nbsp;For Dudley Borough residents please<strong> select the Household Waste Recycling Centre in Stourbridge</strong></li>
<li>Step 2 - Select a&nbsp;<strong>Date </strong>from the calendar; permit holder appointments are only available on Wednesdays.&nbsp;Appointments can only be booked up to 10 days in advance.</li>
<li>Step 3 - Review the Time Slots that are available at the bottom of the screen and click Book on the one you wish to select.</li>
</ul>
<p>If you can't see any time slots, all the time slots may be fully booked. Please select a different date.</p>
        
     
    <div id='loadingmsg' style='display: none;'>Loading</div>
    <div>
    <form action="/Dudley.Bookings/BookingProcess/CalendarResults" method="post">
    <div class="zip-editor-row"><span class="zip-editor-label"><label for="ResourceCategory" id="ResourceCategorylabel">Please select the location you wish to attend:</label></span>
    <select id="ResourceCategory" name="ResourceCategory"><option value="">--Select--</option>
<option value="13710697">Household Waste Recycling Centre Stourbridge </option>
</select>
    <input id="submitCategory" name="submitCategory" type="submit" value="Select" />
    </div>
    </div>
    
    
    <hr />
    </form>
    <div id="calendarContainer">
        
        <div id="calendarDatePicker" style="float: left;">
        </div>
        
    </div>
    <div id="NoResCat">
        <span class="errorText">Unfortunately there are no appointments available at this office for the date you have selected. Please select another date or office.</span>
    </div>
    <div id="resourceResults">
        
    </div>
    <div id="chooseTimeContainer" style="clear: both;">
    </div>
    
    <div style="display: none;">
        <select id="hiddenResources" name="Resource">
            <option value="" class="None">
                --Select--</option>
            
            <option value="13712699" class="Category13710697">
                Resident 1</option>
            
            <option value="13807801" class="Category13710697">
                Resident 10</option>
            
            <option value="13801788" class="Category13710697">
                Resident 2</option>
            
            <option value="13807794" class="Category13710697">
                Resident 3</option>
            
            <option value="13807795" class="Category13710697">
                Resident 4</option>
            
            <option value="13807796" class="Category13710697">
                Resident 5</option>
            
            <option value="13807797" class="Category13710697">
                Resident 6</option>
            
            <option value="13807798" class="Category13710697">
                Resident 7</option>
            
            <option value="13807799" class="Category13710697">
                Resident 8</option>
            
            <option value="13807800" class="Category13710697">
                Resident 9</option>
            
        </select>
    </div>
	                <div id="chargeSummary"></div>

                <span class="zip-copyright">&copy; Zipporah Ltd. <script>document.write(new Date().getFullYear())</script></span>
            </div>
        </div>
        <div id="tooltip">&nbsp;</div>
    </main>

    <!-- Footer -->
    <footer class="footer">
    <div class="zip-container">

        <p><a href="http://www.zipporah.co.uk"><i class="fa fa-arrow-left"></i> &nbsp;Back to Council Website</a></p>

    </div>
</footer>

</body>
</html>