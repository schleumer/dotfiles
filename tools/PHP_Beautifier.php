<?php

require_once 'PHP_Beautifier.php';

// Create the instance
$oBeautifier = new PHP_Beautifier();
// Add a filter, without any parameter
$oBeautifier->addFilter('ArraySimple');
// Add another filter, with one parameter
$oBeautifier->addFilter('Pear',array('add_header'=>'php'));
// Set the indent char, number of chars to indent and newline char
$oBeautifier->setIndentChar('\t');
//$oBeautifier->setIndentNumber(4);
$oBeautifier->setNewLine("\n");
// Define the input file
$oBeautifier->setInputFile($_SERVER["argv"][1]);
// Define an output file.
// $oBeautifier->setOutputFile(__FILE__.'.beautified.php');
// Process the file. DON'T FORGET TO USE IT
$oBeautifier->process();
// Show the file (echo to screen)
$oBeautifier->show();
// Save the file
$oBeautifier->save();
