class Lambdasian{
    constructor({name, age, location}){
            this.name = name;
            this.age = age;
            this.location = location;
    }

    speak(){
        return ("Hello my name is " + this.name + ", I am from " + this.location + ".")
    }
}



class Instructor extends Lambdasian{
    constructor({name, age, location, specialty, favLanguage, catchPhrase}){
        super({name, age, location});
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject){
        return ("Today we are learning about " + subjet);
    }

    grade(student, subject){
        return (student.name + " recieves a perfect score on " + subjet);
    }
}



class Student extends Lambdasian{
    constructor({name, age, location, previousBackground, className, favSubjets}){
        super(name,age,location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjets = favSubjets;
        this.grade = Math.floor(Math.random()*101);
    }

    listSubject(){
        return("Loving" + this.favSubjets.join(",") + "!");
    }

    PRAssignment(student, subject){
        return (student.name + " has submitted a PR for" + subject);
    }

    sprintChallenge(student, subject){
        return (student.name + "has begun sprint challenge on " + subject);
    }

    graduate(){
        if(this.grade>70){
            return("Congratulations! " + this.name + " is ready to graduate");
        }else{
            return(this.name + " is not allowed to graduate");
        }
    }

}

class ProjetManager extends Instructor{
    constructor({name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor}){
        super(name,age,location,specialty,favLanguage,catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;

    }

    standUp(channel){
        return (this.name + " announces to " + channel + ", @channel standy times!");

    }

    debugsCode(student, subject){
        return(this.name + " debugs " + student.name + "'s code on " + subject);
    }
}