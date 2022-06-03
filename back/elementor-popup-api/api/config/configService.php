<?php

class ConfigService
{

   public static function get()
   {
     $config = require_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/api/config/config.php";
     return $config; //todo-ortal handle errors
   }


}