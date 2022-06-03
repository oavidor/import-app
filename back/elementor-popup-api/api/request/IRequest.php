<?php

//todo-ortal remove?
interface IRequest
{
    public function handleRequest($requestMethod, $params);
    public function getBody();
}