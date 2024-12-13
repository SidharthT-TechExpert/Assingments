 // Method to calculate the area of a circle
 class Area {
    circle(radius) {
        let area = Math.PI * radius * radius;
        console.log("Area of the circle is: " + area);
    }
 // Method to calculate the area of a square    
   square(side) {
        let area = side * side;
        console.log("Area of the square is: " + area);
    }
  
 // Method to calculate the area of a rectangle
    rectangle(length, width) {
        let area = length * width;
        console.log("Area of the rectangle is: " + area);
    }
// Method to calculate the area of a triangle
    triangle(base, height) {
        let area = 0.5 * base * height;
        console.log("Area of the triangle is: " + area);
    }
}

class MyClass extends Area {
    static main(args) {
        let myClass = new MyClass();
        
        console.log("\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle");
        let choice = Number(prompt("Enter your choice:"));
        
        switch (choice) {
            case 1:
                // Circle
                let radius = Number(prompt("Enter Your Circle Radius: "));
                myClass.circle(radius);
                break;
            case 2:
                //Square
                let side = Number(prompt("Enter the side length of the square: "));
                myClass.square(side);
                break;
                
            case 3:
                 // Rectangle
                let length = parseFloat(prompt("Enter the length of the rectangle: "));
                let width = parseFloat(prompt("Enter the width of the rectangle: "));
                myClass.rectangle(length, width);
                break;
                
            case 4:
                // Triangle
              let base = parseFloat(prompt("Enter the base of the triangle: "));
              let height = parseFloat(prompt("Enter the height of the triangle: "));
               myClass.triangle(base, height);
               break;
               
            default:
                console.log("Invalid choice!");
                break;
        }
    }
}

// Calling the main method to start the program
MyClass.main();
