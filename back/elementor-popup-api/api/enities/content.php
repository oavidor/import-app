<?php

class Content //todo-ortal remove?
{
    public $title;
    public $content;

    function setTitle($title){
        $this->title = $title;
    }

    function getTitle(){
        return $this->title;
    }

    function setContent($content){
        $this->content = $content;
    }

    function getContent(){
        return $this->content;
    }

}