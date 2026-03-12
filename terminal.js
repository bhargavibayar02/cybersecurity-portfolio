const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

function print(text){
    output.innerHTML += "<div>"+text+"</div>";
}

input.addEventListener("keydown", function(e){

if(e.key === "Enter"){

let cmd = input.value.toLowerCase();

print("<span style='color:#00ffee'>bhargavi@cyber:~$</span> " + cmd);

switch(cmd){

case "help":

print("Available Commands:");
print("about");
print("education");
print("projects");
print("internships");
print("certifications");
print("achievements");
print("contact");
print("clear");

break;

case "about":

print("B S Bhargavi");
print("Cyber Security & Cyber Forensics Student");
print("Srinivas University Institute of Engineering & Technology");
print("CGPA: 9.65");
print("Interested in Ethical Hacking, Digital Forensics, and Security Research.");

break;

case "education":

print("B.Tech Cyber Security & Cyber Forensics");
print("Srinivas University (2023–2027)");
print("CGPA: 9.65");

print("PUC - Vivekananda PU College Puttur (97.5%)");

print("SSLC - Vittal Jaycees English Medium School (99.36%)");

break;

case "projects":

print("Major Projects:");

print("• Machine Learning IDS for Network Security");
print("• Web Vulnerability Scanner");
print("• OWASP Juice Shop Security Testing");
print("• DVWA Vulnerability Exploitation");
print("• Blockchain DApps using Solidity, Truffle, Ganache");
print("• Portfolio Website");
print("• Mood Story App");
print("• Password Strength Checker");
print("• Job Portal Web App");

break;

case "internships":

print("Internships:");

print("Cyber Security Intern – System Tron");
print("Cyber Security Intern – CodTech IT Solutions");
print("Blockchain Development Intern – CodTech");
print("Web Development Intern – CodSoft");
print("Web Development Intern – Zalima Development");

break;

case "certifications":

print("Certifications:");

print("Cisco Cybersecurity Certifications");
print("IBM SkillsBuild Certifications");
print("Infosys Springboard");
print("Certiport Certifications");
print("CodeRed Cybersecurity");
print("Nestler E-Learning");
print("HP Life Certifications");
print("Udemy Courses");

break;

case "achievements":

print("Achievements:");

print("District level prizes in:");
print("• Singing");
print("• Dancing");
print("• Yakshagana Recitation");
print("• Kannada & English Speech");

print("Completed Vidwath Exams in Bharatanatyam.");

print("Maintained strong academic performance.");

break;

case "contact":

print("Location: Mangaluru, Karnataka");

print("Email: bhargavibayar@gmail.com");

print("GitHub:");
print("https://github.com/bhargavibayar02");

print("LinkedIn:");
print("https://www.linkedin.com/in/b-s-bhargavi-2410bb293");

break;

case "clear":

output.innerHTML = "";

break;

default:

print("Command not found.");
print("Type 'help' to see available commands.");

}

input.value="";

}

});