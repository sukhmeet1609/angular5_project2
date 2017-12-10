export class Recipe{
    
        public name: string;         // here it would be a public property i.e. name of string type.
        public description: string; //In this case I also want to have a description in each recipe so, I'll add my description property which also will be a string
        public imagePath: string;   //Now, maybe we also want to store an image for each recipe so we should have the image path since we don't
        
        constructor(name: string, desc: string, imagePath: string){ //constructor simply is a built in function every class has
            this.name = name;
            this.description = desc;
            this.imagePath = imagePath;
        }
        
    }