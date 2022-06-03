<?php
/**
 * Created by PhpStorm.
 * User: Tom
 * Date: 1/2/2019
 * Time: 12:39 PM
 */

class JsonService{

   public static function getData($fileLocation)
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
        //  logger::error('Caught exception: ' . $e->getMessage()); //todo-ortal remove
        //  return null;
        throw new Exception($e->getMessage());
      }

   }

}