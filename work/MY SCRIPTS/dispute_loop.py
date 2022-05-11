dashboard_disputes =[
'DF6mJi674ioMg2VEWPiSsTE6',
'DFufYRtnAFUYYhkVBHQncF4Y',
'DFeHGQo8AQgppZXE48ZPxnkS',
'DF4RTgDrby3wxNbxPJoiuEsd',
'DFfueFm7LvhHn5mzVJ1pMsKg',
'DFjq8HmTez98Z1oMbr6iDMrP',
'DFt2gGbWi5XK5PFv1QNjfNHA',
'DFq5ZLFXVCyNoi7v1gPWFYY2',
'DFvGpy9e55fWQio4SbpChyQP'
]
pdf = []

for x in dashboard_disputes:
    x += '.pdf'
    pdf.append(x)


wp_disputes = [
'DF4RTgDrby3wxNbxPJoiuEsd.pdf',
'DFufYRtnAFUYYhkVBHQncF4Y.pdf',	
'DF6mJi674ioMg2VEWPiSsTE6.pdf',	
'DFfueFm7LvhHn5mzVJ1pMsKg.pdf',
'DFq5ZLFXVCyNoi7v1gPWFYY2.pdf',
'DFjq8HmTez98Z1oMbr6iDMrP.pdf',
'DFeHGQo8AQgppZXE48ZPxnkS.pdf',
'DFt2gGbWi5XK5PFv1QNjfNHA.pdf'
]
disputeID = 'DIxhaa8boRd7apMbznHFeY4i'
did_not_make_it = []
made_it = []


for file in pdf:
    if file not in wp_disputes:
        did_not_make_it.append(file)
    if file in wp_disputes:
        made_it.append(file)



number_of_files = len(dashboard_disputes)
print('Hello Team,')
print('\n')
print(f'Worldpay only allows 8 evidence files to be uploaded and you tried uploading {number_of_files} for Dispute: {disputeID}.')
print("\n")
print('The following files did not make the upload:')
print("\n")
for x in did_not_make_it:
    print(x)
print("\n")
print('The following are the 8 files that made the upload:')
print("\n")
for x in made_it:
    print(x)
print("\n")
print("If these evidence files that did not make it are more relevant than the other files, ")
print('you have to make the adjustments in IQ.')
print("\n")
print('Please let me know if you need any further assistance.')
print('Thanks,')
print('Van')
print('Support Engineer')
print('Finix')














