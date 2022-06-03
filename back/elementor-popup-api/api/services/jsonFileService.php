<?php

class JsonFileService
{

   public static function getFileContent($fileLocation)
   {

      $ConfigurationArray = null;

      try{

            if(empty($fileLocation)){
                throw new Exception('Empty JSON file location.');
            }

         $jsondata = file_get_contents($fileLocation);
         if($jsondata == null){
            $jsondata = "{}";
         }

         $ConfigurationArray = json_decode($jsondata,true);

         return $ConfigurationArray;

      }
      catch (Exception $e) {
        throw new Exception($e->getMessage()); //todo-ortal return?
      }

   }

}