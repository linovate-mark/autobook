# Autobook
# By Mark Walker - Linovate Limited
#
# A very rough attempt at using python requests to talk to the council waste bookings site in a less painful way
#
#

import requests
import argparse
import sys

#'Thu Oct 15 2020'
# inputdate = sys.argv[1]
# inputdate = 'Thu Oct 15 2020'
inputdate = sys.argv[1]
# print(input)


s = requests.Session()
s.headers.update({'User-Agent': 'X11; Ubuntu; Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0','Referer': 'https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/ChooseDate','js': "1"})
s.get('https://internal.zipporah.co.uk/Dudley.Bookings')
print("[*] Obtaining Zipporah Session")

st = s.get('https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess')
# print(st.status_code)

sspayload = { 'BookingTypeCategory': 'Waste_and_Recycling_centre', 'BookingType': '13720707', 'PNRApplicationNumber': '', 'submitType': 'Continue' }
ss = s.post('https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess', params=sspayload)
# print(ss.url)
# print(ss.status_code)

slotpayload = { 'date': {inputdate}, 'resourceCategoryId': '13710697', 'processType': 'Calendar', '_': '1602373895465' }
slots = s.get('https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/GetSlots', params=slotpayload)
print("[*] Getting Slot Data...")
# print(slots.text)
if "endTime" in slots.text:
    print("[*] Slots are available")
else:
    print("[*] No Slots available on this day")

# ResourceId=13807796&StartTime=10%2F21%2F2020%2008%3A00%3A00&EndTime=10%2F21%2F2020%2008%3A20%3A00&SlotLength=00%3A20%3A00
#
#
# https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/ChooseDate?ResourceId=13807796&StartTime=10%2F18%2F2020%2008%3A20%3A00&EndTime=10%2F18%2F2020%2008%3A30%3A00&SlotLength=00%3A10%3A00

# https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/PartialCustomQuestions
# questionTitle	PleaseSupplyThe+
# questionAnswer	xxxx+xxx
# Reg Number

# questionTitle	IsYourVehicle
# questionAnswer	Noorm data

# questionTitle	ConfirmTelephone
# questionAnswer	xxxxxxxxxxx
# Phone Number

# questionTitle	PleaseConfirm3
# questionAnswer	Yes,+I+am+a+resident

# questionTitle	PleaseConfirm
# questionAnswer: Yes+-+I+confirm+that+I+will+follow+these+rules+at+all+times+during+my+visit
#
# questionAnswer: true
#
# https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/CompleteCustomQuestions
# [302] https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/ConfirmDetails
# [302] https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/ConfirmDetails?confirmedDetails=True
# [302] https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/ChargeAccountTypeChange
# [302] https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/SelectPaymentMethod
# [302] https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/ReceivePayment?bookingId=16184442&success=True
# [302] https://internal.zipporah.co.uk/Dudley.Bookings/BookingProcess/BookingConfirmation
