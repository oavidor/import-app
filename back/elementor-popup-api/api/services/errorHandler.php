<?php

class ErrorHandler
{

   public static function parseError($error) //todo-ortal get from config? add global param?
   {
        return  array(
            'status' => false,
            'error' => $error -> getMessage(),
            'error_code' => $error -> getCode()
        );
   }

}