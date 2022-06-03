<?php
//todo-ortal where to requre or include once
include  $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/api/config/configService.php";
include  $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/api/services/jsonFileService.php";


class ContentService //todo-ortal try to make static
{
    private $dataSource;

    public function __construct() 
    {
       $config = ConfigService::get();
       $this->dataSource = $config["dataSource"];
    }

    //todo-ortal add validation
    public function getContent()
    {
        $data = ''; //todo-ortal need to put datasurce in a class
        switch (strtoupper($this->dataSource["type"])) {
            case "JSON": //todo-ortal validate path to check exist
                $data = $this->getContentByJson($this->dataSource["json"]["path"]);
                break;
            default:
                $data = '';
        }
        return $data;
    }

    private function getContentByJson($filePath)
    {
        if(empty($filePath)){
            //todo-ortal throw exception or error?
        }
        $content = JsonFileService::getFileContent($filePath);
        return $content;
    }
}

