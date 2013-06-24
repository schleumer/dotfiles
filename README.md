# MOTHER OF DOTFILES

![MOTHER OF DOTFILES](http://i.imgur.com/oWlRlCa.png)

# INSTALL

	curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh
	sh <(curl http://j.mp/spf13-vim3 -L) 
	git clone https://github.com/schleumer/dotfiles.git .schleumer-dotfiles
	ln -s ~/.schleumer-dotfiles/my.zsh ~/.oh-my-zsh/custom
	ln -s ~/.schleumer-dotfiles/.vimrc.bundles.local ~/ 
	ln -s ~/.schleumer-dotfiles/.vimrc.local ~/
	vim +BundleInstall +BundleClean
