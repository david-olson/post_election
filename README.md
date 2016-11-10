=== Post Election ===

Author: David Olson

== Install ==

Clone the repo and use npm install to download all of the build dependencies. 

== Gulpfile ==

The gulpfile has a few variables which you can set. Use MAMP to run a server. Make sure you point the variable in gulpfile.js to the right port on localhost.

Command `gulp` wil run a browsersync and watch task. This will live inject / reload all file changes in your browser. 

Command `gulp build` will package the file in a directory adjacent to the src directory. It will also create a zip file of finished production files.