stty ixany
stty ixoff -ixon

export SVN_EDITOR=vim;

function cd(){
	builtin cd "$@"
}


function svnaddall(){
	svn st | grep "^\?" | awk "{print \$2}" | xargs svn add $1
}

function svnrmall(){
	svn st | grep '^!' | awk '{print $2}' | xargs svn delete --force
}

function download(){
	curl --remote-name $1
}

function extract () {
   if [ -f $1 ] ; then
       case $1 in
           *.tar.bz2)   tar xvjf $1 && cd $(echo $1 | sed 's/.tar.bz2//')    ;;
           *.tar.gz)    tar xvzf $1 && cd $(echo $1 | sed 's/.tar.gz//')    ;;
           *.bz2)       bunzip2 $1 && cd $(echo $1 | sed 's/.bz2//')    ;;
           *.rar)       unrar x $1 && cd $(echo $1 | sed 's/.rar//')    ;;
           *.gz)        gunzip $1 && cd $(echo $1 | sed 's/.gz//')    ;;
           *.tar)       tar xvf $1 && cd $(echo $1 | sed 's/.tar//')    ;;
           *.tbz2)      tar xvjf $1 && cd $(echo $1 | sed 's/.tbz2//')    ;;
           *.tgz)       tar xvzf $1 && cd $(echo $1 | sed 's/.tgz//')    ;;
           *.zip)       unzip $1 && cd $(echo $1 | sed 's/.zip//')    ;;
           *.Z)         uncompress $1 && cd $(echo $1 | sed 's/.Z//')    ;;
           *.7z)        7z x $1 && cd $(echo $1 | sed 's/.7z//')    ;;
           *)           echo "don't know how to extract '$1'..." ;;
       esac
   else
       echo "'$1' is not a valid file!"
   fi
 }


function vimclean() {
	rm -rf ~/.vimbackup ~/.viminfo ~/.vimviews ~/.vimswap ~/.vimundo
}

unsetopt correct
unsetopt correct_all

export TERM=xterm-256color

#alias tmux="TERM=screen-256color-bce tmux"

export ZSH_THEME=powerline

export TERM=xterm-256color

alias -g tmux="tmux -2"

setopt NO_BEEP

unset SSH_ASKPASS

export GOPATH="/home/$USER/go"
export PATH="$PATH:/home/schleumer/go/bin"
