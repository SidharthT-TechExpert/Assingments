function Car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
}

// Example usage
const myCar = new Car("Toyota", 30, 180);
console.log(myCar.name);       
console.log(myCar.mileage);    
console.log(myCar.max_speed);  
