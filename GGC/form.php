<?php
// Include PHPExcel library
require 'PHPExcel/Classes/PHPExcel.php';

// Get form data
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$year = $_POST['year'];
$branch = $_POST['branch'];
$thoughts = $_POST['thoughts'];

// Create new PHPExcel object
$objPHPExcel = new PHPExcel();

// Set column headers
$objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A1', 'Name')
            ->setCellValue('B1', 'Age')
            ->setCellValue('C1', 'Gender')
            ->setCellValue('D1', 'Year')
            ->setCellValue('E1', 'Branch')
            ->setCellValue('F1', 'Thoughts');

// Set data from form
$objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A2', $name)
            ->setCellValue('B2', $age)
            ->setCellValue('C2', $gender)
            ->setCellValue('D2', $year)
            ->setCellValue('E2', $branch)
            ->setCellValue('F2', $thoughts);

// Save Excel file
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
$objWriter->save('feedback.xlsx');

// Redirect back to the HTML form page
header('Location: index.html');
exit();
?>

