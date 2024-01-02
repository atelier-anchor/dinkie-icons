"""Glyphs script to update glyph order.
"""


import csv
import os


csvFile = os.path.join(os.path.dirname(Font.parent.filePath), "icons.csv")
with open(csvFile, encoding='utf-8-sig') as f:
	reader = csv.reader(f)
	icons = [(row[1], row[3:6]) for row in reader if row[0] and row[0] != 'Name']
	Font.customParameters["glyphOrder"] = [
		*(i[0] for i in icons),
		*(i[0] + '.filled' for i in icons if i[1][0]),
		*(i[0] + '.small' for i in icons if i[1][1]),
		*(i[0] + '.small.filled' for i in icons if i[1][2]),
	]
