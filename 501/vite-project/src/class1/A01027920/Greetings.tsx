import React from 'react';

export function Greeting(name:string){
    const greetings: string[] = [
        `Hello ${name}`,
        `Hi ${name}`,
        `Greetings ${name}`,
        `Welcome ${name}`,
    ];
    const rand_greet = greetings[Math.floor(Math.random() * greetings.length)];
    return rand_greet;
}
