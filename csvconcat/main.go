package main

import (
	"io/ioutil"
	"log"
	"strings"
)

func openCsvFile(filename string) ([][]string, error) {
	content, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	contentArray := strings.Split(string(content), "\n")
	var ret [][]string
	for _, str := range contentArray {
		ret = append(ret, strings.Split(str, ","))
	}
	return ret, nil
}

func createAddresses(strs []string) (ret []string) {
	buffer := ""
	split := strings.Split(strs[17], " ")
	buffer += strings.Join(split[1:], " ")
	buffer += " " + strs[18]
	if len(strs[19]) > 0 {
		buffer += "/" + strs[19]
	}
	ret = append(ret, buffer)
	// some of addresses in one of csv files are built in different
	// inconsistency is the thing i love the most
	split = strings.Split(strs[17], " ")
	buffer = split[len(split)-1]
	buffer += " " + strs[18]
	if len(strs[19]) > 0 {
		buffer += "/" + strs[19]
	}
	ret = append(ret, buffer)
	return
}

func mergeRegon(src, dest [][]string) {
	for i, drow := range dest {
		length := len(drow)
		for _, srow := range src {
			if len(srow) < 26 || len(drow) < 3 {
				continue
			}
			brek := false
			daddrs := createAddresses(srow)
			for _, daddr := range daddrs {
				if strings.ToLower(daddr) == strings.ToLower(drow[2]) {
					dest[i] = append(drow, srow[25])
					brek = true
					break
				}
			}
			if brek {
				break
			}
		}
		if len(dest[i]) == length {
			dest[i] = append(drow, "")
		}
	}
}

func saveCsvFile(filename string, content [][]string) (err error) {
	buffer := ""
	for _, con := range content {
		for i, tent := range con {
			if i != 0 {
				buffer += ","
			}
			if tent[len(tent)-1] == '\n' {
				if len(tent) == 1 {
					tent = ""
				} else {
					tent = tent[:len(tent)-1]
				}
			}
			buffer += tent
		}
		buffer += "\n"
	}
	buffer = buffer[:len(buffer)-1]
	err = ioutil.WriteFile(filename, []byte(buffer), 0644)
	return
}

func main() {
	src, err := openCsvFile("pom.csv") //os.Args[0])
	if err != nil {
		log.Fatalln("Failed to load source file.", err)
	}
	dest, err := openCsvFile("roz.csv") //os.Args[1])
	if err != nil {
		log.Fatalln("Failed to load destination file.", err)
	}
	mergeRegon(src, dest)
	err = saveCsvFile("test.csv", dest) //os.Args[2], dest)
	if err != nil {
		log.Fatalln("Failed to save file.", err)
	}
}
