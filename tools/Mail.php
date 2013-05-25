<?php
class Microsistec_Mail extends Zend_Mail {
	public static $configuration = array(
		"ssl" => array(
			"ssl" => "SSL",
			"tsl" => "TSL"
		)
	);
	public static $defaultConfiguration = array(
		'enabled' => false,
		'ssl' => 'ssl',
		'auth' => 'login',
		'username' => null,
		'password' => null,
		'port' => 465,
		'host' => null
	);
	public $transport;
	public function __construct($configuration = null) {
		if (!$configuration) {
			$config = Doctrine_Query::create()->select()->from('Configuracoes')->where("name like 'email.%'")->setHydrationMode(Doctrine::HYDRATE_ARRAY)->execute();
			$config = Cake_Utility_Set::combine($config, '{n}.name', '{n}.value');
			$config = Cake_Utility_Set::expand($config);
			$config = $config["email"];
			if (!$config["enabled"]) {
				$config = null;
			}
		} else {
			$config = $configuration;
		}
		if (!$config) return;
		$config = array_merge(Microsistec_Mail::$defaultConfiguration, $config);
		$host = $config["host"];
		unset($config["host"]);
		$this->transport = new Zend_Mail_Transport_Smtp($host, $config);
		parent::__construct();
	}
	public static function getInstance() {
		return new self();
	}
	public function send() {
		if ($this->transport) {
			parent::send($this->transport);
		} else {
			parent::send();
		}
	}
}
