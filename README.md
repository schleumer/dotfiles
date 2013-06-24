# MOTHER OF DOTFILES

![MOTHER OF DOTFILES](http://i.imgur.com/oWlRlCa.png)

# INSTALL

```bash
#install robbyrussell/oh-my-zsh
curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh
#install spf13/spf13-vim
sh <(curl http://j.mp/spf13-vim3 -L)
#clone my dotfiles 
git clone https://github.com/schleumer/dotfiles.git .schleumer-dotfiles
#link my custom oh-my-zsh
ln -s ~/.schleumer-dotfiles/my.zsh ~/.oh-my-zsh/custom
#clone my vim bundles
ln -s ~/.schleumer-dotfiles/.vimrc.bundles.local ~/
#clone my vim stuffs
ln -s ~/.schleumer-dotfiles/.vimrc.local ~/
#update vim
vim +BundleInstall +BundleClean
#update zsh
source ~/.zshrc
```
