Point your browser to

http://localhost/specRunner.html

Alternative jasmine-node
------------------------
It is assumed you have installed node.js.


Install jasmine-node.
```npm install jasmine-node -g```

Install the required modules.
```npm install```

Run the tests with
`jasmine-node --verbose spec`


Mac setup with apache
---------------------
Apache is default installed, no XAMP or WAMP is needed.

* Create directory for documentroot `mkdir ~/Sites`
* Create a file `sudo vi /etc/apache2/users/username.conf`
```<Directory "/Users/theotheu/Sites/">
       Options Indexes MultiViews
       AllowOverride None
       Order allow,deny
       Allow from all
   </Directory>```
* `sudo apachectl start`
* Point your browser to http://localhost/~username
