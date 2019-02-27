# Basics of Git and HTML / CSS / JS
mock up of a label for a food product

Setting up HTML page repo - v.basic!

mkdir /repos/

create repository on git hub
	https://github.com/  
	Click start new project  
	Enter repo name: html_label  
	Check Initialize this repository with a README checkbox  
	Click create repository  

cd into /repos/

git clone https://github.com/UnacceptableBehaviour/html_label

cd into /repos/html_label/

edit .gitignore  
	nano .gitignore  
	# and add lines

	# for osx
	.DS_Store

	# ignore directory	
	/z_data
  
  Ctrl-O, Ctrl-X		# to save file
  
#### Git ignore syntax notes:
https://git-scm.com/docs/gitignore  

Populate directory with html and supporting files

Update README.md

git status    # view status  
	.gitignore  
	images/  
	product_label.html  
  
git add .     # add all new files  
	new file:   .gitignore  
	new file:   images/awesome_sauce_landing_page_QR_code.png  
	new file:   images/logo-biodegradable.gif  
	new file:   images/logo_face.png  
	new file:   images/placeholder_logo.png  
	new file:   images/placeholder_logo_large.png  
	new file:   images/product_image.jpg  
	new file:   images/product_image_2.jpg  
	new file:   images/product_image_3.jpg  
	new file:   images/traffic_lights.png  
	new file:   images/widely_recycled.png  
	new file:   product_label.html  
  
git commit -m 'initial commit'  # -m inserts comment for commit  
                                # git will open vim for a comment if this isn't included  
  
[master 5611fb0] initial commit  
 12 files changed, 226 insertions(+)  
 create mode 100644 .gitignore  
 create mode 100644 images/awesome_sauce_landing_page_QR_code.png  
 create mode 100644 images/logo-biodegradable.gif  
 create mode 100644 images/logo_face.png  
 create mode 100644 images/placeholder_logo.png  
 create mode 100644 images/placeholder_logo_large.png  
 create mode 100644 images/product_image.jpg  
 create mode 100644 images/product_image_2.jpg  
 create mode 100644 images/product_image_3.jpg  
 create mode 100644 images/traffic_lights.png  
 create mode 100644 images/widely_recycled.png  
 create mode 100644 product_label.html  
  
git push  # upload the files to git version control  
Counting objects: 15, done.  
Delta compression using up to 4 threads.  
Compressing objects: 100% (15/15), done.  
Writing objects: 100% (15/15), 10.03 MiB | 1.03 MiB/s, done.  
Total 15 (delta 0), reused 0 (delta 0)  
To https://github.com/UnacceptableBehaviour/html_label  
   38e8e46..5611fb0  master -> master  
  
  
# Resources
#### Good Crash Course for Git  
https://www.youtube.com/watch?v=SWYqp7iY_Tc&list=PL2lwdwuJBHeH27wyxgOfVvmuA5zyJ8BXT&index=1

#### Markdown syntax (.md)
https://www.markdownguide.org/basic-syntax/



