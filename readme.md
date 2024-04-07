# SSH

Remember do this to clone the repo in ubuntu server and execute all steps

## [Installation Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

Digital Ocean Example to install Docker.

```bash
sudo apt update && sudo apt upgrade -y
```

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

```bash
apt-cache policy docker-ce
```

```bash
sudo apt install docker-ce
```

```bash
sudo systemctl status docker
```

## [Clone Repo in SSH](https://theflipbit.com/how-to-clone-your-github-repo-using-ssh/)

```bash
ssh-keygen -t rsa -b 4096 -C nodejs-app
```

- Settings > "SSH and GPG keys" > New SSH key

```bash
cat ~/.ssh/id_rsa.pub
```

- Key type: Authentication Key

## [Allow Actions and SSH Conection](https://www.programonaut.com/how-to-deploy-a-git-repository-to-a-server-using-github-actions/)

- Add the public key to the authorized_keys file

```bash
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```

- Copy content of the private key file

```bash
cat ~/.ssh/id_rsa
```

- Settings > Secrets > Actions

```txt
SSH_PRIVATE_KEY: content of the private key file
SSH_USER: user to access the server
SSH_HOST: hostname/ip-address of your server
WORK_DIR: path to the directory containing the repository
MAIN_BRANCH: name of the main branch (mostly main)
```

With this you can access your server and execute any file or command from actions

## License

[MIT](https://choosealicense.com/licenses/mit/)
