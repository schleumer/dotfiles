# Wesley Schleumer

export SVN_EDITOR=vim
loadkeys br-abnt2


function somecurl(){
	curl \
		-A "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)" \
		--location \
		$1
}
