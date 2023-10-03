const { create } = require("domain");
const fs = require("fs");

const selfIntroduction = `My Name is Anand R P. 
I am living in Trivandrum. 
I graduated in 2021 from Kerala University.
I have four memebers in my family. I am the youngest in my family.
I like playing chess and reading books.`;

const path = "myFolder/myFile.txt";

// create a directory myfolder
function createADirectory() {
  if (!fs.existsSync("myFolder")) {
    fs.mkdir("myFolder", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Folder created successfully`);
      }
    });
  }

  createFile();
}

// 8  and a file myFile.txt which contains your self introduction.
function createFile() {
  fs.writeFile(path, selfIntroduction, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Self Introduction written to file`);
      appendCompanyDetails();
    }
  });
}

const companyDetails = `
 Company Details
 Company Name: Srishty Innovatives, 
 Location: Trivandrum,
 Position: MERN Trainer cum Developer, 
 Official Mail id: anandrp.sics@gmail.com`;

// 9 . append the file with your company details.
function appendCompanyDetails() {
  fs.appendFile(path, companyDetails, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Company Details appended to file`);
      copyNewFile();
    }
  });
}

// 10. copy the file to myFile2.txt
function copyNewFile() {
  fs.copyFile(path, "myFolder/myFile2.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Copied Successfully.");
      deleteAFile();
    }
  });
}

// 11. Delete the file myFile.txt
function deleteAFile() {
  fs.unlink(path, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(path, `deleted successfully`);
    }
  });
}

createADirectory();
