# MOTHER OF DOTFILES

![MOTHER OF DOTFILES](http://i.imgur.com/oWlRlCa.png)

# INSTALL

```bash
#install robbyrussell/oh-my-zsh
curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh

#install spf13/spf13-vim
sh <(curl http://j.mp/spf13-vim3 -L)

#clone my dotfiles 
git clone https://github.com/schleumer/dotfiles.git  ~/.schleumer-dotfiles

#install powerline theme for oh-my-zsh
git clone https://github.com/jeremyFreeAgent/oh-my-zsh-powerline-theme.git ~/.schleumer-dotfiles/sources/oh-my-zsh-powerline-theme

#link powerline theme on oh-my-zsh 
ln -s ~/.schleumer-dotfiles/sources/oh-my-zsh-powerline-theme/powerline.zsh-theme ~/.oh-my-zsh/themes

#zsh_path utils from trapd00r
ln -s ~/.schleumer-dotfiles/zsh_path /usr/bin

#link my custom oh-my-zsh
ln -s ~/.schleumer-dotfiles/my.zsh ~/.oh-my-zsh/custom

#clone my vim bundles
ln -s ~/.schleumer-dotfiles/.vimrc.bundles.local ~/

#clone my vim stuffs
ln -s ~/.schleumer-dotfiles/.vimrc.local ~/

#clone my Xresources
ln -s ~/.schleumer-dotfiles/.Xresources ~/
ln -s ~/.schleumer-dotfiles/.Xresources ~/.Xdefaults

#update Xresources
xrdb -merge ~/.Xresources

#update vim
vim +BundleInstall +BundleClean

#update zsh
source ~/.zshrc
```
