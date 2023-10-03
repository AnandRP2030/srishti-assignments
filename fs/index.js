const { create } = require("domain");
const fs = require("fs");

const selfIntroduction = `My Name is Anand R P. 
I am living in Trivandrum. 
I graduated in 2021 from Kerala University.
I have four memebers in my family. I am the youngest in my family.
I like playing chess and reading books.`;

const path = "myFile.txt";

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

function copyNewFile() {
  fs.copyFile(path, "myFile2.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Copied Successfully.");
      deleteAFile();
    }
  });
}

function deleteAFile() {
  fs.unlink(path, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(path, `deleted successfully`);
    }
  });
}

createFile();
