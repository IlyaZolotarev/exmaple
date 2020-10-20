import React, { Component } from 'react';

import Header from './../../../components/header';
import Hero from './components/hero';
import Tool from './components/tool';
import Challenges from './components/challenges';
import Features from './components/features';
import Additional from './components/additional';
import Service from './components/services';
import Results from './components/results';
import Review from './components/review';
import Contact from '../../../components/contact';
import Footer from '../../../components/footer';

export default class Daunert extends Component {
  componentDidMount() {
    document.body.classList.add('bg--hidden');
  }

  componentWillUnmount() {
    document.body.classList.remove('bg--hidden');
  }

  render() {
    return (
      <>
        <Header theme="egyptianBlue" />
        <Hero />
        <Tool />
        <Challenges />
        <Features />
        <Additional />
        <Service />
        <Results />
        <Contact />
        <Footer theme="egyptianBlue" />
      </>
    );
  }
}
