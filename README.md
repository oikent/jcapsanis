<div  align='center'>
<img src='https://jcapsanislawyer.com.au/images/logo-blue.png'>
</div>


# Live jcapsanislawyer.com.au

# Github Actions - Self-hosted Runner

## Configuration

#### Create a folder under the drive root

`mkdir actions-runner; cd actions-runner`

#### Download the latest runner package

`Invoke-WebRequest -Uri https://github.com/actions/runner/releases/download/v2.301.1/actions-runner-win-x64-2.301.1.zip -OutFile actions-runner-win-x64-2.301.1.zip`

#### Extract the installer

`Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory("$PWD/actions-runner-win-x64-2.301.1.zip", "$PWD")`

#### Create the runner and start the configuration experience

`./config.cmd --url https://github.com/oikent/jcapsanis --token AJ7UWVM4LPPHESSI36ZZLI3D5HZHW`

#### Run it

`sudo ./svc install`

#### Use this YAML in your workflow file

`runs-on: self-hosted`

# PM2

## Installation

`sudo npm install -g pm2`

## Start

`pm2 start app.js`

#### Launch on reboot

`pm2 startup systemd`

#### The last line of the resulting output will include a command that you must run with superuser privileges:

##### sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u {user} {/home/user}`

#### Check instance

`systemctl status pm2-{user}`

#### Other Commands

#### Stop

`pm2 stop app_name_or_id`

#### Restart

`pm2 restart app_name_or_id`

#### List

`pm2 list`

# NGINX

#### Edit

`/etc/nginx/sites-available/jcapsanislawyer.com.au`

```
server {
		root /home/chris/actions-runner/jcapsanis/jcapsanis/jcapsanis;
        server_name jcapsanislawyer.com.au www.jcapsanislawyer.com.au;

        location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        }
}
```

#### Check syntax

`sudo nginx -t`

#### Symlink

```
cd /etc/nginx/sites-enabled
ln -s ../sites-available/jcapsanislawyer.com.au.conf .
```

#### Restart

`sudo systemctl restart nginx`

# Resources

https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04
