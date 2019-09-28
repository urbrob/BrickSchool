package main

import (
	"io/ioutil"
	"os"
	"testing"
)

func TestOpenCsvFile(t *testing.T) {
	_, err := openCsvFile("testfile.csv")
	if err == nil {
		t.Error("openCsvFile should return error but it hasn't")
	}

	err = ioutil.WriteFile("testfile.csv", []byte("this,is,testing\nstring,dont,touch"), 0644)
	if err != nil {
		t.Error("Failed to create file needed to continue tests\n", err)
	}

	content, err := openCsvFile("testfile.csv")
	if err != nil {
		t.Error("openCsvFile returned error when it shouldn't\n", err)
	}
	if len(content) != 2 {
		t.Error("openCsvFile created too many rows")
	}
	for _, i := range content {
		if len(i) != 3 {
			t.Error("openCsvFile created too many columns")
		}
	}
	_ = os.Remove("testfile.csv")
}

func TestSaveCsvFile(t *testing.T) {
	t.Log("Test SaveCsvFile")
	testArray := [][]string{{"test1", "test2", "test3"}, {"test4", "test5", "test6"}, {"test7", "test8", "test9"}}
	err := saveCsvFile("testfile2.csv", testArray)
	if err != nil {
		t.Error("saveCsvFile returned error when it shouldn't\n", err)
	}
	loadedArray, err := openCsvFile("testfile2.csv")
	if len(testArray) != len(loadedArray) {
		t.Errorf("saveCsvFile saved wrong number of rows: loaded: %d, expected %d", len(loadedArray), len(testArray))
	}
	for i := range testArray {
		if len(testArray[i]) != len(loadedArray[i]) {
			t.Errorf("saveCsvFile saved wrong number of columns: loaded: %d, expected %d", len(loadedArray[i]), len(testArray[i]))
		}
		for j := range testArray[i] {
			if testArray[i][j] != loadedArray[i][j] {
				t.Errorf("saveCsvFile saved wrong value: loaded: %d, expected %d", len(loadedArray[i][j]), len(testArray[i][j]))
			}
		}
	}
	_ = os.Remove("testfile2.csv")
}
