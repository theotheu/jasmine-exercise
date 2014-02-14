Point your browser to

http://localhost/specRunner.html

Alternative jasmine-node
------------------------
Install jasmine-node
```npm install jasmine-node -g```


Mac setup with apache
---------------------

* Create directory for documentroot `mkdir ~/Sites`
* Create a file `sudo vi /etc/apache2/users/username.conf`
```<Directory "/Users/theotheu/Sites/">
       Options Indexes MultiViews
       AllowOverride None
       Order allow,deny
       Allow from all
   </Directory>```
* `sudo apachectl start`

