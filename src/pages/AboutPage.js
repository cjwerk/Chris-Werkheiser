import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>"My name is Chris James Werkheiser, I was born in Las Vegas Nevada in the year 2000. </p>
             <p>   When I was 4 my family moved to AZ and I have lived her ever since. When I was 9 years old I didn't know it then but I would meet the women who would become my wife, and on June 5th 2019 she did.</p> 
             <p> I have always loved computer's and would often wonder how they would work, I only started learning how to code in 2020 but I am loving every minute of it. Few things intrigue me as much as learning to code. I am excited to continue to learn more and more about this exciting field, thanks to the wonderfull instructional staff at University of Arizona.</p>



            </Content>
        </div>
    );

}

export default AboutPage;