import React from 'react';
import styles from './Questions.module.css';
import Divider from '@material-ui/core/Divider';
import logo from './images/coding.svg';
import code from './images/fizzbuzz.PNG';

  class Questions extends React.Component {
    render() {
        return (
            
            <div className={styles.main}>
                <div className={styles.qHeading}>
                <h1>🤔Questions</h1>
                </div>
                <div className={styles.card}>
                <h3 className={styles.qHeader}>FizzBuzz</h3>
                    <p className={styles.q1}>Write a program that prints the numbers from 0 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.</p>
                    <img className={styles.solution} src={code} alt="FizzBuzz Solution"/>
                </div>
            </div>
            
        )
  }
}
//     function Fizzbuzz() {
//         for (var i= 0; i < 101; i++) {
//             if (i % 15 === 0) console.log('FizzBuzz');
//             else if (i % 3 === 0) console.log('Fizz');
//             else if (i % 5 === 0) console.log('Buzz');
//             else console.log(i); 
//         }
//     }
// Fizzbuzz();
export default Questions;

