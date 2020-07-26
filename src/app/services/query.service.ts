import { Query } from 'src/app/services/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  dummy = [
    {
      id: '3', name: 'Nishanth Shanmuganathan', company: 'Theeran Infotech', imageUrl: '../../../../assets/jlpt.jpg',
      query: 'What is your salary? Are you happy with it?I am 24 years old.I am working as a software developer in an MNC.Currently, my inhand salary is around 65k.I am living a decent life in high tech city of India - Hyderabad.',
      // answers: [
      //   { id: '31', name: 'Lalitha K', company: 'Kongu Engineering College', imageUrl: '', query: 'I was dispirited by the circumstances. I felt like all my hard work over the years went in vain. After the 12th boards, where my friends were getting presents for getting passed or a good performance, I did not get education of my choice.' }
      // ]
    },
    {
      id: '2', name: 'Ashwanth Shanmuganathan', company: 'Theeran Infotech', imageUrl: '../../../../assets/jlpt.jpg',
      query: 'I don\'t feel shy in saying I am a small town girl born in a middle class family. My parents only motive was to provide their children best education possible .This made me ambitious and industrious since childhood. I still remember the days I used to study with candles at my table when there was a power cut.',
      answers: [
        { id: '21', name: 'Lalitha K', company: 'Kongu Engineering College', imageUrl: '', query: 'I was dispirited by the circumstances. I felt like all my hard work over the years went in vain. After the 12th boards, where my friends were getting presents for getting passed or a good performance, I did not get education of my choice.' }

      ]
    },
    {
      id: '1', name: 'Senthil Sakthivel', company: 'Theeran Infotech', imageUrl: '../../../../assets/jlpt.jpg',
      query: 'I got 1st rank in my Ist class and this was statistically unchanged over the years. After my 10th standard, I chose Science and wanted to prepare for IIT JEE. But at that time, there was no coaching in my town. I decided to prepare for my boards exam so that I can get admission in Delhi University. I did my best and got 96.2%. I was the topper of that year in my town.I gave IIT JEE mains exam and got qualified for Advance.But I could not clear the exam.My teachers advised me to drop one year and prepare for IIT - JEE in kota. I had two options - To pack my bags for kota.Or to get admission in DU.But family was struggling financially.My father had already taken loan for my elder sister education and he couldn\'t afford more loan. I didn\'t want to be a burden for him.I had to drop the idea of studying in top colleges.',
      answers: [
        { id: '12', name: 'Lalitha K', company: 'Kongu Engineering College', imageUrl: '', query: 'I was dispirited by the circumstances. I felt like all my hard work over the years went in vain. After the 12th boards, where my friends were getting presents for getting passed or a good performance, I did not get education of my choice.' },
        { id: '13', name: 'Ramalingam K', company: 'Kongu Engineering College', imageUrl: '', query: 'I took admission there and started giving tuition classes to avoid asking for any pocket money to my parents.' },
        { id: '13', name: 'Varadhaganapathy K', company: 'Kongu Engineering College', imageUrl: '', query: 'Being in a Tier 3 college, I knew only few companies are going to visit for campus placement. I have to work hard to get a job. At that time, we didn\'t have any desktop or laptop at our home.I used to learn coding at college.I learnt all the required skills that a company looks for.And then comes the time for campus placement.I got job offer.Not one but from two MNCs - Capgemini and Tech M.I joined capgemini.I used to get 15k inhand salary in my initial days.I worked there for two years.After that, I applied for job in other companies.I got job offer from companies like TCS, Accenture, Virtusa, Cognizant etc.This way, I came to the place where I am today.' }

      ]
    },
  ];
  constructor() { }

  fetchQueries(): Query[] {
    return this.dummy;
  }


  addAnswers(queryId, answer) {
    const ansObj: Query = { id: 'queryId' + '2', name: 'XXX', company: 'ABC International', query: answer, imageUrl: '' };
    this.dummy.forEach(ele => {
      if (ele.id === queryId) {
        ele.answers.push(ansObj);
      }
    });
  }
}
