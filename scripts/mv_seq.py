#! /usr/bin/env python

# rename all file in paths img_* to sequential jpegs

from pprint import pprint # giza a look
#import glob
#import re           # regex
from pathlib import Path
import sys

if __name__ == '__main__':

    if len(sys.argv) > 1 and Path(sys.argv[1]).exists():
        path = Path(sys.argv[1])
    else:
        path = Path().cwd()

    # with pathib object
    dirs = path.glob('img_*/')                  # look for dirs names img_ANYTEXT - creates a generator

    for d in dirs:                              # look in each dir for *.jpg *.jpeg
        files = d.glob('*.jp*g')
        targets = sorted([ f for f in files ])                      # iterate into a list & sort
        for i,img_path in zip(range(0,200,5), targets):             # 000, 005, 010 etc w/ Posix path to image
            new_target = str(i).zfill(3)+'.jpg'                     # 005.jpg
            img_path.rename(img_path.parent.joinpath(new_target))   # rename from whatever.jpg to 005.jpeg

    sys.exit(0) # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - EXIT!







    # proto
    if len(sys.argv) > 1 and Path(sys.argv[1]).exists():
        path = Path(sys.argv[1])
    else:
        path = Path().cwd()

    path_and_subpaths = path.joinpath('**','*')

    print(path)
    print(path_and_subpaths)
    files = glob.glob(str(path_and_subpaths), recursive=True)
    print(files)

    img_paths = path.joinpath('img_*','*')  # all files below path w/ img_ in path
    files = glob.glob(str(img_paths), recursive=True)
    print("\n\n- - - - - - img_paths = path.joinpath('img_*','*')")
    pprint(files)

    img_paths = path.joinpath('img_*','')   # add trailing '/' to look for directories
    dirs = glob.glob(str(img_paths), recursive=True)
    print("\n\n- - - - - - img_paths = path.joinpath('img_*','*')")
    pprint(dirs)
    # ['/Users/simon/a_syllabus/lang/html_css_js/html_label/img_cheese',
    #  '/Users/simon/a_syllabus/lang/html_css_js/html_label/img_comfort',
    #  '/Users/simon/a_syllabus/lang/html_css_js/html_label/img_bread',
    #  '/Users/simon/a_syllabus/lang/html_css_js/html_label/img_sushi',
    #  '/Users/simon/a_syllabus/lang/html_css_js/html_label/img_hg_veg',
    #  '/Users/simon/a_syllabus/lang/html_css_js/html_label/img_make_sroll',
    #  '/Users/simon/a_syllabus/lang/html_css_js/html_label/img_burgers',
    #  '/Users/simon/a_syllabus/lang/html_css_js/html_label/img_sweet']

    # with pathib object
    dirs = path.glob('img_*/')      # loog for dirs - creates a generator
    print("\n\n- - - - - - dirs = img_paths.glob('')")
    for d in dirs:
        print(d, type(d))
        files = d.glob('*.jp*g')
        [ print(f) for f in files ]

