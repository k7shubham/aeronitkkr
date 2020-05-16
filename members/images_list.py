"""
1. This script generates name of all the images in this folder. 
2. The names are required in a variable of js/gallery.js file.
3. The generated list should the assigned to the variable named 'list' with comment ///assigen here///
"""


from os import walk

f = []
for (dirpath, dirnames, filenames) in walk('./'):
    f.extend(filenames)
    break